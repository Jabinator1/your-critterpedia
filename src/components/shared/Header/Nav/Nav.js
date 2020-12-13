import { useState } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, useLocation } from "react-router-dom"
import { selectIsLoggedIn } from "../../../../redux/slices/userSlice"
import { updateFilters } from "../../../../redux/slices/filtersSlice"
import magnifyingGlassIcon from "../../../../assets/magnifyingGlassIcon.svg"
import "./Nav.sass"

const Nav = () => {
    const [searchBarHidden, setSearchBarHidden] = useState(true)
    const location = useLocation()
    const isLoggedIn = useSelector(selectIsLoggedIn)
    const dispatch = useDispatch()

    return (
        <nav id="nav">
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/museum">Museum</NavLink>
            {isLoggedIn ? <NavLink className="nav-item" activeClassName="active" to="/your-critterpedia">Your Critterpedia</NavLink> : null}
            {location.pathname === "/museum" ? (
                <input 
                    type="image" 
                    src={magnifyingGlassIcon} 
                    alt="magnifying glass icon"
                    className="nav-item"
                    id="mag-glass-icon"
                    onClick={() => setSearchBarHidden(!searchBarHidden)} 
                /> 
            ) : null}
            {!searchBarHidden ? (
                <input 
                    id="nav-search-bar"
                    type="search"
                    placeholder="Search"
                    onChange={e => dispatch(updateFilters({value: e.target.value, filter: "searchText"}))}
                /> 
            ): null}
        </nav>
    )
}

export default Nav