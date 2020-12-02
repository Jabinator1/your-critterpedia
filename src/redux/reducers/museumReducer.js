const currentMonth = new Date().getMonth() + 1

const initialState = {
    price: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24},
    critterType: "bugs",
    search: "",
    hemisphere: "northern",
    selectedMonths: [currentMonth],
    sortById: true,
    sortByName: false,
    location: [],
    rarity: 0,
    specialPrice: false,
    shadowSize: {min: 0, max: 6}
}

export const changeMuseumReducer = (type, payload) => ({ type, payload })

const museumReducer = (state = initialState, action) => ({...state, [action.type]: action.payload})

export default museumReducer