import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

//make sure to pass in an object like this: {critterArrType, critterArr}
export const updateCritterpedia = createAsyncThunk("critterpedia/update", async critterArr => {
    const res = await axios.put("/api/critterpedia", critterArr)
    return res.data
})

export const fetchCritterpedia = createAsyncThunk("critterpedia/fetchCritterpedia", async () => {
    const res = await axios.get("/api/critterpedia")
    return res.data
})

export const critterpediaSlice = createSlice({
    name: "critterpedia",
    initialState: {
        insectsCritterpedia: [],
        fishCritterpedia: [],
        seaCritterpedia: [],
        status: "idle",
        error: null
    },
    extraReducers: {
        [fetchCritterpedia.pending]: state => {
            state.status = "loading"
        },
        [fetchCritterpedia.fulfilled]: (state, action) => {
            state.insectsCritterpedia = action.payload.bug_arr
            state.fishCritterpedia = action.payload.fish_arr
            state.seaCritterpedia = action.payload.sea_arr
            state.status = "succeeded"
        },
        [fetchCritterpedia.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        },
        [updateCritterpedia.fulfilled]: (state, action) => {
            state.insectsCritterpedia = action.payload.bug_arr
            state.fishCritterpedia = action.payload.fish_arr
            state.seaCritterpedia = action.payload.sea_arr
        }
    }
})

export const selectCritterpediaCritters = state => state.critterpedia[`${state.critters.currentCritterType}Critterpedia`]
export const selectCritterpediaError = state => state.critterpedia.error
export const selectCritterpediaStatus = state => state.critterpedia.status

export default critterpediaSlice.reducer