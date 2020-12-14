import { memo } from "react"
import { useSelector } from "react-redux"
import LazyLoad from "react-lazyload"
import { selectHemisphere } from "../../../../redux/slices/filtersSlice"
import { selectLanguage } from "../../../../redux/slices/userSlice"
import { getMonths } from "../ExhibitFilters/ButtonFilter/ButtonFilterData"
import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import Loading from "../../../shared/Loading/Loading"
import "./ExhibitList.sass"

const ExhibitList = ({critters, critterType, critterpedia}) => {
    const hemisphere = useSelector(selectHemisphere)
    const lang = useSelector(selectLanguage)
    const monthsArr = getMonths(lang)

    return (
        <ul id="exhibit-list">
            <LazyLoad placeholder={<Loading />} height={"100%"}>
                {critters.map(critter => (
                    <ExhibitListItem 
                        key={critter.id} 
                        critter={critter} 
                        lang={lang} 
                        critterType={critterType} 
                        hemisphere={hemisphere} 
                        monthsArr={monthsArr}
                        critterpedia={critterpedia}
                    /> 
                ))}
            </LazyLoad>
        </ul>
    )
}


export default memo(ExhibitList)