import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { changeMuseumReducer } from "../../redux/reducers/museumReducer"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"

const Museum = ({languageReducer: {lang}, museumReducer, changeMuseumReducer}) => {
    const {price, timeOfDay, critterType, search, hemisphere, selectedMonths} = museumReducer

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
        //TODO implement sort() and other filters
        const filteredCritters = crittersArr.filter(critter => (
            // for the search bar to work
            critter.name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())

            // checks to make sure the price is between or equal to the selected prices
            && (critter.price >= price.min && critter.price <= price.max)

            // checks what time the critter is available by comparing both arrays
            && (critter.availability.isAllDay ? true
                : critter.availability["time-array"].some(time => range(timeOfDay.min, timeOfDay.max).includes(time)))

            // checks what months the critter is available by comparing both arrays
            && (selectedMonths.length === 0 ? false
                : critter.availability[`month-array-${hemisphere}`].some(month => selectedMonths.includes(month)))
        ))

        setFilteredCritters(filteredCritters)
    }, [crittersArr, search, lang, price, timeOfDay, selectedMonths, hemisphere])

    const range = (min, max) => {
        const arr = []
        while (min <= max) {
            arr.push(min++)
        }
        return arr
    }
    
    return (
        <div>
            <ExhibitFilters changeMuseumReducer={changeMuseumReducer} lang={lang} museumReducer={museumReducer}/>
            <main>
                <ExhibitList filteredCritters={filteredCritters} lang={lang} critterType={critterType}/>
            </main>
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {changeMuseumReducer})(Museum)