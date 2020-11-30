import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'


const Slider = ({label, min, max, step, action, state, stateType, dispatch}) => {

    return (
        <div>
            <label>{label}</label>
            <InputRange minValue={min} maxValue={max} value={state[stateType]} step={step} onChange={e => dispatch({type: action, payload: e})} />
        </div>
    )
}

export default Slider