import { applyMiddleware, createStore, combineReducers } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunkMiddleware from 'redux-thunk'
import museumReducer from "./reducers/museumReducer"
import languageReducer from "./reducers/languageReducer"
import userReducer from "./reducers/userReducer"
import critterpediaReducer from "./reducers/critterpediaReducer"

//TODO combine language reducer and userReducer. 
//TODO Rename museumReducer to filtersReducer and update it to not have to do the hacky fix
const rootReducer = combineReducers({
    languageReducer,
    userReducer,
    museumReducer,
    critterpediaReducer
})

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)))