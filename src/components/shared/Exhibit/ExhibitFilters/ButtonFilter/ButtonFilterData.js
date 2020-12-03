const buttonFilterData = (museumReducer, lang) => {
    const {selectedMonths, isAllYearChecked, selectedCritterRarity, isAllCritterRarityChecked, isAllLocationsChecked, selectedLocations, selectedSpeeds, isAllSpeedsChecked} = museumReducer
    const formatAPILang = `${lang.slice(2, 4)}-${lang.slice(0, 2)}`
    const getMonths = locales => {
        const monthsArr = []

        for (let month = 0; month < 12; month++) {
            monthsArr.push(new Date(2020, month).toLocaleDateString(locales, {month: "short"}))
        }
        return monthsArr
    }

    const data = [
        {
            mappedOverArr: getMonths(formatAPILang), 
            selectedArr: selectedMonths,
            selectedArrName: "selectedMonths",
            isChecked: isAllYearChecked,
            isCheckedName: "isAllYearChecked",
            label: "months"
        },
        {
            mappedOverArr: ["Common", "Uncommon", "Rare", "Ultra-rare"], 
            selectedArr: selectedCritterRarity,
            selectedArrName: "selectedCritterRarity",
            isChecked: isAllCritterRarityChecked,
            isCheckedName: "isAllCritterRarityChecked",
            label: "rarity levels"
        },
        {
            mappedOverArr: ["River", "River (Clifftop)", "River (Mouth)", "Pond", "Sea", "Pier"], 
            selectedArr: selectedLocations,
            selectedArrName: "selectedLocations",
            isChecked: isAllLocationsChecked,
            isCheckedName: "isAllLocationsChecked",
            label: "locations"
        },
        {
            mappedOverArr: ["Stationary", "Very slow", "Slow", "Medium", "Fast", "Very fast"], 
            selectedArr: selectedSpeeds,
            selectedArrName: "selectedSpeeds",
            isChecked: isAllSpeedsChecked,
            isCheckedName: "isAllSpeedsChecked",
            label: "speeds"
        },
    ]

    return data
}

export default buttonFilterData
