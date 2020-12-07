import InputRange from "react-input-range"
import '../../../../../../../node_modules/react-input-range/lib/css/index.css'
import { selectFilters, updateFilters } from "../../../../../../redux/slices/filtersSlice"
import { useSelector, useDispatch } from "react-redux"

const Slider = ({slider: {label, min, max, step, filter}}) => {
    const filters = useSelector(selectFilters)
    const dispatch = useDispatch()

    return (
        <div>
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