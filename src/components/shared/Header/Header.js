import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink } from "react-router-dom"
import languageIcon from "../../../assets/languageChangeIcon.svg"
import magnifyingGlassIcon from "../../../assets/magnifyingGlassIcon.svg"
import { updateFilters } from "../../../redux/slices/filtersSlice";
import { selectUserState, changeLanguage } from "../../../redux/slices/userSlice";
import "./Header.sass"

const Header = () => {
    const [searchBarHidden, setSearchBarHidden] = useState(true)
    const langArr = ["USen", "EUen", "EUde", "EUes", "USes", "EUfr", "USfr", "EUit", "EUnl", "CNzh", "TWzh", "JPja", "KRko", "EUru"]

    const {isLoggedIn, user: {username, profile_pic}, lang } = useSelector(selectUserState)
    const dispatch = useDispatch()

    return (
        <header>
            <nav>
                <NavLink className="nav-link" to="/">Home</NavLink>
                <NavLink className="nav-link" to="/museum">Museum</NavLink>
                {isLoggedIn ? <NavLink className="nav-link" to="/your-critterpedia">Your Critterpedia</NavLink> : null}
                {/* //# UPDATE TO SHOW SEARCH BAR IN MUSEUM ONLY */}
                <input type="image" src={magnifyingGlassIcon} alt="magnifying glass icon" style={{width: "20px"}} onClick={() => setSearchBarHidden(!searchBarHidden)} />
                {!searchBarHidden ? <input type="search" onChange={e => dispatch(updateFilters({value: e.target.value, filter: "searchText"}))}/> : null}
            </nav>
            <div>
                <div>
                    <select value={lang} onChange={e => dispatch(changeLanguage(e.target.value))}>
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

export default Header