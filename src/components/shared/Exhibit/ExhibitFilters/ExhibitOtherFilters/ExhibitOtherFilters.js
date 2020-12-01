import { useContext } from "react"
import Slider from "./Slider/Slider"
import { DispatchContext, StateContext } from "../../../../Musuem/museumReducer"

const ExhibitOtherFilters = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    const sliderArr = [
        {label: "Price", min: 0, max: 12000, step: 50, action: "priceChanged", stateType: "price"},
        {label: "Time of day", min: 0, max: 24, step: 1, action: "timeOfDayChanged", stateType: "timeOfDay"}
    ]

    return (
        <div>
            {sliderArr.map(slider => <Slider key={slider.label} slider={slider} state={state} dispatch={dispatch} />)}
        </div>
    )
}

export default ExhibitOtherFilters