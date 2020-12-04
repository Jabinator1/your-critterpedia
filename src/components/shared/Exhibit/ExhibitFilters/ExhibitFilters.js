import { memo } from "react"
import SliderFilters from "./SliderFilters/SliderFilters"
import ExhibitTypeFilter from "./ExhibitTypeFilter/ExhibitTypeFilter"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import buttonFilterData from './ButtonFilter/ButtonFilterData'

const ExhibitFilters = ({changeMuseumReducer, lang, museumReducer}) => {
    const {critterType} = museumReducer
    const data = buttonFilterData(museumReducer, lang)

    const buttonFilter = filterName => <ButtonFilter filterInfo={data[filterName]} changeMuseumReducer={changeMuseumReducer} /> 

    return (
        <div>
            <div className="exhibit-type-filters">
                <ExhibitTypeFilter changeMuseumReducer={changeMuseumReducer} />
            </div>
            <div className="side-filters">
                {buttonFilter("months")}
                <SliderFilters changeMuseumReducer={changeMuseumReducer} museumReducer={museumReducer}/>
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