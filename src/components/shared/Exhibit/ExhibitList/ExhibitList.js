import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import LazyLoad from "react-lazyload"
import Loading from "../../Loading/Loading"
import { connect } from "react-redux"

const ExhibitList = ({filteredCritters, lang}) => {
    return (
        <ul>
            <LazyLoad placeholder={<Loading />} height={"100%"} >
                {filteredCritters.map(critter => <ExhibitListItem key={critter.id} critter={critter} lang={lang} /> )}
            </LazyLoad>
        </ul>
    )
}

const mapStateToProps = state => state.languageReducer
export default connect(mapStateToProps)(ExhibitList)