import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import bellsIcon from "../../../../../assets/bellsIcon.svg"
import { ReactComponent as OwlIcon } from "../../../../../assets/owlIcon.svg"
import { selectIsLoggedIn } from "../../../../../redux/slices/userSlice"
import "./ExhibitListItem.sass"

const ExhibitListItem = ({critter, lang, hemisphere, critterType, monthsArr, critterpedia}) => {
    const {name, availability, price, icon_uri, shadow, speed, id} = critter
    const {time, location, rarity, isAllDay, isAllYear} = availability
    const [dropdown, setDropdown] = useState(false)
    
    const isLoggedin = useSelector(selectIsLoggedIn)

    const dropdownCheck = dropdown ? {transform: "rotate(0)"} : {transform: "rotate(180deg)"}

    useEffect(() => {
        setDropdown(false)
    }, [name])

    const availabilityConvert = availability[`month-${hemisphere}`]
        .replace(/\d{1,2}/g, match => monthsArr[+match - 1])

    const critterIncluded = (isLoggedin && critterpedia.includes(id))
    const critterIncludedStyle = critterIncluded ? {marginLeft: "0"} : {marginLeft: "25px"}
    return (
        <li className="exhibit-list-item-container">
            <div className="exhibit-list-item-inner-container" style={critterIncludedStyle} onClick={() => setDropdown(!dropdown)}>
                <div className="exhibit-list-item">
                    {critterIncluded ? <OwlIcon className="owl-icon"/> : null}
                    <img className="exhibit-list-item-image" src={icon_uri} alt={name[`name-${lang}`]}/>
                    <h3>{name[`name-${lang}`]}</h3>
                </div>
                <span className="dropdown-arrow exhibit-dropdown-arrow" style={dropdownCheck}>&#9660;</span>
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