import CritterGraphs from "./CritterGraphs/CritterGraphs"
import CritterTypeFilter from "../shared/CritterTypeFilter/CritterTypeFilter"
import Critterpedia from "./Critterpedia/Critterpedia"
import InsectsToBeCaught from "./InsectsToBeCaught/InsectsToBeCaught"

const YourCritterpedia = () => (
    <div>
        <CritterGraphs />
        <CritterTypeFilter />
        <main>
            <Critterpedia />
            <InsectsToBeCaught />
        </main>
    </div>
)

export default YourCritterpedia