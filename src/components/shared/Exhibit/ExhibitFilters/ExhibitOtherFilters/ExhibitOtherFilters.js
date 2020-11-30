import { useState } from "react"
import Slider from "./Slider/Slider"

const ExhibitOtherFilters = () => {
    const [priceSlider, setPriceSlider] = useState({min: 0, max: 12000})

    return (
        <div>
            <Slider label={"Price"} min={0} max={12000} val={priceSlider} step={100} action={"priceChanged"} stateType={"price"} setSlider={setPriceSlider} />
        </div>
    )
}

export default ExhibitOtherFilters