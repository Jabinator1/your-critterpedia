import { useReducer } from "react"
import InputRange from "react-input-range"
import { initialState, museumReducer } from "../../../../../Musuem/Museum"
import 'react-input-range/lib/css/index.css'


const Slider = ({label, min, max, val, step, setSlider, action, stateType}) => {
    const [state, dispatch] = useReducer(museumReducer, initialState)

    return (
        <div>
            <label>{label}</label>
            <InputRange minValue={min} maxValue={max} value={state[stateType]} step={step} onChange={e => dispatch({type: action, payload: e})} />
        </div>
    )
}

export default Slider