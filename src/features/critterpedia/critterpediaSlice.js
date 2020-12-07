import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const updateInsects = createAsyncThunk("critterpedia/update", async initialInsects=> {
    const res = await axios.put("/api/critterpedia", {critterArrType: "bug_arr", critterArr: initialInsects})
    return res.data
})

export const fetchCritterpedia  = createAsyncThunk("critterpedia/fetchCritterpedia", async () => {
    const res = await axios.get("/api/critterpedia")
    return res.data
})

export const critterpediaSlice = createSlice({
    name: "critterpedia",
    initialState: {
        insects: [],
        fish: [],
        seaCreatures: [],
        status: "idle",
        error: null
    },
    reducers: {
        critterpediaUpdated: (state, action) => {
            state.insects = action.payload.bugs_arr
            state.fish = action.payload.fish_arr
            state.seaCreatures = action.payload.sea_arr
        }
    },
    extraReducers: {
        [fetchCritterpedia.pending]: state => {
            state.status = "loading"
        },
        [fetchCritterpedia.fulfilled]: (state, action) => {
            state.status = "succeeded"
            state.insects = state.insects.concat(action.payload.bugs_arr)
            state.fish = state.fish.concat(action.payload.fish_arr)
            state.seaCreatures = state.seaCreatures.concat(action.payload.sea_arr)
        },
        [fetchCritterpedia.rejected]: (state, action) => {
            state.status = "failed"
            state.error = action.error.message
        },
        [editCritterpedia.fulfilled]: (state, action) => {
            state.insects = state.insects.concat(action.payload.bugs_arr)
            state.fish = state.fish.concat(action.payload.fish_arr)
            state.seaCreatures = state.seaCreatures.concat(action.payload.sea_arr)
        }
    }
})

export const {critterpediaUpdated} = critterpediaSlice.actions

export const selectCritterpedia = state => state.critterpedia

export default critterpediaSlice.reducer