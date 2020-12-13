import { Route, Switch, useLocation } from 'react-router-dom'
import Entry from '../Entry/Entry'
import Home from '../Home/Home'
import Museum from '../Musuem/Museum'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import Profile from '../shared/Header/Profile/Profile'
import PageNotFound from '../shared/PageNotFound/PageNotFound'
import PrivateRoute from '../shared/PrivateRoute/PrivateRoute'
import YourCritterpedia from '../YourCritterpedia/YourCritterpedia'
import "./normalize.sass"
import './App.sass'
import useWindowDimensions from '../../hooks/useWindowDimensions'
import HamburgerHeader from '../shared/HamburgerHeader/HamburgerHeader'

const App = () => {
  const location = useLocation()
  const { width } = useWindowDimensions()

  return (
    <>
      {location.pathname === "/entry" ? null
      : width > 902 ? <Header /> : <HamburgerHeader /> } 
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/entry"> <Entry /> </Route>
          <Route path="/museum"> <Museum /> </Route>
          <PrivateRoute path="/your-critterpedia"> <YourCritterpedia /> </PrivateRoute>
          <PrivateRoute path="/profile"> <Profile /> </PrivateRoute>
          <Route path="*"> <PageNotFound /> </Route>
        </Switch>
        {/* {location.pathname === "/entry" ? null : <Footer /> } */}
    </>
  )
}


export default App