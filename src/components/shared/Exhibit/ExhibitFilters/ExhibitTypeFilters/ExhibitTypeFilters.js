import bugsIcon from "../../../../../assets/bugsIcon.svg"
import fishIcon from "../../../../../assets/fishIcon.svg"
import seaCreaturesIcon from "../../../../../assets/seaCreaturesIcon.svg"

const ExhibitTypeFilters = ({changeCritterType}) => {

    const critterTypeInputs = [
        {name: "Bugs", type: "image", src: bugsIcon, critterType: "bugs"},
        {name: "Fish", type: "image", src: fishIcon, critterType: "fish"},
        {name: "Sea Creatures", type: "image", src: seaCreaturesIcon, critterType: "sea"}
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
                        onClick={() => changeCritterType(input.critterType)}
                        style={{width: "50px"}} 
                    />
                </div>
            ))}
        </div>
    )
}

export default ExhibitTypeFilters