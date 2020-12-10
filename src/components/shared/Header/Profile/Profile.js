import { useState, useRef, useEffect } from "react"
import { useSelector, useDispatch } from 'react-redux'
import { Link } from "react-router-dom"
import { selectUserState, logout } from "../../../../redux/slices/userSlice"
import ProfileDropdown from "./ProfileDropdown/ProfileDropdown"

const Profile = () => {
    const {isLoggedIn, user: {username, profile_pic}} = useSelector(selectUserState)
    const [isProfileDropdown, setIsProfileDropdown] = useState(false)
    const dispatch = useDispatch()
    const ref = useRef(null)

    useEffect(() => {
        const handleClickOutside = e => {
            if (ref.current && !ref.current.contains(e.target)) {
                setIsProfileDropdown(false)
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [ref, setIsProfileDropdown])

    const logoutClicked = () => {
        setIsProfileDropdown(false)
        dispatch(logout())
    }

    return (
        <div ref={ref} id="profile-container">
            {isLoggedIn ? (
                <>
                    <div id="profile" onClick={() => setIsProfileDropdown(!isProfileDropdown)}>
                        <h4 id="username">{username}</h4>
                        <img id="profile-picture" src={profile_pic} alt={`${username}'s profile`} />
                    </div>
                    {isProfileDropdown ? <ProfileDropdown logoutClicked={logoutClicked} setIsProfileDropdown={setIsProfileDropdown}/> : null}
                </>
            ) : (
                <Link to="/entry" id="login-signup">Login/Signup</Link>
            )}
        </div>
    )
}

export default Profile