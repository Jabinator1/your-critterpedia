import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'


const Slider = ({slider: {label, min, max, step, action, stateType}, museumReducer, changeSlider}) => {
    return (
        <div>
            <label>{label}</label>
            <InputRange 
                // formatLabel={value => `${value} bells`} 
                minValue={min} 
                maxValue={max} 
                value={museumReducer[stateType]} 
                step={step} 
                onChange={e => changeSlider(action, e)} 
            />
        </div>
    )
}

export default Slider