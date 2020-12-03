import { useState } from "react"

const Entry = () => {
    const [isLoggingIn, setIsLoggingIn] = useState(true)
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordCheck, setPasswordCheck] = useState("")

    const entryFn = () => {

    }

    const inputsMapped = [
        {label: "Username", name: "username", type: "text", state: setUsername},
        {label: "Email", name: "email", type: "email", state: setEmail},
        {label: "Password", name: "password", type: "password", state: setPassword},
        {label: "Repeat Password", name: "repeat password", type: "password", setPasswordCheck}
    ]
    return (
        <div>
            {inputsMapped.map(input => (
                <div>
                    <label>{input.label}</label>
                    <input name={input.name} type={input.type} onChange={e => input.state(e.target.value)} />
                </div>
            ))}
            <label>Hemisphere</label>
            {/* <input type="checkbox" value={}/> */}
        </div>
    )
}

export default Entry