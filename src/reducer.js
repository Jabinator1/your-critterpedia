import { combineReducers }  from "redux"
import critterpediaReducer from './features/critterpedia/critterpediaSlice'
import userReducer from './features/user/userSlice'

const rootReducer = combineReducers({
    critterpedia: critterpediaReducer,
    user: userReducer
})

export default rootReducer