import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./slices/userSlice"
import crittersReducer from "./slices/crittersSlice"
import filtersReducer from "./slices/filtersSlice"
import critterpediaReducer from "./slices/critterpediaSlice"

export default configureStore({
    reducer: {
        critterpedia: critterpediaReducer,
        critters: crittersReducer,
        filters: filtersReducer,
        user: userReducer
    },
    middleware: [thunk]
})