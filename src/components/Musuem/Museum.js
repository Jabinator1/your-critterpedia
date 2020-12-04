import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { changeMuseumReducer } from "../../redux/reducers/museumReducer"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import critterFilter from "../shared/Exhibit/ExhibitFilters/critterFilter"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"

const Museum = ({languageReducer: {lang}, museumReducer, changeMuseumReducer, userReducer: {isLoggedIn, user: {region}}}) => {
    const { critterType, hemisphere } = museumReducer

    const [crittersArr, setCrittersArr] = useState([])
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
        const filteredCrittersArr = critterFilter(crittersArr, museumReducer, lang, region, isLoggedIn)
        setFilteredCritters(filteredCrittersArr)
    }, [crittersArr, museumReducer, lang, region, isLoggedIn])

    return (
        <div>
            <ExhibitFilters changeMuseumReducer={changeMuseumReducer} lang={lang} museumReducer={museumReducer}/>
            <main>
                <ExhibitList filteredCritters={filteredCritters} lang={lang} critterType={critterType} hemisphere={hemisphere} />
            </main>
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {changeMuseumReducer})(Museum)