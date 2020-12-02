const ButtonFilter = ({lang, changeMuseumReducer, isChecked, selectedArr}) => {
    const formatAPILang = `${lang.slice(2, 4)}-${lang.slice(0, 2)}`
    const [selectedArrKey] = Object.keys(selectedArr)
    const [isCheckedKey] = Object.keys(isChecked)
    const isCheckedValue = isChecked[isCheckedKey]

    const rarityLevels = ["Common", "Uncommon", "Rare", "Ultra-rare"]
    // const fishLocationsArr = ["River", "River (Clifftop)", "River (Mouth)", "Pond", "Sea", "Pier"]

    const getMonths = locales => {
        const monthsArr = []

        for (let month = 0; month < 12; month++) {
            monthsArr.push(new Date(2020, month).toLocaleDateString(locales, {month: "short"}))
        }
        return monthsArr
    }

    const editReducerArr = inputIndex => {
        const selectedArrValue = selectedArr[selectedArrKey]
        const foundIndex = selectedArrValue.indexOf(inputIndex)

        // the bitwise (~) operator works by returning a truthy value with everything except -1
        if (~foundIndex) {
            selectedArrValue.splice(foundIndex, 1)
            changeMuseumReducer(selectedArrKey, [...selectedArrValue])
        } else {
            changeMuseumReducer(selectedArrKey, [...selectedArrValue, inputIndex])
        }
    }
    
    const mappedOverArr = selectedArrKey === "selectedMonths" ? getMonths(formatAPILang) : rarityLevels
    const isMonthsArr = selectedArrKey === "selectedMonths"
    return (
        <div>
            <ul>
                {mappedOverArr.map((item, inputIndex) => (
                    <li key={item}>
                        <input type="button" value={item} onClick={() => editReducerArr(isMonthsArr ? inputIndex : item)} disabled={isCheckedValue} />
                    </li>
                ))}
            </ul>
            <label>All {isMonthsArr ? "year" : "rarity levels"}</label>
            <input type="checkbox" name={isCheckedKey} checked={isCheckedValue} onChange={e => changeMuseumReducer(e.target.name, !isCheckedValue)}/>
        </div>
    )
}

export default ButtonFilter