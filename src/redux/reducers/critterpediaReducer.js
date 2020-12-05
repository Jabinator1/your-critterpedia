import axios from 'axios'

const initialState = {
    critterpediaInsects: [],
    critterpediaFish: [],
    critterpediaSeaCreatures: []
}

export const fetchCritterpedia = async dispatch =>  {
    const res = await axios.get("/api/critterpedia")
    dispatch(critterpediaLoaded(res.data))
}

export const critterpediaLoaded = critterpedia => ({
    type: "critterpedia/loaded",
    payload: critterpedia
})

export const critterpediaEdited = updatedInsectsArr => ({
    type: "critterpedia/edited",
    payload: updatedInsectsArr
})

export const saveNewInsects = newInsectsArr => {
    const saveNewInsectsThunk = async dispatch => {
        const initialInsects = { newInsectsArr }
        const res = await axios.put("/api/critterpedia", {critterArrType: "bugs_arr", critterArr: initialInsects})
        dispatch(critterpediaEdited(res.data))
    }
    return saveNewInsectsThunk
}
// export const editInsects = updatedInsects => ({
//     type: EDIT_INSECTS,
//     payload: updatedInsects
// })

// export const editFish = updatedFish => ({
//     type: EDIT_FISH,
//     payload: updatedFish
// })

// export const editSeaCreatures = updatedSeaCreatures => ({
//     type: EDIT_SEA_CREATURES,
//     payload: updatedSeaCreatures
// })


const critterpediaReducer = (state = initialState, action) => {
    const {type, payload} = action
    switch(type) {
        case "critterpedia/critterpediaLoaded":
            return {...state, critterpediaInsects: payload.bug_arr, critterpediaFish: payload.fish_arr, critterpediaSeaCreatures: payload.sea_arr}
        case "critterpedia/critterpediaEdited":
            return {...state, critterpediaInsects: payload.bug_arr, critterpediaFish: payload.fish_arr, critterpediaSeaCreatures: payload.sea_arr}
        // case EDIT_INSECTS:
        //     return {...state, critterpediaInsects: action.payload}
        // case EDIT_FISH:
        //     return {...state, critterpediaFish: action.payload}
        // case EDIT_SEA_CREATURES:
        //     return {...state, critterpediaSeaCreatures: action.payload}
        default:
            return state
    }
}

export default critterpediaReducer