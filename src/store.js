import { configureStore } from '@reduxjs/toolkit'
import critterpediaReducer from './features/critterpedia/critterpediaSlice'
import userReducer from './features/user/userSlice'

const reducer = {
    critterpedia: critterpediaReducer,
    user: userReducer
}

const preloadedState = {
    
}

export default configureStore({
    reducer,
})