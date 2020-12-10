import { useSelector } from "react-redux"
import bugsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../assets/seaCreaturesIcon.svg"
import CritterGraph from "./CritterGraph/CritterGraph"

const CritterGraphs = () => {
    const {insectsCritterpedia, fishCritterpedia, seaCritterpedia} = useSelector(state => state.critterpedia)
    return (
        <div>
            <CritterGraph critterpediaLength={insectsCritterpedia.length} outOf={80} icon={bugsIcon}/>
            <CritterGraph critterpediaLength={fishCritterpedia.length} outOf={80} icon={fishIcon}/>
            <CritterGraph critterpediaLength={seaCritterpedia.length} outOf={40} icon={seaCreaturesIcon}/>
        </div>
    )
}

export default CritterGraphs