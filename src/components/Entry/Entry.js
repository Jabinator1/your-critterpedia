import { useState, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom"
import { changeIsLoggingIn, login, selectError, selectIsLoggingIn, selectIsLoggedIn } from "../../redux/slices/userSlice"
import "./Entry.sass"

const Entry = () => {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [region, setRegion] = useState("")
    const [isFilledOut, setIsFilledOut] = useState(false)
    const [passMatch, setPassMatch] = useState(false)

    const dispatch = useDispatch()
    const error = useSelector(selectError)
    const isLoggingIn = useSelector(selectIsLoggingIn)
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const history = useHistory()

    useEffect(() => {

        //TODO - CLEAN CODE
        if (!isLoggingIn) {
            if (password === passwordCheck) {
                setPassMatch(true)
            } else {
                setPassMatch(false)
            }

            if (username && email && password && passwordCheck && passMatch && region) {
                setIsFilledOut(true)
            } else {
                setIsFilledOut(false)
            }
        } else {
            if (email && password) {
                setIsFilledOut(true)
            } else {
                setIsFilledOut(false)
            }
        }

    }, [username, email, password, passwordCheck, region, passMatch, isLoggingIn])

    useEffect(() => {if (isLoggedIn) { history.push("/") }}, [isLoggedIn, history])

    const entryFn = async e => {
        e.preventDefault()
        const loginObj = {email, password}
        const registerObj = {username, ...loginObj, region}

        if ((isLoggingIn && isFilledOut) || (passMatch && isFilledOut)) {
            const userObj = isLoggingIn ? loginObj : registerObj
            dispatch(login(userObj))
        }
    }

    const inputsArr = [
        {label: "Username", type: "text", setState: setUsername},
        {label: "Email", type: "email", setState: setEmail},
        {label: "Password", type: "password", setState: setPassword},
        {label: "Confirm password", type: "password", setState: setPasswordCheck}
    ]

    const radioInputArr = [{label: "Northern", id: "northern"}, {label: "Southern", id: "southern"}]
    const inputsMapCheck = isLoggingIn ? inputsArr.splice(1, 2) : inputsArr

    return (
        <div className="page-container">
            {error ? <h3>{error}</h3> : null}
            <form onSubmit={e => entryFn(e)} className="foreground-container" id="entry-form">
                <div id="entry-inputs">
                    {inputsMapCheck.map(input => (
                        <div key={input.label} className="input-container">
                            <label className="input-label">{input.label}</label>
                            <input className="entry-input" type={input.type} onChange={e => input.setState(e.target.value)} />
                        </div>
                    ))}
                    
                    {!passMatch && !isLoggingIn ? <h5 id="pass-not-match">Passwords do not match</h5> : null}

                    {!isLoggingIn ? (
                        <div id="radio-input-outer-container">
                            <label className="input-label">Hemisphere</label>
                            <div id="radio-input-inner-container">
                                {radioInputArr.map(radioInput => (
                                    <div key={radioInput.label} id="radio-input-div">
                                        <input 
                                            type="radio"
                                            className="radio-input"
                                            name="hemisphere" 
                                            id={radioInput.id} 
                                            onClick={e => setRegion(e.target.id)} 
                                        />
                                        <label className="radio-input-label" htmlFor={radioInput.id}>{radioInput.label}</label>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : null}
                </div>
                <div id="entry-form-buttons-container">
                    <input 
                        type="button"
                        id="change-state-button"
                        onClick={() => dispatch(changeIsLoggingIn())} 
                        value={isLoggingIn ? "Create an account?" : "Already have an account?"} 
                    />
                    <button type="submit" disabled={!isFilledOut} className="button">
                        {isLoggingIn ? "Login" : "Create Account"}
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Entry