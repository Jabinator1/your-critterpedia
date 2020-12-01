const initialState = {
    price: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24},
    critterType: "bugs",
    search: "",
    filters: {}
}

const CHANGE_PRICE = "CHANGE_PRICE"
const CHANGE_TIME = "CHANGE_TIME"
const CHANGE_CRITTER = "CHANGE_CRITTER"
const CHANGE_SEARCH = "CHANGE_SEARCH"
const CHANGE_FILTERS = "CHANGE_FILTERS"

export const changeSlider = (type, nums) => ({
    type: type,
    payload: nums
})

export const changeCritterType = critterType => ({
    type: CHANGE_CRITTER,
    payload: critterType
})

export const changeSearch = search => ({
    type: CHANGE_SEARCH,
    payload: search
})

export const changeFilters = filters => ({
    type: CHANGE_FILTERS,
    paload: filters
})

const museumReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_PRICE:
            return {...state, price: action.payload}
        case CHANGE_TIME:
            return {...state, timeOfDay: action.payload}
        case CHANGE_CRITTER:
            return {...state, critterType: action.payload}
        case CHANGE_SEARCH:
            return {...state, search: action.payload}
        case CHANGE_FILTERS:
            return {...state, filters: action.payload}
        default:
            return state
    }
}

export default museumReducer