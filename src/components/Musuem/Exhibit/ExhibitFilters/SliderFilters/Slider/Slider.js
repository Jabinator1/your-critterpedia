import InputRange from "react-input-range"
import { selectFilters, updateFilters } from "../../../../../../redux/slices/filtersSlice"
import { useSelector, useDispatch } from "react-redux"
import "./Slider.sass"

const Slider = ({slider: {label, min, max, step, filter}}) => {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()

    return (
        <div className="slider-container">
            <label>{label}</label>
            <InputRange 
                // formatLabel={value => `${value} bells`} 
                minValue={min} 
                maxValue={max} 
                value={filters[filter]} 
                step={step} 
                onChange={nums => dispatch(updateFilters({filter, value: nums}))} 
            />
        </div>
    )
}


export default Slider