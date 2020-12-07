import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"
import crittersReducer from "./slices/crittersSlice"
import filtersReducer from "./slices/filtersSlice"

export default configureStore({
    reducer: {
        // critterpedia: critterpediaReducer,
        user: userReducer,
        critters: crittersReducer,
        filters: filtersReducer
    }
})

