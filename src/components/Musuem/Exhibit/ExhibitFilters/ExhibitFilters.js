import { memo, useState } from "react"
import { useSelector } from "react-redux"
import SliderFilters from "./SliderFilters/SliderFilters"
import CritterTypeFilter from "../../../shared/CritterTypeFilter/CritterTypeFilter"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import buttonFilterData from './ButtonFilter/ButtonFilterData'
import { selectCurrentCritterType } from "../../../../redux/slices/crittersSlice"
import useWindowDimensions from "../../../../hooks/useWindowDimensions"
import "./ExhibitFilters.sass"

const ExhibitFilters = () => {
    const critterType = useSelector(selectCurrentCritterType)
    const data = buttonFilterData()
    const {width} = useWindowDimensions()
    const [dropdown, setDropdown] = useState(false)
    const dropdownCheck = dropdown ? {transform: "rotate(0)"} : {transform: "rotate(180deg)"}

    const buttonFilter = filterName => <ButtonFilter filterInfo={data[filterName]}/> 

    const widthCheck = width < 1200
    return (
        <div id="filters">
            <CritterTypeFilter />
            <div id="side-filters-container">
                <span id="filters-span" onClick={() => widthCheck ? setDropdown(!dropdown) : null}>
                    <span>Filters</span>
                    {widthCheck ? <span className="dropdown-arrow" style={dropdownCheck}>&#9660;</span> : null }
                </span>
                {dropdown || !widthCheck? (
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
                ) : null }
            </div>
        </div>
    )
}

export default memo(ExhibitFilters)