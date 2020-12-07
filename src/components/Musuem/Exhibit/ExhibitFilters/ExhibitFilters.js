import { memo } from "react"
import { useSelector } from "react-redux"
import SliderFilters from "./SliderFilters/SliderFilters"
import CritterTypeFilter from "../../../shared/CritterTypeFilter/CritterTypeFilter"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import buttonFilterData from './ButtonFilter/ButtonFilterData'
import { selectCurrentCritterType } from "../../../../redux/slices/crittersSlice"

const ExhibitFilters = () => {
    const critterType = useSelector(selectCurrentCritterType)
    const data = buttonFilterData()

    const buttonFilter = filterName => <ButtonFilter filterInfo={data[filterName]} /> 

    return (
        <div>
            <div className="exhibit-type-filters">
                <CritterTypeFilter />
            </div>
            <div className="side-filters">
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
    )
}

export default memo(ExhibitFilters)