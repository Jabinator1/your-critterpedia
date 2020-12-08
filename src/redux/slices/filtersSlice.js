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
        //TODO UPDATE THIS FOR BETTER OPTIMIZATION
        updateFilters: (state, action) => {
            state[action.payload.filter] = action.payload.value
        }
    }
})

export default filterSlice.reducer

export const {updateFilters, updateHemisphere} = filterSlice.actions

export const selectFilters = state => state.filters
export const selectHemisphere = state => state.filters.hemisphere

//# For the timeOFDayFilter
const range = (min, max) => {
    const arr = []
    while (min <= max) {
        arr.push(min++)
    }
    return arr
}

//# FILTER FUNCTIONS
export const searchFilter = (critter, filters, lang) => critter.name[`name-${lang}`].toUpperCase().includes(filters.searchText.toUpperCase())

export const monthFilter = (critter, filters) => (
    filters.isAllYearChecked ? true
    : filters.selectedMonths.length === 0 ? false
    : critter.availability.isAllYear ? true
    : critter.availability[`month-array-${filters.hemisphere}`].some(month => filters.selectedMonths.includes(month))
)

export const timeOfDayFilter = (critter, filters) => (
    critter.availability.isAllDay ? true
    : critter.availability["time-array"].some(time => range(filters.timeOfDay.min, filters.timeOfDay.max).includes(time))
)

export const sellPriceFilter = (critter, filters) => critter.price >= filters.sellPrice.min && critter.price <= filters.sellPrice.max

export const rarityFilter = (critter, filters) => (
    filters.isAllCritterRarityChecked ? true
    : filters.selectedCritterRarity.includes(critter.availability.rarity)
)

//# Only applies to Fish
export const locationsFilter = (critter, filters, critterType) => (
    filters.isAllLocationsChecked || critterType !== "fish" ? true 
    : filters.selectedLocations.length === 0 ? false
    : filters.selectedLocations.includes(critter.availability.location)
)

//# combine fish and sea shadow size filters
export const fishShadowSizeFilter = (critter, filters, critterType) => (
    filters.isAllFishShadowSizesChecked || critterType !== "fish" ? true
    : filters.selectedLocations.length === 0 ? false
    : filters.selectedFishShadowSizes.includes(critter.shadow)
)

export const seaShadowSizeFilter = (critter, filters, critterType) => (
    filters.isAllSeaCreatureShadowSizesChecked || critterType !== "seaCreatures" ? true 
    : critter.selectedSeaCreatureShadowSizes.length === 0 ? false
    : filters.selectedSeaCreatureShadowSizes.includes(critter.shadow)
)

export const seaSpeedsFilter = (critter, filters, critterType) => (
    filters.isAllSpeedsChecked || critterType !== "seaCreatures" ? true
    : filters.selectedSpeeds.length === 0 ? false
    : filters.selectedSpeeds.includes(critter.speed)
)