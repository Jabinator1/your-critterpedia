import ExhibitTypeFilters from "./ExhibitTypeFilters/ExhibitTypeFilters"

const ExhibitFilters = ({setCritterType, setSearch}) => {
    return (
        <div>
            <input type="search" onChange={e => setSearch(e.target.value)}/>
            <ExhibitTypeFilters setCritterType={setCritterType} />
        </div>
    )
}

export default ExhibitFilters