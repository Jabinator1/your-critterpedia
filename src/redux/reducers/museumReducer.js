const initialState = {
    price: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24},
    critterType: "bugs",
    search: "",
    filters: {}
}

export const changeMuseumReducer = (type, payload) => ({ type, payload })

const museumReducer = (state = initialState, action) => ({...state, [action.type]: action.payload})

export default museumReducer