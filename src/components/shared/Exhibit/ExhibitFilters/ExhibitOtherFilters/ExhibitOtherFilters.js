import Slider from "./Slider/Slider"

const ExhibitOtherFilters = ({museumReducer, changeMuseumReducer, lang}) => {

    //# update to my syntax - I don't really like this
    const months = Array.from({length: 12}, (e, i) => {
        return new Date(null, i + 1, null).toLocaleDateString(`${lang.slice(2, 4)}-${lang.slice(0, 2)}`, {month: "short"});
     })

    const sliderArr = [
        {label: "Price", min: 0, max: 12000, step: 50, type: "price"},
        {label: "Time of day", min: 0, max: 24, step: 1, type: "timeOfDay"}
    ]

    return (
        <div>
            {sliderArr.map(slider => (
                <Slider 
                    key={slider.label} 
                    slider={slider} 
                    museumReducer={museumReducer} 
                    changeMuseumReducer={changeMuseumReducer}
                />
            ))}
            <ul>
                {months.map((month, index) => (
                    <li key={month}>
                        <button onClick={() => console.log(index)}>{month}</button>
                    </li>
                ))}
            </ul>
            

        </div>
    )
}

export default ExhibitOtherFilters