import { slide as Menu } from "react-burger-menu"
import { useSelector } from 'react-redux'
import { NavLink } from "react-router-dom"
import { selectIsLoggedIn } from "../../../redux/slices/userSlice"
import Profile from "../Header/Profile/Profile"
import "./HamburgerHeader.sass"

const styles = {
    bmBurgerButton: {
      position: 'absolute',
      width: '36px',
      height: '30px',
      left: '36px',
      top: '36px'
    },
    bmBurgerBars: {
      background: '#867967'
    },
    bmBurgerBarsHover: {
      background: '#EFCB6B'
    },
    bmCrossButton: {
      height: '24px',
      width: '24px'
    },
    bmCross: {
      background: '#867967'
    },
    bmMenuWrap: {
      position: 'fixed',
      height: '100%'
    },
    bmMenu: {
      background: '#FFF8E5',
      padding: '2.5em 1.5em 0',
      fontSize: '1.15em'
    },
    bmMorphShape: {
      fill: '#373a47'
    },
    bmItemList: {
      color: '#b8b7ad',
      padding: '0.8em'
    },
    bmItem: {
      display: 'inline-block'
    },
    bmOverlay: {
      background: 'rgba(0, 0, 0, 0.3)'
    }
}

const HamburgerHeader = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
      <header id="hamburger-header">
        <Menu outerContainerId={"hamburger-header"}>
            <NavLink className="nav-item" activeClassName="active" exact to="/">Home</NavLink>
            <NavLink className="nav-item" activeClassName="active" to="/museum">Museum</NavLink>
            {isLoggedIn ? <NavLink className="nav-item" activeClassName="active" to="/your-critterpedia">Your Critterpedia</NavLink> : null}
            <Profile />
        </Menu>
      </header>
    )
}

export default HamburgerHeader