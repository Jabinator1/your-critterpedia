import { useState } from "react"

const ButtonFilter = ({filterInfo: {mappedOverArr, selectedArr, isChecked, label, selectedArrName, isCheckedName}, changeMuseumReducer}) => {
    const [dropdown, setDropdown] = useState(false)
    const isMonthsSelected = selectedArrName === "selectedMonths"

    const editReducerArr = input => {
        const foundIndex = selectedArr.indexOf(input)
        // the bitwise (~) operator works by returning a truthy value with everything except -1
        if (~foundIndex) {
            selectedArr.splice(foundIndex, 1)
            changeMuseumReducer(selectedArrName, [...selectedArr])
        } else {
            changeMuseumReducer(selectedArrName, [...selectedArr, input])
        }
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
                    <input type="checkbox" checked={isChecked} onChange={e => changeMuseumReducer(isCheckedName, !isChecked)}/>
                </>
            ) : null}
        </div>
    )
}

export default ButtonFilter