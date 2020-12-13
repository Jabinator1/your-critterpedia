import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect, memo } from "react"
import { fetchCritterpedia, selectCritterpediaCritters, selectCritterpediaError, selectCritterpediaStatus, updateCritterpedia } from "../../../redux/slices/critterpediaSlice"
import { selectCritters, selectCurrentCritterType } from "../../../redux/slices/crittersSlice";
import { ReactComponent as InsectsIcon } from "../../../assets/bugsIcon.svg"
import { ReactComponent as FishIcon } from "../../../assets/fishIcon.svg"
import { ReactComponent as SeaIcon } from "../../../assets/seaCreaturesIcon.svg"
import Loading from "../../shared/Loading/Loading"
import "./Critterpedia.sass"

const Critterpedia = () => {
  const dispatch = useDispatch();
  const critterpediaCritters = useSelector(selectCritterpediaCritters)
  const critters = useSelector(selectCritters)
  const error = useSelector(selectCritterpediaError)
  const status = useSelector(selectCritterpediaStatus)
  const critterType = useSelector(selectCurrentCritterType)

  const [isEditing, setIsEditing] = useState(false)
  const [newCritters, setNewCritters] = useState([])
  const [showAllCritters, setShowAllCritters] = useState(false)

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCritterpedia())
    }

    setNewCritters(critterpediaCritters)
  }, [status, dispatch, critterpediaCritters])

  const CritterIcon =
    critterType === "insects" ? InsectsIcon
    : critterType === "fish" ? FishIcon
    : SeaIcon

  const listItemClicked = (critterId) => {
    if (isEditing) {
      const foundIndex = newCritters.indexOf(critterId)

      if (~foundIndex) {
        const newCrittersCopy = [...newCritters]
        newCrittersCopy.splice(foundIndex, 1)

        setNewCritters([...newCrittersCopy])
      } else {
        setNewCritters([...newCritters, critterId]);
      }
    } else {
      //# open the window for critter stats
    }
  }

  const cancelClicked = () => {
    setIsEditing(!isEditing)
    setNewCritters(critterpediaCritters)
  }

  const saveClicked = () => {
    const forNow = critterType === "insects" ? "bug" : critterType
    dispatch(updateCritterpedia({critterArrType: `${forNow}_arr`, critterArr: newCritters}))
    setIsEditing(!isEditing)
  }

  const onEnterChangeHandler = () => {
    //# show the critter name here
  }

  const CritterList = memo(() => (
    critters.map(critter => (
      <div 
        key={`Critterpedia: ${critter.id}`} 
        onClick={() => listItemClicked(critter.id)} 
        className="critterpedia-icon-container"
        // onMouseEnter={() => }
      >
        {
          showAllCritters 
            ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} className={"critterpedia-critter-icon"} />
          : newCritters.includes(critter.id) 
            ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} className={"critterpedia-critter-icon"} />
          : isEditing 
            ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} className={"critterpedia-critter-icon lower-opacity"} />
          : <CritterIcon className={"critterpedia-placeholder-icon"} />
        }
      </div>
    ))
  ))

  return (
    <div>
      {status === "loading" ? <Loading />
      : status === "failed" ? <div>{error}</div>
      : status === "succeeded" ? (
        <div id="critterpedia-icons-container">
          <CritterList />
        </div>
      ) : null}
      {!isEditing ? (
        <div>
          <input type="button" className="button" onClick={() => setShowAllCritters(!showAllCritters)} value={showAllCritters ? "Show my critters" : "Show all critters"} />
          <input type="button" className="button" onClick={() => setIsEditing(!isEditing)} value="Edit" />
        </div>
      ) : (
        <div>
          <input type="button" className="button" onClick={cancelClicked} value="Cancel" />
          <input type="button" className="button" onClick={saveClicked} value="Save" />
        </div>
      )}
    </div>
  )
}

export default Critterpedia