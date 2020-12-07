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
        updateFilters: (state, action) => {
            state[action.payload.filter] = action.payload.value
        }
    }
})

export default filterSlice.reducer

export const {updateFilters, updateHemisphere} = filterSlice.actions

export const selectFilters = state => state.filters
export const selectHemisphere = state => state.filters.hemisphere