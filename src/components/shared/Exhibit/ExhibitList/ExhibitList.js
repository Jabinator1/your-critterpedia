import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"

const ExhibitList = ({filteredCritters}) => {
    return (
        <ul>
            {filteredCritters.map(critter => <ExhibitListItem key={critter.id} critter={critter} /> )}
        </ul>
    )
}

export default ExhibitList