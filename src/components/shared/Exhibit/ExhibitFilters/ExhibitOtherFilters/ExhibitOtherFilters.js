import Slider from "./Slider/Slider"

const ExhibitOtherFilters = ({museumReducer, museumReducer: {selectedMonths}, changeMuseumReducer, lang}) => {

    //# update to my syntax - I don't really like this
    const months = Array.from({length: 12}, (e, index) => {
        const langConvert = `${lang.slice(2, 4)}-${lang.slice(0, 2)}`
        
        return new Date(null, index + 1, null).toLocaleDateString(langConvert, {month: "short"});
    })

    const sliderArr = [
        {label: "Price", min: 0, max: 12000, step: 50, type: "price"},
        {label: "Time of day", min: 0, max: 24, step: 1, type: "timeOfDay"}
    ]

    const editMonths = monthIndex => {
        const foundMonth = selectedMonths.indexOf(monthIndex)
        // the bitwise (~) operator works by returning a truthy value with everything except -1
        ~foundMonth ? changeMuseumReducer("selectedMonths", selectedMonths.filter((month, i) => i !== foundMonth))
        : changeMuseumReducer("selectedMonths", [...selectedMonths, monthIndex])
    }

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
                        <button onClick={() => editMonths(index + 1)} >{month}</button>
                    </li>
                ))}
            </ul>
            

        </div>
    )
}

export default ExhibitOtherFilters