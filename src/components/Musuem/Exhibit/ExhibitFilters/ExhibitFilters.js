import { memo } from "react"
import { useSelector } from "react-redux"
import SliderFilters from "./SliderFilters/SliderFilters"
import CritterTypeFilter from "../../../shared/CritterTypeFilter/CritterTypeFilter"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import buttonFilterData from './ButtonFilter/ButtonFilterData'
import { selectCurrentCritterType } from "../../../../redux/slices/crittersSlice"
import "./ExhibitFilters.sass"

const ExhibitFilters = () => {
    const critterType = useSelector(selectCurrentCritterType)
    const data = buttonFilterData()

    const buttonFilter = filterName => <ButtonFilter filterInfo={data[filterName]}/> 

    return (
        <div id="filters">
            <CritterTypeFilter />
            <div id="side-filters-container">
                <span id="filters-span">Filters</span>
                <div id="side-filters">
                    {buttonFilter("months")}
                    <SliderFilters critterType={critterType}/>
                    {critterType !== "sea" 
                        ? buttonFilter("rarityLevels") 
                        : (
                            <>
                                {buttonFilter("seaCreatureSpeeds")}
                                {buttonFilter("seaCreatureShadowSizes")}
                            </>
                        )
                    }
                    {critterType === "fish" ? (
                        <>
                            {buttonFilter("fishLocations")}
                            {buttonFilter("fishShadowSizes")}
                        </>
                    ) : null}
                </div>
            </div>
        </div>
    )
}

export default memo(ExhibitFilters)