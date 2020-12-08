import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { fetchCritterpedia, selectCritterpediaCritters, selectCritterpediaError, selectCritterpediaStatus } from '../../../redux/slices/critterpediaSlice'
import { selectCritters, selectCurrentCritterType } from '../../../redux/slices/crittersSlice'
import insectsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaIcon from "../../../assets/seaCreaturesIcon.svg"


const Critterpedia = () => {
    const dispatch = useDispatch()
    const critterpediaCritters = useSelector(selectCritterpediaCritters)
    const critters = useSelector(selectCritters)
    const error = useSelector(selectCritterpediaError)
    const status = useSelector(selectCritterpediaStatus)
    const critterType = useSelector(selectCurrentCritterType)

    const [isEditing, setIsEditing] = useState(false)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCritterpedia())
        }
    }, [status, dispatch])

    const critterIcon = critterType === "insects" ? insectsIcon 
            : critterType === "fish" ? fishIcon 
            : seaIcon

    return (
        <div>
            {status === "loading" ? <div>Loading...</div> 
            : status === "succeeded" ? (
                critters.map(critter => (
                    <li key={`Critterpedia: ${critter.id}`}>
                        {
                            critterpediaCritters.includes(critter.id)
                            ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} style={{width: "50px"}}/>
                            : <img src={critterIcon} alt={critter.name["name-USen"]} style={{width: "50px"}}/>
                        }
                    </li>
                ))
            ) : status === "failed" ? <div>{error}</div> : null}
        </div>
    )
}

export default Critterpedia