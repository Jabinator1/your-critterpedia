const initialState = {
    lang: "USen"
}

const CHANGE_LANG = "CHANGE_LANG"

export const changeLanguage = newLang => ({
    type: CHANGE_LANG,
    payload: newLang
})

const languageReducer = (state = initialState, action) => {
    switch(action.type) {
        case CHANGE_LANG:
            return {...state, lang: action.payload}
        default: 
            return state
    }
}

export default languageReducer