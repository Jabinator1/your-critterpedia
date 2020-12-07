import { useState } from "react"
import { updateFilters } from "../../../../../redux/slices/filtersSlice"
import { useDispatch } from "react-redux"

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
        <div>
            <label onClick={() => setDropdown(!dropdown)}>{label}</label>
            {dropdown ? (
                <>
                    <ul>
                        {mappedOverArr.map((item, inputIndex) => (
                            <li key={item}>
                                <input type="button" value={item} onClick={() => editReducerArr(isMonthsSelected ? (inputIndex + 1) : item)} disabled={isChecked} />
                            </li>
                        ))}
                    </ul>
                    <label>All {label}</label>
                    <input type="checkbox" checked={isChecked} onChange={changeCheckbox}/>
                </>
            ) : null}
        </div>
    )
}

export default ButtonFilter