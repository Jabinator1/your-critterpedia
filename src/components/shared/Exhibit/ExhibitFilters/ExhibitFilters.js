import { memo } from "react"
import SliderFilters from "./SliderFilters/SliderFilters"
import ExhibitTypeFilter from "./ExhibitTypeFilter/ExhibitTypeFilter"
import ButtonFilter from "./ButtonFilter/ButtonFilter"
import buttonFilterData from './ButtonFilter/ButtonFilterData'

const ExhibitFilters = ({changeMuseumReducer, lang, museumReducer}) => {

    const data = buttonFilterData(museumReducer, lang)
    return (
        <div>
            <ExhibitTypeFilter changeMuseumReducer={changeMuseumReducer} />
            <ButtonFilter filterInfo={data[0]} changeMuseumReducer={changeMuseumReducer} />
            <SliderFilters changeMuseumReducer={changeMuseumReducer} museumReducer={museumReducer}/>
            <ButtonFilter filterInfo={data[1]} changeMuseumReducer={changeMuseumReducer} />
            <ButtonFilter filterInfo={data[2]} changeMuseumReducer={changeMuseumReducer} />
            <ButtonFilter filterInfo={data[3]} changeMuseumReducer={changeMuseumReducer} />

        </div>
    )
}

export default memo(ExhibitFilters)