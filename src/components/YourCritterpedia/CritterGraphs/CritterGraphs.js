import { useSelector } from "react-redux"
import bugsIcon from "../../../assets/bugsIcon2.svg"
import fishIcon from "../../../assets/fishIcon2.svg"
import seaCreaturesIcon from "../../../assets/seaCreaturesIcon2.svg"
import CritterGraph from "./CritterGraph/CritterGraph"
import "./CritterGraphs.sass"

const CritterGraphs = () => {
    const {insectsCritterpedia, fishCritterpedia, seaCritterpedia} = useSelector(state => state.critterpedia)
    return (
        <div id="critter-graphs">
            <CritterGraph critterpediaLength={insectsCritterpedia.length} outOf={80} icon={bugsIcon}/>
            <CritterGraph critterpediaLength={fishCritterpedia.length} outOf={80} icon={fishIcon}/>
            <CritterGraph critterpediaLength={seaCritterpedia.length} outOf={40} icon={seaCreaturesIcon}/>
        </div>
    )
}

export default CritterGraphs