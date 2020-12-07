import ExhibitFilters from "./Exhibit/ExhibitFilters/ExhibitFilters"
import ExhibitList from "./Exhibit/ExhibitList/ExhibitList"

const Museum = () => (
    <div>
        <ExhibitFilters />
        <main>
            <ExhibitList />
        </main>
    </div>
)


export default Museum