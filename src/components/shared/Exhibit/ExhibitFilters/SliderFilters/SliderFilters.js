import { useEffect } from "react"
import Slider from "./Slider/Slider"

const Sliders = ({changeMuseumReducer, museumReducer}) => {
    const {critterType} = museumReducer
    const isSeaAndFishCritterType = critterType !== "bugs" ? 15000 : 12000

    const sliderArr = [
        {label: "Price", min: 0, max: isSeaAndFishCritterType, step: 50, type: "sellPrice"},
        {label: "Time of day", min: 0, max: 24, step: 1, type: "timeOfDay"}
    ]
    
    //updates the max value on redux when the critter is not a sea creature
    useEffect(() => {
        changeMuseumReducer("sellPrice", {...{min: 0, max: isSeaAndFishCritterType}})
    }, [isSeaAndFishCritterType, changeMuseumReducer])
    
    return (
        <div>
            {//TODO ?? Add inputs for the range of some sliders too
            sliderArr.map(slider => (
                <Slider 
                    key={slider.label} 
                    slider={slider} 
                    museumReducer={museumReducer} 
                    changeMuseumReducer={changeMuseumReducer}
                />
            ))}
        </div>
    )
}

export default Sliders