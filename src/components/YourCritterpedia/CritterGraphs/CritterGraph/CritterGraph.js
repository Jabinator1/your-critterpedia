import { useEffect, useRef } from "react"
import * as d3 from "d3"

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
        
        const iconGroup = d3.select(outerRef.current).append("image")

        iconGroup
            .attr("href", icon)
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
        <div id="test-my-dude">
                {/* <Icon className="critter-icon"/> */}
            
                <svg ref={outerRef} className="graph-path">
                    <g ref={ref} transform={`translate(${outerRadius}, ${outerRadius})`}/>
                </svg>
                <p>{`${critterpediaLength} / ${outOf}`}</p>

        </div>
    )
}

export default CritterGraph