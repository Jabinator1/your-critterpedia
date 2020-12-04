import axios from "axios"
import { useState, useEffect } from "react"
import { connect } from "react-redux"
import { useHistory } from "react-router-dom"
import { loginUser } from "../../redux/reducers/userReducer"

const Entry = ({loginUser}) => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")
    const [region, setRegion] = useState("")
    const [isFilledOut, setIsFilledOut] = useState(false)
    const [passMatch, setPassMatch] = useState(false)
    const [errMsg, setErrMsg] = useState("")
    const history = useHistory()

    useEffect(() => {

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

    const entryFn = async e => {
        e.preventDefault()
        setErrMsg("")
        const loginObj = {email, password}
        const registerObj = {username, ...loginObj, region}

        if ((isLoggingIn && isFilledOut) || (passMatch && isFilledOut)) {
            try {
                const test = isLoggingIn ? loginObj : registerObj
                const user = await axios.post(`/auth/${isLoggingIn ? "login" : "register"}`, test)
                loginUser(user.data)
                history.push("/")
            } catch (err) {
                setErrMsg(err.response.request.response)
            }
        }
    }

    const inputsArr = [
        {label: "Username", type: "text", setState: setUsername},
        {label: "Email", type: "email", setState: setEmail},
        {label: "Password", type: "password", setState: setPassword},
        {label: "Repeat Password", type: "password", setState: setPasswordCheck}
    ]

    const radioInputArr = [{label: "Northern", id: "northern"}, {label: "Southern", id: "southern"}]
    const inputsMapCheck = isLoggingIn ? inputsArr.splice(1, 2) : inputsArr

    return (
        <div>
            {errMsg ? <h2>{errMsg}</h2> : null}
            {!passMatch && !isLoggingIn ? <h3>Passwords do not match</h3> : null}
            <form onSubmit={e => entryFn(e)}>
                {inputsMapCheck.map(input => (
                    <div key={input.label}>
                        <label>{input.label}</label>
                        <input type={input.type} onChange={e => input.setState(e.target.value)} />
                    </div>
                ))}
                {!isLoggingIn ? (
                    <>
                        <h3>Hemisphere</h3>
                        {radioInputArr.map(radioInput => (
                            <div key={radioInput.label}>
                                <input type="radio" name="hemisphere" id={radioInput.id} onClick={e => setRegion(e.target.id)} />
                                <label htmlFor={radioInput.id}>{radioInput.label}</label>
                            </div>
                        ))}
                    </>
                ) : null}
                <button type="submit" disabled={!isFilledOut}>{isLoggingIn ? "Login" : "Create Account"}</button>
            </form>
            <input type="button" onClick={() => setIsLoggingIn(!isLoggingIn)} value={isLoggingIn ? "Create an account?" : "Already have an account?"} />
        </div>
    )
}

export default connect(null, {loginUser})(Entry)