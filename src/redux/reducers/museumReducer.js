const currentMonth = new Date().getMonth()

const initialState = {
    critterType: "bugs",
    search: "",
    isAllYearChecked: false,
    selectedMonths: [currentMonth],

    sellPrice: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24},

    isAllCritterRarityChecked: true,
    selectedCritterRarity: [],

    isAllLocationsChecked: true,
    selectedLocations: [],

    isAllSpeedsChecked: true,
    selectedSpeeds: [],

    shadowSize: {min: 0, max: 6},

    //TODO switch hemisphere to userReducer
    hemisphere: "northern",
    sortById: true,
    sortByName: false
}

export const changeMuseumReducer = (type, payload) => ({ type, payload })

const museumReducer = (state = initialState, action) => ({...state, [action.type]: action.payload})

export default museumReducer