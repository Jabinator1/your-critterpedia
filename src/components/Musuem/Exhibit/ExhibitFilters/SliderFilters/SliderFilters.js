import Slider from "./Slider/Slider"
import "./SliderFilters.sass"

const Sliders = ({critterType}) => {
    const isSeaAndFishCritterType = critterType !== "insects" ? 15000 : 12000

    const sliderArr = [
        {label: "Price", min: 0, max: isSeaAndFishCritterType, step: 50, filter: "sellPrice"},
        {label: "Time of day", min: 0, max: 24, step: 1, filter: "timeOfDay"}
    ]
    
    return (
        <div id="slider-filters">
            {sliderArr.map(slider => <Slider key={slider.label} slider={slider} />)}
        </div>
    )
}

export default Sliders