import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import { fetchCritterpedia, selectCritterpediaCritters, selectCritterpediaError, selectCritterpediaStatus, updateCritterpedia } from "../../../redux/slices/critterpediaSlice"
import { selectCritters, selectCurrentCritterType } from "../../../redux/slices/crittersSlice";
import insectsIcon from "../../../assets/bugsIcon.svg"
import fishIcon from "../../../assets/fishIcon.svg"
import seaIcon from "../../../assets/seaCreaturesIcon.svg"
import Loading from "../../shared/Loading/Loading"

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

  const critterIcon =
    critterType === "insects" ? insectsIcon
    : critterType === "fish" ? fishIcon
    : seaIcon

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

  return (
    <div>
      {status === "loading" ? <Loading />
      : status === "failed" ? <div>{error}</div>
      : status === "succeeded" ? (
        <div>
          {critters.map((critter) => (
            <div key={`Critterpedia: ${critter.id}`} onClick={() => listItemClicked(critter.id)}>
              { //TODO CLEAN UP THIS CODE
                showAllCritters ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} style={{ width: "50px" }} />
                : newCritters.includes(critter.id) ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} style={{ width: "50px" }} />
                : isEditing ? <img src={critter.icon_uri} alt={critter.name["name-USen"]} style={{ width: "50px", opacity: "0.5" }} />
                : <img src={critterIcon} alt={critter.name["name-USen"]} style={{ width: "50px" }}/>
              }
            </div>
          ))}
        </div>
      ) : null}
      {!isEditing ? (
        <div>
          <input type="button" onClick={() => setShowAllCritters(!showAllCritters)} value={showAllCritters ? "Show my critters" : "Show all critters"} />
          <input type="button" onClick={() => setIsEditing(!isEditing)} value="Edit" />
        </div>
      ) : (
        <div>
          <input type="button" onClick={cancelClicked} value="Cancel" />
          <input type="button" onClick={saveClicked} value="Save" />
        </div>
      )}
    </div>
  )
}

export default Critterpedia