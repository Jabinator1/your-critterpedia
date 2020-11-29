import bugsIcon from "../../../../../assets/bugsIcon.svg"
import fishIcon from "../../../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../../../assets/seaCreaturesIcon.svg"

const ExhibitTypeFilters = ({setCritterType}) => {

    const critterTypeInputs = [
        {name: "Bugs", type: "image", src: bugsIcon, state: "bugs"},
        {name: "Fish", type: "image", src: fishIcon, state: "fish"},
        {name: "Sea Creatures", type: "image", src: seaCreaturesIcon, state: "sea"}
    ]

    return (
        <div className="critter-type-selectors">
            {critterTypeInputs.map(input => (
                <div className="critter-type-container" key={input.name}>
                    <label className="critter-type-label" htmlFor={input.name}>{input.name}</label>
                    <input  
                        id={input.name} 
                        className="critter-type-input" 
                        type={input.type} 
                        src={input.src} 
                        onClick={() => setCritterType(input.state)}
                        style={{width: "50px"}} 
                    />
                </div>
            ))}
        </div>
    )
}

export default ExhibitTypeFilters