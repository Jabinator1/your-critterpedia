import { connect } from "react-redux"
import { changeLanguage } from "../../../redux/reducers/languageReducer"
import languageIcon from "../../../assets/languageChangeIcon.svg"
import { useState } from "react"
import { NavLink } from "react-router-dom"
import LazyLoad from "react-lazyload"
import Loading from "../Loading/Loading"

const Header = ({changeLanguage, userReducer: {isLoggedIn}}) => {
    const [dropdown, setDropdown] = useState(false)

    const langArr = ["USen", "EUen", "EUde", "EUes", "USes", "EUfr", "USfr", "EUit", "EUnl", "CNzh", "TWzh", "JPja", "KRko", "EUru"]
    return (
        <header>
            <nav>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/museum">Museum</NavLink>
                {isLoggedIn ? <NavLink to="/your-critterpedia">Your Critterpedia</NavLink> : null}
            </nav>
            <div>
                 <input type="image" src={languageIcon} alt="language change icon" style={{width: "50px"}} onClick={() => setDropdown(!dropdown)}/>
                 {dropdown ? (
                    <div>
                        <ul>
                            {langArr.map(lang => (
                                <LazyLoad key={lang} placeholder={<Loading />} height={"100%"} >
                                    <li>
                                        <button onClick={() => {changeLanguage(lang); setDropdown(!dropdown)}}>{lang}</button>
                                    </li>
                                </LazyLoad>
                            ))}
                        </ul>
                    </div>
                ) : null}
            </div>
        </header>
    )
}

export default connect(state => state, {changeLanguage})(Header)