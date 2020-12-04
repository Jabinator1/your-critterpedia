import { Route, Switch, useLocation } from 'react-router-dom'
import Entry from '../Entry/Entry'
import Home from '../Home/Home'
import Museum from '../Musuem/Museum'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import Profile from '../shared/Header/Profile/Profile'
import YourCritterpedia from '../YourCritterpedia/YourCritterpedia'
import './App.sass'

const App = () => {
  const location = useLocation()
  return (
    <>
      {location.pathname === "/entry" ? null : <Header /> }
        <Switch>
          <Route exact path="/"> <Home /> </Route>
          <Route path="/entry"> <Entry /> </Route>
          <Route path="/museum"> <Museum /> </Route>
          <Route path="/your-critterpedia"> <YourCritterpedia /> </Route>
          <Route path="/profile"> <Profile /> </Route>
        </Switch>
      <Footer />
    </>
  )
}


export default App