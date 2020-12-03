import { connect } from "react-redux"
import { changeLanguage } from "../../../redux/reducers/languageReducer"
import { changeMuseumReducer } from "../../../redux/reducers/museumReducer"
import languageIcon from "../../../assets/languageChangeIcon.svg"
import { useState } from "react"
import { NavLink } from "react-router-dom"

const Header = ({changeLanguage, userReducer: {isLoggedIn}, changeMuseumReducer}) => {
    const [dropdown, setDropdown] = useState(false)

    const langArr = ["USen", "EUen", "EUde", "EUes", "USes", "EUfr", "USfr", "EUit", "EUnl", "CNzh", "TWzh", "JPja", "KRko", "EUru"]

    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/museum">Museum</NavLink>
                {isLoggedIn ? <NavLink to="/your-critterpedia">Your Critterpedia</NavLink> : null}
                <input type="search" onChange={e => changeMuseumReducer(e.target.type, e.target.value)}/>
            </nav>
            <div>
                {/* //TODO Implement select and option tags! */}
                 <input type="image" src={languageIcon} alt="language change icon" style={{width: "50px"}} onClick={() => setDropdown(!dropdown)}/>
                 {dropdown ? (
                    <div>
                        <ul>
                        {langArr.map(lang => (
                            <li key={lang}>
                                <button onClick={() => {changeLanguage(lang); setDropdown(!dropdown)}}>{lang}</button>
                            </li>
                        ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    )
}

export default connect(state => state, {changeLanguage, changeMuseumReducer})(Header)