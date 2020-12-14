import { useSelector } from "react-redux"
import { selectAllCritterpediaCritters } from "../../redux/slices/critterpediaSlice"
import { currentFishSelector, currentInsectsSelector, currentSeaSelector } from "../../redux/slices/crittersSlice"
import ExhibitList from "../Musuem/Exhibit/ExhibitList/ExhibitList"
import "../Musuem/Exhibit/ExhibitList/ExhibitList.sass"
import "./Home.sass"

const Home = () => {
    const currentInsects = useSelector(currentInsectsSelector)
    const currentFish = useSelector(currentFishSelector)
    const currentSea = useSelector(currentSeaSelector)
    const allCritterpediaCritters = useSelector(selectAllCritterpediaCritters)
    const {isLoggedIn, user: {username}} = useSelector(state => state.user)

    const currentCritters = [
        {critterName: "Insects", critterType: "insects", critterVar: currentInsects},
        {critterName: "Fish", critterType: "fish", critterVar: currentFish},
        {critterName: "Sea Creatures", critterType: "sea", critterVar: currentSea}
    ]
    
    return (
        <main>
            <h1 id="welcome-text">Welcome {isLoggedIn ? `back ${username}!`: "to Your Critterpedia!"}</h1>
            {!isLoggedIn ? <p id="welcome-paragraph">This page is for seeing all the critters you can currently catch according to your computer's time and date!</p> : null}
            {currentCritters.map(({critterName, critterVar, critterType}, index) => (
                <div className="exhibit-list-container" key={`${critterType}: ${index}`}>
                    <h2 className="home-critter-name">{critterName}</h2>
                    <ExhibitList critters={critterVar} critterType={critterType} critterpedia={allCritterpediaCritters[`${critterType}Critterpedia`]}/>
                </div>
            ))}
        </main>
    )
}

export default Home