import { configureStore } from '@reduxjs/toolkit'
import critterpediaReducer from './features/critterpedia/critterpediaSlice'
import userReducer from './features/user/userSlice'

export default configureStore({
    reducer: {
        critterpedia: critterpediaReducer,
        user: userReducer
    }
})