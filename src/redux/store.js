import { applyMiddleware, createStore, combineReducers, compose } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import promiseMiddleware from 'redux-promise-middleware'
import museumReducer from "./reducers/museumReducer"
import languageReducer from "./reducers/languageReducer"
import userReducer from "./reducers/userReducer"

const rootReducer = combineReducers({
    languageReducer,
    userReducer,
    museumReducer
})
export default createStore(rootReducer, compose(composeWithDevTools(), applyMiddleware(promiseMiddleware)))