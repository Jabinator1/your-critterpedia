import axios from "axios"
import { useEffect, useState, useReducer } from "react"
import { connect } from "react-redux"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"
import { initialState, museumReducer, DispatchContext, StateContext } from "./museumReducer"

const Museum = ({languageReducer: {lang}}) => {
    const [critterType, setCritterType]= useState("bugs")
    const [crittersArr, setCrittersArr] = useState([])
    const [filteredCritters, setFilteredCritters] = useState([])

    const [search, setSearch] = useState("")
    const [selectedFilters, setSelectedFilters] = useState({})

    const [state, dispatch] = useReducer(museumReducer, initialState)
    const {price: {min, max}} = state

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
            critter.name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())
            && (critter.price >= min && critter.price <= max)
        ))
        setFilteredCritters(filteredCritters)
    }, [crittersArr, search, selectedFilters, lang, min, max])

    return (
        <div>
            <DispatchContext.Provider value={dispatch}>
                <StateContext.Provider value={state}>
                    <ExhibitFilters setCritterType={setCritterType} setSearch={setSearch} setSelectedFilters={setSelectedFilters} />
                </StateContext.Provider>
            </DispatchContext.Provider>
            <main>
                <ExhibitList filteredCritters={filteredCritters}/>
            </main>
        </div>
    )
}


export default connect(state => state)(Museum)