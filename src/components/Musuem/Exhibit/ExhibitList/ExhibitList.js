import { memo } from "react"
import { useSelector } from "react-redux"
import LazyLoad from "react-lazyload"
import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import Loading from "../../../shared/Loading/Loading"
import { crittersFilteredSelector, selectCurrentCritterType } from "../../../../redux/slices/crittersSlice"
import { selectHemisphere } from "../../../../redux/slices/filtersSlice"
import { selectLanguage } from "../../../../redux/slices/userSlice"
import { getMonths } from "../ExhibitFilters/ButtonFilter/ButtonFilterData"

const ExhibitList = () => {
    const filteredCritters = useSelector(crittersFilteredSelector)
    const critterType = useSelector(selectCurrentCritterType)
    const hemisphere = useSelector(selectHemisphere)
    const lang = useSelector(selectLanguage)
    const monthsArr = getMonths(lang)

    return (
        <ul>
            <LazyLoad placeholder={<Loading />} height={"100%"} >
                {filteredCritters.map(critter => (
                    <ExhibitListItem 
                        key={critter.id} 
                        critter={critter} 
                        lang={lang} 
                        critterType={critterType} 
                        hemisphere={hemisphere} 
                        monthsArr={monthsArr} 
                    /> 
                ))}
            </LazyLoad>
        </ul>
    )
}


export default memo(ExhibitList)