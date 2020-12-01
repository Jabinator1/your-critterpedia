import axios from "axios"
import { useEffect, useState, useReducer } from "react"
import { connect } from "react-redux"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"
import { initialState, museumReducer, DispatchContext, StateContext, CritterContext } from "./museumReducer"

const Museum = ({languageReducer: {lang}}) => {
    const [critterType, setCritterType]= useState("bugs")
    const [crittersArr, setCrittersArr] = useState([])
    const [filteredCritters, setFilteredCritters] = useState([])

    const [search, setSearch] = useState("")
    const [selectedFilters, setSelectedFilters] = useState({})

    const [state, dispatch] = useReducer(museumReducer, initialState)
    const {price, timeOfDay} = state

    useEffect(() => {
        const getCritter = async () => {
            try {
                const critters = await axios.get(`https://acnhapi.com/v1a/${critterType}`)
                setCrittersArr(critters.data)
            } catch (err) {
                console.log(err)
            }
        }
        getCritter()
    }, [critterType])

    useEffect(() => {
        //TODO implement sort()
        const filteredCritters = crittersArr.filter(critter => (
            //for the search bar to work
            critter.name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())
            //checks to make sure the price is between or equal to the selected prices
            && (critter.price >= price.min && critter.price <= price.max)
            //checks what time the critter is available
            && (critter.availability.isAllDay ? true
                : critter.availability["time-array"].some(time => range(timeOfDay.min, timeOfDay.max).includes(time)))
        ))

        setFilteredCritters(filteredCritters)
    }, [crittersArr, search, selectedFilters, lang, price.min, price.max, timeOfDay.min, timeOfDay.max])

    const range = (min, max) => {
        const arr = []
        while (min <= max) {
            arr.push(min++)
        }
        return arr
    }

    return (
        <div>
            <CritterContext.Provider value={critterType}>
                <DispatchContext.Provider value={dispatch}>
                    <StateContext.Provider value={state}>
                        <ExhibitFilters setCritterType={setCritterType} setSearch={setSearch} setSelectedFilters={setSelectedFilters} />
                    </StateContext.Provider>
                </DispatchContext.Provider>
                <main>
                    <ExhibitList filteredCritters={filteredCritters} critterType={critterType}/>
                </main>
            </CritterContext.Provider>
        </div>
    )
}


export default connect(state => state)(Museum)