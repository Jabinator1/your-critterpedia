import bugsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../assets/seaCreaturesIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { changeCritterType, selectCurrentCritterType } from "../../../redux/slices/crittersSlice"
import { updateFilters } from "../../../redux/slices/filtersSlice"
import "./CritterTypeFilter.sass"

const CritterTypeFilter = () => {
    const dispatch = useDispatch()
    const critterType = useSelector(selectCurrentCritterType)

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

    const critterCheck = 
    critterType === "insects" ? "Insects"
    : critterType === "fish" ? "Fish"
    : "Sea Creatures"
    return (
        <div id="critter-type-selectors">
            <h3 className="critter-type-label" id={`${critterType}-label`}>{critterCheck}</h3>
            <div id="critter-input-container">
                {critterTypeInputs.map(input => (
                    <div className="critter-type-container" key={input.name}>
                        <input  
                            id={`${input.critterType}-input`}
                            className={"critter-type-input"}
                            type="image"
                            src={input.src} 
                            alt={input.name}
                            onClick={() => onCritterChange(input.critterType)}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default CritterTypeFilter