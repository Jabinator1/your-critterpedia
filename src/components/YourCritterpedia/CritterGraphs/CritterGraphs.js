import { useEffect, useRef } from "react"
import { useSelector } from "react-redux"
import bugsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../assets/seaCreaturesIcon.svg"
import * as d3 from "d3"

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

const CritterGraph = ({critterpediaLength, outOf, icon}) => {

    const totalLeft = outOf - critterpediaLength
    const critters = [critterpediaLength, totalLeft]
    const outerRadius = 60
    const innerRadius = 45
    const ref = useRef(null)
    const outerRef = useRef(null)

    const createPie = d3
        .pie()
        .value(d => d)
        .sort(null)

    const createArc = d3
        .arc()
        .innerRadius(innerRadius)
        .outerRadius(outerRadius)
    const colors = ["#EFCB6B", "#867967"]

    useEffect(() => {
        const data = createPie(critters)
        const group = d3.select(ref.current)
        const groupWithData = group.selectAll("g.arc").data(data)

        groupWithData.exit().remove()
        
        const iconGroup = d3.select(outerRef.current).append("svg:image")

        iconGroup
            .attr("xlink:href", icon)
            .attr("width", "60")
            .attr("height", "60")
            .attr("transform", `translate(${30}, ${30})`)

        const groupWithUpdate = groupWithData
            .enter()
            .append("g")
            .attr("class", "arc")

        const path = groupWithUpdate
            .append("path")
            .merge(groupWithData.select("path.arc"))

        path
            .attr("class", "arc")
            .attr("d", createArc)
            .attr("fill", (d, i) => colors[i])
            
        })

    return (
        <div>
            <svg ref={outerRef} width="120" height="120">
                <g ref={ref} transform={`translate(${outerRadius}, ${outerRadius})`}/>
            </svg>
            <p>{`${critterpediaLength} / ${outOf}`}</p>
        </div>
    )
}