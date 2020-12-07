import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    isLoggedIn: false,
    user: {},
    lang: "USen",
    error: null
}

export const login = createAsyncThunk("user/login", async (userCredentials, thunkAPI) => {
    try {
        const user = await axios.post("/auth/login", userCredentials)
        return user.data
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.request.response)
    }
})

export const getUserSession = createAsyncThunk("user/getUserSession", async () => {
    const user = await axios.get("/auth/user-session")
    return user.data
})

export const logout = createAsyncThunk("user/logout", async () => {
    await axios.post("/auth/logout")
})

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    },
    extraReducers: {
        [login.fulfilled]: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        [login.rejected]: (state, action) => {
            state.error = action.payload
        },
        [logout.fulfilled]: () => initialState,
        [getUserSession.fulfilled]: (state, action) => {
            state.isLoggedIn = true
            state.user = action.payload
        },
        [getUserSession.rejected]: () => initialState
    }
})

export const {changeLanguage} = userSlice.actions

export const selectLanguage = state => state.user.lang
export const selectUser = state => state.user.user
export const selectError = state => state.user.error

export default userSlice.reducer