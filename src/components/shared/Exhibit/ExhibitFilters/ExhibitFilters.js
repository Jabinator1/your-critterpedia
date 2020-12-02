import { memo } from "react"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import SliderFilters from "./SliderFilters/SliderFilters"
import ExhibitTypeFilter from "./ExhibitTypeFilter/ExhibitTypeFilter"

const ExhibitFilters = ({changeMuseumReducer, lang, museumReducer}) => {
    const {selectedMonths, isAllYearChecked, selectedCritterRarity, isAllCritterRarityChecked} = museumReducer
    const museum = {
        changeMuseumReducer,
        museumReducer
    }
    return (
        <div>
            <ExhibitTypeFilter changeMuseumReducer={changeMuseumReducer} />
            {/* //# Month Filter */}
            <ButtonFilter 
                lang={lang} 
                changeMuseumReducer={changeMuseumReducer} 
                isChecked={{isAllYearChecked}} 
                selectedArr={{selectedMonths}}
            />
            <SliderFilters museum={museum} />
            {/* //# Rarity Filter */}
            <ButtonFilter 
                lang={lang} 
                changeMuseumReducer={changeMuseumReducer} 
                isChecked={{isAllCritterRarityChecked}} 
                selectedArr={{selectedCritterRarity}}
            />
        </div>
    )
}

export default memo(ExhibitFilters)