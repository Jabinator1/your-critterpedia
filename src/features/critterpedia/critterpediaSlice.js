import axios from 'axios'

const initialState = {
    bug_arr: [],
    fish_arr: [],
    sea_arr: []
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
    return saveNewInsectsThunk = async dispatch => {
        const initialInsects = { newInsectsArr }
        const res = await axios.put("/api/critterpedia", {critterArrType: "bugs_arr", critterArr: initialInsects})
        dispatch(critterpediaEdited(res.data))
    }
}



const critterpediaReducer = (state = initialState, action) => {
    switch(action.type) {
        case "critterpedia/critterpediaLoaded":
            return {...state, bug_arr: payload.bug_arr, fish_arr: payload.fish_arr, sea_arr: payload.sea_arr}
        case "critterpedia/critterpediaEdited":
            return {...state, bug_arr: payload.bug_arr, fish_arr: payload.fish_arr, sea_arr: payload.sea_arr}
        default:
            return state
    }
}

export default critterpediaReducer