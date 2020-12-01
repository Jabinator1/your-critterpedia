import LazyLoad from "react-lazyload"
import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import Loading from "../../Loading/Loading"

const ExhibitList = ({filteredCritters, lang, critterType}) => {
    return (
        <ul>
            <LazyLoad placeholder={<Loading />} height={"100%"} >
                {filteredCritters.map(critter => <ExhibitListItem key={critter.id} critter={critter} lang={lang} critterType={critterType} /> )}
            </LazyLoad>
        </ul>
    )
}


export default ExhibitList