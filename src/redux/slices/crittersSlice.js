import axios from 'axios'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { selectLanguage } from '../counter/userSlice'
import { selectFilters } from '../filtersSlice'

const initialState = {
    currentCritterType: "insects",
    insects: [],
    fish: [],
    seaCreatures: [],
    status: "idle",
    error: null
}

export const fetchCritters = createAsyncThunk("critters/fetchCritters", async () => {
    const insects = await axios.get(`https://acnhapi.com/v1a/bugs`)
    const fish = await axios.get(`https://acnhapi.com/v1a/fish`)
    const sea = await axios.get(`https://acnhapi.com/v1a/sea`)
    return { insects: insects.data, fish: fish.data, sea: sea.data }
})

export const crittersSlice = createSlice({
    name: "critters",
    initialState,
    extraReducers: {
        [fetchCritters.fulfilled]: (state, action) => {
            state.insects = action.payload.insects
            state.fish = action.payload.fish
            state.seaCreatures = action.payload.sea
            state.status = "success"
        },
        [fetchCritters.pending]: state => {
            state.status = "loading"
        },
        [fetchCritters.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        }
    }
})

export default crittersSlice.reducer

export const selectCurrentCritterType = state => state.critters.currentCritterType
export const selectCritters = state => state.critters[state.critters.currentCritterType]
export const selectCrittersStatus = state => state.critters.status


// For the timeOFDayFilter
const range = (min, max) => {
    const arr = []
    while (min <= max) {
        arr.push(min++)
    }
    return arr
}

//# FILTER FUNCTIONS
const searchFilter = (critter, filters, lang) => critter.name[`name-${lang}`].toUpperCase().includes(filters.searchText.toUpperCase())

const monthFilter = (critter, filters) => (
    filters.isAllYearChecked ? true
    : filters.selectedMonths.length === 0 ? false
    : critter.availability.isAllYear ? true
    : critter.availability[`month-array-${filters.hemisphere}`].some(month => filters.selectedMonths.includes(month))
)

const timeOfDayFilter = (critter, filters) => (
    critter.availability.isAllDay ? true
    : critter.availability["time-array"].some(time => range(filters.timeOfDay.min, filters.timeOfDay.max).includes(time))
)

const sellPriceFilter = (critter, filters) => critter.price >= filters.sellPrice.min && critter.price <= filters.sellPrice.max

const rarityFilter = (critter, filters) => (
    filters.isAllCritterRarityChecked ? true
    : filters.selectedCritterRarity.includes(critter.availability.rarity)
)

//# Only applies to Fish
const locationsFilter = (critter, filters, critterType) => (
    filters.isAllLocationsChecked || critterType !== "fish" ? true 
    : filters.selectedLocations.length === 0 ? false
    : filters.selectedLocations.includes(critter.availability.location)
)

//# combine fish and sea shadow size filters
const fishShadowSizeFilter = (critter, filters, critterType) => (
    filters.isAllFishShadowSizesChecked || critterType !== "fish" ? true
    : filters.selectedLocations.length === 0 ? false
    : filters.selectedFishShadowSizes.includes(critter.shadow)
)

const seaShadowSizeFilter = (critter, filters, critterType) => (
    filters.isAllSeaCreatureShadowSizesChecked || critterType !== "seaCreatures" ? true 
    : critter.selectedSeaCreatureShadowSizes.length === 0 ? false
    : filters.selectedSeaCreatureShadowSizes.includes(critter.shadow)
)

const seaSpeedsFilter = (critter, filters, critterType) => (
    filters.isAllSpeedsChecked || critterType !== "seaCreatures" ? true
    : filters.selectedSpeeds.length === 0 ? false
    : filters.selectedSpeeds.includes(critter.speed)
)

export const crittersFilteredSelector = createSelector(
    [selectCritters, selectLanguage, selectFilters, selectCurrentCritterType],
    (critterArr, lang, filters, critterType) => critterArr.filter(critter => (
        searchFilter(critter, filters, lang)
        && monthFilter(critter, filters)
        && timeOfDayFilter(critter, filters)
        && sellPriceFilter(critter, filters)
        && rarityFilter(critter, filters)
        && locationsFilter(critter, filters, critterType)
        && fishShadowSizeFilter(critter, filters, critterType)
        && seaShadowSizeFilter(critter, filters, critterType)
        && seaSpeedsFilter(critter, filters, critterType)
    ))
)