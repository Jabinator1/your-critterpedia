import ExhibitOtherFilters from "./ExhibitOtherFilters/ExhibitOtherFilters"
import ExhibitTypeFilters from "./ExhibitTypeFilters/ExhibitTypeFilters"

const ExhibitFilters = ({changeCritterType}) => {
    return (
        <div>
            <ExhibitTypeFilters changeCritterType={changeCritterType} />
            <ExhibitOtherFilters />
        </div>
    )
}

export default ExhibitFilters