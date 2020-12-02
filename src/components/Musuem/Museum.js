import axios from "axios"
import { useEffect, useState } from "react"
import { connect } from "react-redux"
import { changeMuseumReducer } from "../../redux/reducers/museumReducer"
import ExhibitFilters from "../shared/Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "../shared/Exhibit/ExhibitList/ExhibitList"

const Museum = ({props, languageReducer: {lang}, museumReducer, changeMuseumReducer}) => {
    const {sellPrice, timeOfDay, critterType, search, hemisphere, selectedMonths, isAllYearChecked, selectedCritterRarity, isAllCritterRarityChecked} = museumReducer
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
        const filteredCritters = crittersArr.filter(critter => {
            const {name, price: critterPrice, availability} = critter
            return (
            //# Month filter
            // checks what months the critter is available by comparing both arrays
            (isAllYearChecked ? true
                : selectedMonths.length === 0 ? false
                : availability.isAllYear ? true
                : availability[`month-array-${hemisphere}`].some(month => selectedMonths.includes(month)))

            //# Time of day filter
            // checks what time the critter is available by comparing both arrays
            && (availability.isAllDay ? true
                : availability["time-array"].some(time => range(timeOfDay.min, timeOfDay.max).includes(time)))
                
            //# Price filter
            // checks to make sure the price is between or equal to the selected prices
            && (critterPrice >= sellPrice.min && critterPrice <= sellPrice.max)

            //# Rarity filter
            // checks to make sure the rarity is between or equal to the selected rarity
            && (isAllCritterRarityChecked ? true
                : selectedCritterRarity.includes(availability.rarity))

            //# Search filter
            // for the search bar to work
            && name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())



        )})

        setFilteredCritters(filteredCritters)
    }, [crittersArr, search, lang, sellPrice, timeOfDay, selectedMonths, hemisphere, isAllYearChecked, isAllCritterRarityChecked, selectedCritterRarity])

    // for creating an array from two numbers
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
                <ExhibitList filteredCritters={filteredCritters} lang={lang} critterType={critterType} hemisphere={hemisphere} />
            </main>
        </div>
    )
}

const mapStateToProps = state => state
export default connect(mapStateToProps, {changeMuseumReducer})(Museum)