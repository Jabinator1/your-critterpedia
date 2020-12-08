import { useEffect, useState } from "react"
import bellsIcon from "../../../../../assets/bellsIcon.svg"


const ExhibitListItem = ({critter, lang, hemisphere, critterType, monthsArr}) => {
    const {name, availability, price, icon_uri, shadow, speed} = critter
    const {time, location, rarity, isAllDay, isAllYear} = availability
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        setDropdown(false)
    }, [name])

    const availabilityConvert = availability[`month-${hemisphere}`]
        .replace(/\d{1,2}/g, match => monthsArr[+match - 1])

    return (
        <li className="exhibit-list-item" onClick={() => setDropdown(!dropdown)}>
            <div>
                <img src={icon_uri} style={{width: "50px"}} alt={name}/>
                <h3>{name[`name-${lang}`]}</h3>
                <input type="button" value="+" />
            </div>
            {dropdown ? (
                <div>
                    <p>
                        <img src={bellsIcon} alt="Bells" style={{width: "15px"}}/>
                        sell price: {price}
                        {critterType === "insects" ? ` (Flick price: ${critter["price-flick"]})` 
                        : critterType === "fish" ? ` (CJ price: ${critter["price-cj"]})` 
                        : null}
                    </p>
                    <p>seasonality: {isAllYear ? "all year" : availabilityConvert}</p>
                    <p>time of day: {isAllDay ? "all day" : time}</p>
                    {critterType !== "sea" ? (
                        <>
                            <p>location: {location}</p>
                            <p>rarity: {rarity}</p>
                        </>
                    ) : (
                        <p>speed: {speed}</p>
                    )}
                    {critterType !== "insects" ? <p>shadow: {shadow}</p> : null}
                </div>
            ) : null}
        </li>
    )
}

export default ExhibitListItem