const initialState = {
    critterpediaInsects: [],
    critterpediaFish: [],
    critterpediaSeaCreatures: []
}

const EDIT_INSECTS = "EDIT_INSECTS"
const EDIT_FISH = "EDIT_FISH"
const EDIT_SEA_CREATURES = "EDIT_SEA_CREATURES"

const getCritters = () => {

}

const editInsects = updatedInsects => ({
    type: EDIT_INSECTS,
    payload: updatedInsects
})

const editFish = updatedFish => ({
    type: EDIT_FISH,
    payload: updatedFish
})

const editSeaCreatures = updatedSeaCreatures => ({
    type: EDIT_SEA_CREATURES,
    payload: updatedSeaCreatures
})


const critterpediaReducer = (state = initialState, action) => {
    switch(action.type) {
        case EDIT_INSECTS:
            //# MAKE AXIOS REQUEST HERE TO ALTER BUGS TABLE
            return {...state, critterpediaInsects: action.payload}
        case EDIT_FISH:
            return {...state, critterpediaFish: action.payload}
        case EDIT_SEA_CREATURES:
            return {...state, critterpediaSeaCreatures: action.payload}
        default:
            return state
    }
}