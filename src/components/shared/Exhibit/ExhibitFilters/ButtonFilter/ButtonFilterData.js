const buttonFilterData = (museumReducer, lang) => {
    const {
        selectedMonths, 
        isAllYearChecked, 
        selectedCritterRarity, 
        isAllCritterRarityChecked, 
        isAllLocationsChecked, 
        selectedLocations, 
        selectedSpeeds, 
        isAllSpeedsChecked,
        selectedFishShadowSizes,
        isAllFishShadowSizesChecked,
        selectedSeaCreatureShadowSizes,
        isAllSeaCreatureShadowSizesChecked
        } = museumReducer

    const formatAPILang = `${lang.slice(2, 4)}-${lang.slice(0, 2)}`
    const getMonths = locales => {
        const monthsArr = []

        for (let month = 0; month < 12; month++) {
            monthsArr.push(new Date(2020, month).toLocaleDateString(locales, {month: "short"}))
        }
        return monthsArr
    }

    const data = {
        months: {
            mappedOverArr: getMonths(formatAPILang), 
            selectedArr: selectedMonths,
            selectedArrName: "selectedMonths",
            isChecked: isAllYearChecked,
            isCheckedName: "isAllYearChecked",
            label: "Months"
        },
        rarityLevels: {
            mappedOverArr: ["Common", "Uncommon", "Rare", "Ultra-rare"], 
            selectedArr: selectedCritterRarity,
            selectedArrName: "selectedCritterRarity",
            isChecked: isAllCritterRarityChecked,
            isCheckedName: "isAllCritterRarityChecked",
            label: "Rarity Levels"
        },
        fishLocations: {
            mappedOverArr: ["River", "River (Clifftop)", "River (Mouth)", "Pond", "Sea", "Pier"], 
            selectedArr: selectedLocations,
            selectedArrName: "selectedLocations",
            isChecked: isAllLocationsChecked,
            isCheckedName: "isAllLocationsChecked",
            label: "Fish Locations"
        },
        fishShadowSizes: {
            mappedOverArr: ["Smallest (1)", "Small (2)", "Medium (3)", "Medium (4)", "Medium with fin (4)", "Large (5)", "Largest (6)", "Largest with fin (6)", "Narrow"], 
            selectedArr: selectedFishShadowSizes,
            selectedArrName: "selectedFishShadowSizes",
            isChecked: isAllFishShadowSizesChecked,
            isCheckedName: "isAllFishShadowSizesChecked",
            label: "Fish Shadow Sizes"
        },
        seaCreatureShadowSizes: {
            mappedOverArr: ["Smallest", "Small", "Medium", "Large", "Largest"], 
            selectedArr: selectedSeaCreatureShadowSizes,
            selectedArrName: "selectedSeaCreatureShadowSizes",
            isChecked: isAllSeaCreatureShadowSizesChecked,
            isCheckedName: "isAllSeaCreatureShadowSizesChecked",
            label: "Sea Creature Shadow Sizes"
        },
        seaCreatureSpeeds: {
            mappedOverArr: ["Stationary", "Very slow", "Slow", "Medium", "Fast", "Very fast"], 
            selectedArr: selectedSpeeds,
            selectedArrName: "selectedSpeeds",
            isChecked: isAllSpeedsChecked,
            isCheckedName: "isAllSpeedsChecked",
            label: "Sea Creature Speeds"
        },
    }

    return data
}

export default buttonFilterData
