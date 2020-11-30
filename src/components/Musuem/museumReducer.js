import { createContext } from "react"

export const initialState = {
    price: {min: 0, max: 12000},
    timeOfDay: {min: 0, max: 24}
}

export const DispatchContext = createContext()
export const StateContext = createContext(initialState)

export const museumReducer = (state, action) => {
    const {min, max} = action.payload
    switch(action.type) {
        case "priceChanged":
            return {...state, price: {min: action.payload.min, max: action.payload.max}}
        case "timeOfDayChanged":
            return {...state, timeOfDay: {min, max}}
        default:
            return state
    }
}