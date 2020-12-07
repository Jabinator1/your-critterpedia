import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
    name: "user",
    initialState: {
        isLoggedIn: false,
        user: {},
        lang: "USen"
    },
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true
        },
        logout: () => initialState,
        changeLanguage: (state, action) => {
            state.lang = action.payload
        }
    }
})

export const {login, logout, changeLanguage} = userSlice.actions


export const selectLanguage = state => state.user.lang
export const selectUser = state => state.user.user

export default userSlice.reducer