import { useSelector } from "react-redux"
import { crittersFilteredSelector } from "../../redux/slices/crittersSlice"
import { selectCurrentCritterType } from "../../redux/slices/crittersSlice"
import ExhibitFilters from "./Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "./Exhibit/ExhibitList/ExhibitList"
import "./Museum.sass"

const Museum = () => {
    const filteredCritters = useSelector(crittersFilteredSelector)
    const critterType = useSelector(selectCurrentCritterType)

    return (
        <div>
            <ExhibitFilters />
            <main className="exhibit-list-container">
                <ExhibitList critters={filteredCritters} critterType={critterType}/>
            </main>
        </div>
    )
}



export default Museum