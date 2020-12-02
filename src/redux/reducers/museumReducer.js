const currentMonth = new Date().getMonth() + 1

const initialState = {
    sellPrice: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24},
    critterType: "bugs",
    search: "",
    //TODO switch hemisphere to userReducer
    hemisphere: "northern",
    allYear: false,
    selectedMonths: [currentMonth],
    sortById: true,
    sortByName: false,
    allLocations: false,
    location: [],
    rarity: {min: 0, max: 3},
    specialPrice: false,
    shadowSize: {min: 0, max: 6}
}

export const changeMuseumReducer = (type, payload) => ({ type, payload })

const museumReducer = (state = initialState, action) => ({...state, [action.type]: action.payload})

export default museumReducer