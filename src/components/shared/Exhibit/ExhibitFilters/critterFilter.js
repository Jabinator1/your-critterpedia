const critterFilter = (crittersArr, museumReducer, lang, region, isLoggedIn) => {
    const {
        sellPrice, timeOfDay, critterType, search, hemisphere,
        selectedMonths, isAllYearChecked, 
        selectedCritterRarity, isAllCritterRarityChecked, 
        selectedLocations, isAllLocationsChecked, 
        selectedSpeeds, isAllSpeedsChecked,
        selectedFishShadowSizes, isAllFishShadowSizesChecked,
        selectedSeaCreatureShadowSizes, isAllSeaCreatureShadowSizesChecked
    } = museumReducer

    // for creating an array from two numbers
    const range = (min, max) => {
        const arr = []
        while (min <= max) {
            arr.push(min++)
        }
        return arr
    }
    
    //TODO Break up this filter into separate filters for better readability and probably speed
    //TODO implement sort()
    const filteredCritters = crittersArr.filter(critter => {
        const {name, price: critterPrice, availability, shadow, speed} = critter
        return (
        //# Month filter
        // checks what months the critter is available by comparing both arrays
        (isAllYearChecked ? true
            : selectedMonths.length === 0 ? false
            : availability.isAllYear ? true
            : availability[`month-array-${isLoggedIn ? region : hemisphere}`].some(month => selectedMonths.includes(month)))

        //# Time of day filter
        // checks what time the critter is available by comparing both arrays
        && (availability.isAllDay ? true
            : availability["time-array"].some(time => range(timeOfDay.min, timeOfDay.max).includes(time)))
            
        //# Price filter
        // checks to make sure the price is between or equal to the selected prices
        && (critterPrice >= sellPrice.min && critterPrice <= sellPrice.max)

        //# Rarity filter
        // checks to make sure the rarity is between or equal to the selected rarity
        && (isAllCritterRarityChecked ? true
            : selectedCritterRarity.includes(availability.rarity))

        //# Locations filter
        && (isAllLocationsChecked || critterType !== "fish" ? true 
            : selectedLocations.length === 0 ? false
            : selectedLocations.includes(availability.location))
        
        //# Fish shadow sizes filter
        && (isAllFishShadowSizesChecked || critterType !== "fish" ? true
            : selectedLocations.length === 0 ? false
            : selectedFishShadowSizes.includes(shadow))

        //# Sea creature shadow sizes filter
        && (isAllSeaCreatureShadowSizesChecked || critterType !== "sea" ? true 
            : selectedSeaCreatureShadowSizes.length === 0 ? false
            : selectedSeaCreatureShadowSizes.includes(shadow))

        //# Sea creature speed filter
        && (isAllSpeedsChecked || critterType !== "sea" ? true
            : selectedSpeeds.length === 0 ? false
            : selectedSpeeds.includes(speed))

        //# Search filter
        // for the search bar to work
        && name[`name-${lang}`].toUpperCase().includes(search.toUpperCase())

    )})

    return filteredCritters
}

export default critterFilter