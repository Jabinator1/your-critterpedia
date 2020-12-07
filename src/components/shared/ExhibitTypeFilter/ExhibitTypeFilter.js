import bugsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../assets/seaCreaturesIcon.svg"
import { useDispatch } from "react-redux"
import { changeCritterType } from "../../../redux/slices/crittersSlice"
import { updateFilters } from "../../../redux/slices/filtersSlice"

const ExhibitTypeFilters = () => {
    const dispatch = useDispatch()

    const critterTypeInputs = [
        {name: "Insects", src: bugsIcon, critterType: "insects"},
        {name: "Fish", src: fishIcon, critterType: "fish"},
        {name: "Sea Creatures", src: seaCreaturesIcon, critterType: "sea"}
    ]

    const onCritterChange = critterType => {
        const max = critterType !== "insects" ? 15000 : 12000
        dispatch(changeCritterType(critterType))
        dispatch(updateFilters({filter: "sellPrice", value: {min: 0, max}}))
    }

    return (
        <div className="critter-type-selectors">
            {critterTypeInputs.map(input => (
                <div className="critter-type-container" key={input.name}>
                    <label className="critter-type-label" htmlFor={input.name}>{input.name}</label>
                    <input  
                        id={input.name} 
                        className="critter-type-input" 
                        type="image"
                        src={input.src} 
                        alt={input.name}
                        onClick={() => onCritterChange(input.critterType)}
                        style={{width: "50px"}} 
                    />
                </div>
            ))}
        </div>
    )
}

export default ExhibitTypeFilters