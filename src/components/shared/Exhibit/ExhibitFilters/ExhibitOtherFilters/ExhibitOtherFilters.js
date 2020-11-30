import { useContext, useReducer } from "react"
import Slider from "./Slider/Slider"
import { DispatchContext, StateContext } from "../../../../Musuem/Museum"

const ExhibitOtherFilters = () => {
    const state = useContext(StateContext)
    const dispatch = useContext(DispatchContext)

    return (
        <div>
            <Slider label={"Price"} min={0} max={12000} step={100} action={"priceChanged"} stateType={"price"} state={state} dispatch={dispatch}/>
        </div>
    )
}

export default ExhibitOtherFilters