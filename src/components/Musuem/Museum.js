import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"

const Museum = ({lang}) => {
    const [critterType, setCritterType]= useState("bugs")
    const [crittersArr, setCrittersArr] = useState([])
    const [search, setSearch] = useState("")
    const [selectedFilters, setSelectedFilters] = useState({})
    const [filteredCritters, setFilteredCritters] = useState([])

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


    return (
        <div>
            <ExhibitFilters setCritterType={setCritterType} setSearch={setSearch} setSelectedFilters={setSelectedFilters} />
            <main>
                <ExhibitList filteredCritters={filteredCritters}/>
            </main>
        </div>
    )
}

export default connect(state => state)(Museum)