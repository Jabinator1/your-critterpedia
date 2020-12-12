import { ReactComponent as InsectsIcon } from "../../../assets/bugsIcon.svg"
import { ReactComponent as FishIcon } from "../../../assets/fishIcon.svg"
import { ReactComponent as SeaIcon } from "../../../assets/seaCreaturesIcon.svg"
import { useDispatch, useSelector } from "react-redux"
import { changeCritterType, selectCurrentCritterType } from "../../../redux/slices/crittersSlice"
import { updateFilters } from "../../../redux/slices/filtersSlice"
import "./CritterTypeFilter.sass"

const CritterTypeFilter = () => {
    const dispatch = useDispatch()
    const critterType = useSelector(selectCurrentCritterType)

    const critterTypeInputs = [
        {name: "Insects", critterType: "insects", Icon: InsectsIcon},
        {name: "Fish", critterType: "fish", Icon: FishIcon},
        {name: "Sea Creatures", critterType: "sea", Icon: SeaIcon}
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
        <div id="critter-type-container">
            <div id="critter-type-selectors">
                <h3 className="critter-type-label" id={`${critterType}-label`}>{critterCheck}</h3>
                <div id="critter-input-container">
                    {critterTypeInputs.map(input => {
                        const {Icon, name} = input
                        const activeCheck = input.critterType === critterType ? "icon-active" : ""
                        return (
                            <div className="critter-icon-container" key={name} onClick={() => onCritterChange(input.critterType)}>
                                <Icon className={`critter-icon ${activeCheck}`} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default CritterTypeFilter