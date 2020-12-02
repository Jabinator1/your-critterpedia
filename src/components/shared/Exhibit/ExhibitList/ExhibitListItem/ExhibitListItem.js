import { useEffect, useState } from "react"
import bellsIcon from "../../../../../assets/bellsIcon.svg"

const ExhibitListItem = ({critter, critter: {name, availability, availability: {time, location, rarity, isAllDay, isAllYear}, price, icon_uri, shadow, speed}, lang, hemisphere, critterType}) => {
    const [dropdown, setDropdown] = useState(false)

    useEffect(() => {
        setDropdown(false)
    }, [name])

    return (
        <li className="exhibit-list-item" onClick={() => setDropdown(!dropdown)}>
            <img src={icon_uri} style={{width: "50px"}} alt={name}/>
            <h3>{name[`name-${lang}`]}</h3>
            {dropdown ? (
                <div>
                    <p>
                        <img src={bellsIcon} alt="Bells" style={{width: "15px"}}/>
                        sell price: {price}
                        {critterType === "bugs" ? ` (Flick price: ${critter["price-flick"]})` 
                        : critterType === "fish" ? ` (CJ price: ${critter["price-cj"]})` 
                        : null}
                    </p>
                    <p>seasonality: {isAllYear ? "all year" : availability[`month-${hemisphere}`]}</p>
                    <p>time of day: {isAllDay ? "all day" : time}</p>

                    {critterType !== "sea" ? (
                        <>
                            <p>location: {location}</p>
                            <p>rarity: {rarity}</p>
                        </>
                    ) : (
                        <p>speed: {speed}</p>
                    )}
                    {critterType !== "bugs" ? <p>shadow: {shadow}</p> : null}
                </div>
            ) : null}
        </li>
    )
}

export default ExhibitListItem