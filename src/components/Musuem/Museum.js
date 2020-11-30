import axios from "axios"
import { useEffect, useReducer, useState } from "react"
import { connect } from "react-redux"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"


export const initialState = {
    price: {min: 0, max: 12000}
}

export const museumReducer = (state, action) => {
    switch(action.type) {
        case "priceChanged":
            return {price: {min: action.payload.min, max: action.payload.max}}
        default:
            return state
    }
}



const Museum = ({languageReducer: {lang}}) => {
    const [critterType, setCritterType]= useState("bugs")
    const [crittersArr, setCrittersArr] = useState([])
    const [search, setSearch] = useState("")
    const [selectedFilters, setSelectedFilters] = useState({

    })
    const [filteredCritters, setFilteredCritters] = useState([])
    const [state, dispatch] = useReducer(museumReducer, initialState)

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
        const filteredCritters = crittersArr.filter(critter => (
            critter.name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())
            || critter.price >= search
        ))
        setFilteredCritters(filteredCritters)
    }, [crittersArr, search, selectedFilters, lang])

    console.log(state)
    return (
        <div>
            <ExhibitFilters setCritterType={setCritterType} setSearch={setSearch} setSelectedFilters={setSelectedFilters} />
            <main>
                Test: {state.price.min}
                <ExhibitList filteredCritters={filteredCritters}/>
            </main>
        </div>
    )
}


export default connect(state => state)(Museum)