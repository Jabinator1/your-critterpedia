import ExhibitFilters from "./Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "./Exhibit/ExhibitList/ExhibitList"
import "./Museum.sass"

const Museum = () => (
    <div>
        <ExhibitFilters />
        <main id="exhibit-list-container">
            <ExhibitList />
        </main>
    </div>
)


export default Museum