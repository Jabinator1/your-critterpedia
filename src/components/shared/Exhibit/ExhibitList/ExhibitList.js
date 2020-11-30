import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import LazyLoad from "react-lazyload"
import Loading from "../../Loading/Loading"

const ExhibitList = ({filteredCritters}) => {
    return (
        <ul>
            <LazyLoad placeholder={<Loading />} height={"100%"} >
                {filteredCritters.map(critter => <ExhibitListItem key={critter.id} critter={critter} /> )}
            </LazyLoad>
        </ul>
    )
}

export default ExhibitList