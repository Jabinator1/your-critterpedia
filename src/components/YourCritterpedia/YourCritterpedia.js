import CritterGraphs from "./CritterGraphs/CritterGraphs"
import ExhibitTypeFilter from "../shared/Exhibit/ExhibitFilters/ExhibitTypeFilter/ExhibitTypeFilter"
import Critterpedia from "./Critterpedia/Critterpedia"
import InsectsToBeCaught from "./InsectsToBeCaught/InsectsToBeCaught"
import { connect } from "react-redux"

const YourCritterpedia = () => {
    return (
        <div>
            <CritterGraphs />
            <ExhibitTypeFilter />
            <Critterpedia />
            <InsectsToBeCaught />
        </div>
    )
}

export default connect(state => state)(YourCritterpedia)