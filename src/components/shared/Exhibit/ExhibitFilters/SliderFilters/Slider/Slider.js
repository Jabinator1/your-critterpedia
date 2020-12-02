import InputRange from "react-input-range"
import '../../../../../../../node_modules/react-input-range/lib/css/index.css'


const Slider = ({slider: {label, min, max, step, type}, museumReducer, changeMuseumReducer}) => (
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


export default Slider