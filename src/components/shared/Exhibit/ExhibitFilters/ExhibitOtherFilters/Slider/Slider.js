import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'


const Slider = ({slider: {label, min, max, step, action, stateType}, state, dispatch}) => {
    return (
        <div>
            <label>{label}</label>
            <InputRange 
                // formatLabel={value => `${value} bells`} 
                minValue={min} 
                maxValue={max} 
                value={state[stateType]} 
                step={step} 
                onChange={e => dispatch({type: action, payload: e})} 
            />
        </div>
    )
}

export default Slider