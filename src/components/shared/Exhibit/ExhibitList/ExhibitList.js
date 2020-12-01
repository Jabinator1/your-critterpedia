import { useContext } from "react"
import { connect } from "react-redux"
import LazyLoad from "react-lazyload"
import ExhibitListItem from "./ExhibitListItem/ExhibitListItem"
import Loading from "../../Loading/Loading"
import { CritterContext } from "../../../Musuem/museumReducer"

const ExhibitList = ({filteredCritters, lang}) => {
    const critterType = useContext(CritterContext)
    return (
        <ul>
            <LazyLoad placeholder={<Loading />} height={"100%"} >
                {filteredCritters.map(critter => <ExhibitListItem key={critter.id} critter={critter} lang={lang} critterType={critterType} /> )}
            </LazyLoad>
        </ul>
    )
}

const mapStateToProps = state => state.languageReducer
export default connect(mapStateToProps)(ExhibitList)