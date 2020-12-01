import InputRange from "react-input-range"
import 'react-input-range/lib/css/index.css'


const Slider = ({slider: {label, min, max, step, type}, museumReducer, changeMuseumReducer}) => {
    return (
        <div>
            <label>{label}</label>
            <InputRange 
                // formatLabel={value => `${value} bells`} 
                minValue={min} 
                maxValue={max} 
                value={museumReducer[type]} 
                step={step} 
                onChange={nums => changeMuseumReducer(type, nums)} 
            />
        </div>
    )
}

export default Slider