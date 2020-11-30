import ExhibitOtherFilters from "./ExhibitOtherFilters/ExhibitOtherFilters"
import ExhibitTypeFilters from "./ExhibitTypeFilters/ExhibitTypeFilters"

const ExhibitFilters = ({setCritterType, setSearch}) => {
    return (
        <div>
            <input type="search" onChange={e => setSearch(e.target.value)}/>
            <ExhibitTypeFilters setCritterType={setCritterType} />
            <ExhibitOtherFilters />
        </div>
    )
}

export default ExhibitFilters