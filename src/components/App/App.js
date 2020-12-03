import { Route, Switch } from 'react-router-dom'
import Entry from '../Entry/Entry'
import Home from '../Home/Home'
import Museum from '../Musuem/Museum'
import Footer from '../shared/Footer/Footer'
import Header from '../shared/Header/Header'
import YourCritterpedia from '../YourCritterpedia/YourCritterpedia'
import './App.sass'

const App = () => (
  <>
    <Header />
      <Switch>
        <Route exact path="/"> <Home /> </Route>
        <Route path="/entry"> <Entry /> </Route>
        <Route path="/museum"> <Museum /> </Route>
        <Route path="/your-critterpedia"> <YourCritterpedia /> </Route>
      </Switch>
    <Footer />
  </>
)

export default App