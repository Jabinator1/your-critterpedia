import { useState } from "react"
import { updateFilters } from "../../../../../redux/slices/filtersSlice"
import { useDispatch } from "react-redux"
import "./ButtonFilter.sass"

const ButtonFilter = ({filterInfo}) => {
    const {mappedOverArr, selectedArr, isChecked, label, filter, isCheckedName} = filterInfo

    const [dropdown, setDropdown] = useState(false)
    const dispatch = useDispatch()

    const isMonthsSelected = filter === "selectedMonths"

    const editReducerArr = input => {
        const foundIndex = selectedArr.indexOf(input)
        // the bitwise (~) operator works by returning a truthy value with everything except -1
        if (~foundIndex) {
            const selectedArrCopy = [...selectedArr]
            selectedArrCopy.splice(foundIndex, 1)
            dispatch(updateFilters({filter, value: [...selectedArrCopy]}))
        } else {
            dispatch(updateFilters({filter, value: [...selectedArr, input]}))
        }
    }

    const changeCheckbox = () => {
        dispatch(updateFilters({filter: isCheckedName, value: !isChecked}))
    }

    return (
        <div className="button-filter">
            <label onClick={() => setDropdown(!dropdown)}>{label}</label>
            {dropdown ? (
                <>
                    <ul>
                        {mappedOverArr.map((item, inputIndex) => {
                            const monthCheck = isMonthsSelected ? (inputIndex + 1) : item
                            const indexCheck = isMonthsSelected 
                            ? ~selectedArr.indexOf(inputIndex + 1) 
                                ? "button-filter-active" : ""
                            : selectedArr.includes(item) 
                                ? "button-filter-active" : ""

                            return (
                                <li key={item}>
                                    <input 
                                        type="button"
                                        value={item}
                                        className={`button-filter-input ${indexCheck}`}
                                        onClick={() => editReducerArr(monthCheck)} 
                                        disabled={isChecked} 
                                    />
                                </li>
                            )
                        })}
                    </ul>
                    <label>All {label}</label>
                    <input type="checkbox" checked={isChecked} onChange={changeCheckbox}/>
                </>
            ) : null}
        </div>
    )
}

export default ButtonFilter