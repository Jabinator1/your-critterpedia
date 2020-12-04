import { connect } from "react-redux"
import { useEffect, useState } from "react"
import { Link, NavLink } from "react-router-dom"
import { changeLanguage } from "../../../redux/reducers/languageReducer"
import { changeMuseumReducer } from "../../../redux/reducers/museumReducer"
import { loginUser } from "../../../redux/reducers/userReducer"
import axios from "axios"
import languageIcon from "../../../assets/languageChangeIcon.svg"
import magnifyingGlassIcon from "../../../assets/magnifyingGlassIcon.svg"
import "./Header.sass"

const Header = ({languageReducer: {lang}, changeLanguage, userReducer: {isLoggedIn, user: {username, profile_pic}}, changeMuseumReducer, loginUser}) => {
    const [searchBarHidden, setSearchBarHidden] = useState(true)
    const langArr = ["USen", "EUen", "EUde", "EUes", "USes", "EUfr", "USfr", "EUit", "EUnl", "CNzh", "TWzh", "JPja", "KRko", "EUru"]

    useEffect(() => {
        const getMe = async () => {
            try {
                const user = await axios.get("/api/user/session")
                loginUser(user.data)
            } catch (err) {
                console.log(err)
            }
        }
        getMe()
    }, [loginUser])

    return (
        <header>
            <nav>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/museum">Museum</NavLink>
                {isLoggedIn ? <NavLink className="nav-link" to="/your-critterpedia">Your Critterpedia</NavLink> : null}
                <input type="image" src={magnifyingGlassIcon} alt="magnifying glass icon" style={{width: "20px"}} onClick={() => setSearchBarHidden(!searchBarHidden)} />
                {!searchBarHidden ? <input type="search" onChange={e => changeMuseumReducer(e.target.type, e.target.value)}/> : null}
            </nav>
            <div>
                <div>
                    <select value={lang} onChange={e => changeLanguage(e.target.value)}>
                        {langArr.map(langArrItem => (
                            <option key={langArrItem}>{langArrItem}</option>  
                        ))}
                    </select>
                    <img src={languageIcon} alt="language change icon" style={{width: "50px"}} />
                </div>
                <div>
                    {isLoggedIn ? (
                        <Link to="/profile">
                            {username}
                            <img src={profile_pic} alt={`${username}'s profile`} style={{width: "40px"}} />
                        </Link>
                    ) : (
                        <Link to="/entry">Login/Signup</Link>
                    )}
                </div>
            </div>
        </header>
    )
}

export default connect(state => state, {changeLanguage, changeMuseumReducer, loginUser})(Header)