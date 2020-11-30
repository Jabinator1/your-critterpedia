const initialState = {
    isLoggedIn: false,
    user: {}
}

const LOGIN_USER = "LOGIN_USER"
const LOGOUT_USER = "LOGOUT_USER"

export const loginUser = user => ({
    type: LOGIN_USER,
    payload: user
})

export const logoutUser = () => ({
    type: LOGOUT_USER,
    payload: initialState
})

const userReducer = (state = initialState, action) => {
    switch(action.type) {
        case LOGIN_USER:
            return {...state, user: action.payload, isLoggedIn: true}
        case LOGOUT_USER:
            return initialState
        default:
            return initialState
    }
}

export default userReducer