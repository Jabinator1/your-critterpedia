import { createSlice } from "@reduxjs/toolkit"

const currentMonth = new Date().getMonth() + 1

const initialState = {
    searchText: "",

    hemisphere: "northern",
    isAllYearChecked: false,
    selectedMonths: [currentMonth],

    timeOfDay: {min: 0, max: 24},

    sellPrice: {min: 0, max: 12000},

    isAllCritterRarityChecked: true,
    selectedCritterRarity: [],

    isAllLocationsChecked: true,
    selectedLocations: [],

    isAllSpeedsChecked: true,
    selectedSpeeds: [],

    isAllFishShadowSizesChecked: true,
    selectedFishShadowSizes: [],

    isAllSeaCreatureShadowSizesChecked: true,
    selectedSeaCreatureShadowSizes: [],
}

export const filterSlice = createSlice({
    name: "filters",
    initialState,
    reducers: {
        searchUpdated: (state, action) => {
            state.searchText = action.payload
        },
        updateHemisphere: (state, action) => {
            state.hemisphere = action.payload
        },
        
    }
})

export default filterSlice.reducer

export const {searchUpdated, updateHemisphere} = filterSlice.actions

export const selectFilters = state => state.filters