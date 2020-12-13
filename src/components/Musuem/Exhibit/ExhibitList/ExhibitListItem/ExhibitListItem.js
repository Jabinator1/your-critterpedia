import { useEffect, useState } from "react"
import bellsIcon from "../../../../../assets/bellsIcon.svg"
import "./ExhibitListItem.sass"

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
        <li className="exhibit-list-item-container" onClick={() => setDropdown(!dropdown)}>
            <div className="exhibit-list-item">
                <img className="exhibit-list-item-image" src={icon_uri} alt={name[`name-${lang}`]}/>
                <h3>{name[`name-${lang}`]}</h3>
            </div>
            {dropdown ? (
                <div className="critter-dropdown">
                    <div className="critter-sell-price">
                        <span>Sell price: {price}</span>
                        <img src={bellsIcon} alt="Bells" className="bells-icon" />
                        <span>
                            {critterType === "insects" ? ` (Flick price: ${critter["price-flick"]})` 
                            : critterType === "fish" ? ` (CJ price: ${critter["price-cj"]})` 
                            : null}
                        </span>
                    </div>
                    <span>Seasonality: {isAllYear ? "all year" : availabilityConvert}</span>
                    <span>Time of day: {isAllDay ? "all day" : time}</span>
                    {critterType !== "sea" ? (
                        <>
                            <span>Location: {location}</span>
                            <span>Rarity: {rarity}</span>
                        </>
                    ) : (
                        <span>Speed: {speed}</span>
                    )}
                    {critterType !== "insects" ? <span>Shadow: {shadow}</span> : null}
                </div>
            ) : null}
        </li>
    )
}

export default ExhibitListItem