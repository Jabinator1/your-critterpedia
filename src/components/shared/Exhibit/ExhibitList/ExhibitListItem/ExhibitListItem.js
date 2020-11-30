import { useEffect, useState } from "react"
import bellsIcon from "../../../../../assets/bellsIcon.svg"

const ExhibitListItem = ({critter: {name, availability, price, icon_uri}, lang}) => {
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
                    <img src={bellsIcon} alt="Bells" style={{width: "25px"}}/>
                    <h4>{price}</h4>
                </div>
            ) : null}
        </li>
    )
}

export default ExhibitListItem