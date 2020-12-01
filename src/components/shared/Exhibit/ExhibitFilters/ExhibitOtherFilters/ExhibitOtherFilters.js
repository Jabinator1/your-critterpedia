
import { connect } from "react-redux"
import { changeSlider } from "../../../../../redux/reducers/museumReducer"
import Slider from "./Slider/Slider"

const ExhibitOtherFilters = ({museumReducer, changeSlider}) => {

    const sliderArr = [
        {label: "Price", min: 0, max: 12000, step: 50, action: "CHANGE_PRICE", stateType: "price"},
        {label: "Time of day", min: 0, max: 24, step: 1, action: "CHANGE_TIME", stateType: "timeOfDay"}
    ]

    return (
        <div>
            {sliderArr.map(slider => (
                <Slider 
                    key={slider.label} 
                    slider={slider} 
                    museumReducer={museumReducer} 
                    changeSlider={changeSlider}
                />
            ))}
        </div>
    )
}

export default connect(state => state, {changeSlider})(ExhibitOtherFilters)