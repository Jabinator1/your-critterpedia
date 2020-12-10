
import Nav from "./Nav/Nav";
import Profile from "./Profile/Profile";
import "./Header.sass"

const Header = () => {
    return (
        <header id="header">
            <Nav />
            <Profile />
        </header>
    )
}

export default Header