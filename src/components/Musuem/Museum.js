import { useSelector } from "react-redux"
import { selectCritterpediaCritters } from "../../redux/slices/critterpediaSlice"
import { crittersFilteredSelector } from "../../redux/slices/crittersSlice"
import { selectCurrentCritterType } from "../../redux/slices/crittersSlice"
import ExhibitFilters from "./Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "./Exhibit/ExhibitList/ExhibitList"
import "./Museum.sass"

const Museum = () => {
    const filteredCritters = useSelector(crittersFilteredSelector)
    const critterType = useSelector(selectCurrentCritterType)
    const critterpedia = useSelector(selectCritterpediaCritters)

    return (
        <div>
            <ExhibitFilters />
            <main className="exhibit-list-container">
                <ExhibitList critters={filteredCritters} critterType={critterType} critterpedia={critterpedia}/>
            </main>
        </div>
    )
}



export default Museum