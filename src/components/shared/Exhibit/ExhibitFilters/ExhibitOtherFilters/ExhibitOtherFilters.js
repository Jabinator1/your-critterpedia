import Slider from "./Slider/Slider"
import starIcon from "../../../../../assets/starIcon.svg"

const ExhibitOtherFilters = ({museumReducer, changeMuseumReducer, lang}) => {
    const {allYear, selectedMonths, critterType, rarity} = museumReducer

    //TODO update to my syntax - I don't really like this
    const months = Array.from({length: 12}, (_, index) => {
        const langFormat = `${lang.slice(2, 4)}-${lang.slice(0, 2)}`
        
        return new Date(null, index + 1, null).toLocaleDateString(langFormat, {month: "short"});
    })

    const sliderArr = [
        {label: "Price", min: 0, max: 12000, step: 50, type: "sellPrice"},
        {label: "Time of day", min: 0, max: 24, step: 1, type: "timeOfDay"}
    ]

    const rarityStarsArr = ["Common", "Uncommon", "Rare", "Ultra-rare"]

    const editMonths = monthIndex => {
        const foundMonth = selectedMonths.indexOf(monthIndex)
        // the bitwise (~) operator works by returning a truthy value with everything except -1
        ~foundMonth ? changeMuseumReducer("selectedMonths", selectedMonths.filter((_, monthIndex) => monthIndex !== foundMonth))
        : changeMuseumReducer("selectedMonths", [...selectedMonths, monthIndex])
    }

    return (
        <div>
            <div>
                {sliderArr.map(slider => (
                    <Slider 
                        key={slider.label} 
                        slider={slider} 
                        museumReducer={museumReducer} 
                        changeMuseumReducer={changeMuseumReducer}
                    />
                ))}
            </div>
            <div>
                <ul>
                    {months.map((month, index) => (
                        <li key={month}>
                            <input type="button" value={month} onClick={() => editMonths(index + 1)} disabled={allYear} />
                        </li>
                    ))}
                </ul>
                <label>All year</label>
                <input type="checkbox" name="isAllYear" value={allYear} onChange={() => changeMuseumReducer("allYear", !allYear)}/>
            </div>
            <div>
                {critterType === "bugs" || critterType === "fish" ? (
                    //TODO change to <Slider /> instead (for better UX)
                    <div>
                        {rarityStarsArr.map((rarityLevel, i) => (
                            <input 
                            key={rarityLevel} 
                            type="image" 
                            src={starIcon} 
                            alt="star icon" 
                            // onClick={() => changeMuseumReducer("rarity", [...rarity,])} 
                            style={{width: "25px"}} />)
                        )}
                    </div>
                ) : null}
            </div>

        </div>
    )
}

export default ExhibitOtherFilters