const initialState = {
    price: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24}
}

const CHANGE_PRICE = "CHANGE_PRICE"
const CHANGE_TIME = "CHANGE_TIME"

export const changePrice = (min, max) => ({
    type: CHANGE_PRICE,
    payload: {min, max}
})

export const changeTime = (min, max) => ({
    type: CHANGE_TIME,
    payload: {min, max}
})

const museumReducer = (state = initialState, action) => {
    const {min, max} = action.payload
    switch(action.type) {
        case CHANGE_PRICE:
            return {...state, price: {min, max}}
        case CHANGE_TIME:
            return {...state, timeOfDay: {min, max}}
        default:
            return state
    }
}

export default museumReducer