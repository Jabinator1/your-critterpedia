import axios from 'axios'
import { createAsyncThunk, createSelector, createSlice } from '@reduxjs/toolkit'
import { selectLanguage, selectRegion } from './userSlice'
import { 
    fishShadowSizeFilter, 
    locationsFilter, 
    monthFilter, 
    rarityFilter, 
    searchFilter, 
    seaShadowSizeFilter, 
    seaSpeedsFilter, 
    selectFilters, 
    sellPriceFilter, 
    timeOfDayFilter, 
    todayFilter
} from './filtersSlice'

const initialState = {
    currentCritterType: "insects",
    insects: [],
    fish: [],
    sea: [],
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
    reducers: {
        changeCritterType: (state, action) => {
            state.currentCritterType = action.payload
        }
    },
    extraReducers: {
        [fetchCritters.fulfilled]: (state, action) => {
            state.insects = action.payload.insects
            state.fish = action.payload.fish
            state.sea = action.payload.sea
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

export const {changeCritterType} = crittersSlice.actions

export const selectCurrentCritterType = state => state.critters.currentCritterType
export const selectCritters = state => state.critters[state.critters.currentCritterType]
export const selectCrittersStatus = state => state.critters.status

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

export const currentInsectsSelector = createSelector(
    [state => state.critters.insects, selectRegion],
    (insectsArr, region) => insectsArr.filter(critter => todayFilter(critter, region))
)

export const currentFishSelector = createSelector(
    [state => state.critters.fish, selectRegion],
    (fishArr, region) => fishArr.filter(critter => todayFilter(critter, region))
)

export const currentSeaSelector = createSelector(
    [state => state.critters.sea, selectRegion],
    (seaArr, region) => seaArr.filter(critter => todayFilter(critter, region))
)