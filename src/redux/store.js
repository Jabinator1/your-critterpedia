import { applyMiddleware, createStore, combineReducers, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import promiseMiddleware from 'redux-promise-middleware'
import languageReducer from "./reducers/languageReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
    languageReducer,
    userReducer
})

export default createStore(rootReducer)