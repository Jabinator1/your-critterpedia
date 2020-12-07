import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { selectCritterpedia, fetchCritterpedia } from '../../../features/critterpedia/critterpediaSlice'


const Critterpedia = () => {
    const dispatch = useDispatch()
    const {bug_arr, fish_arr, sea_arr} = useSelector(selectCritterpedia)

    const critterpediaStatus = useSelector(state => state.critterpedia.status)
    const error = useSelector(state.critterpedia.error)

    const [critterType, setCritterType] = useState("insects")
    
    useEffect(() => {
        if (critterpediaStatus === "idle") {
            dispatch(fetchCritterpedia)
        }
    }, [critterpediaStatus, dispatch])

    let content

    if (critterpediaStatus === "loading") {
        content = <div>Loading...</div>
    } else if (critterpediaStatus === "succeeded") {
        const mappedArr = critterType === "insects" ? bug_arr 
        : critterType === "fish" ? fish_arr 
        : sea_arr

        content = mappedArr.map(insect => (
            <div>{insect}</div>
        ))
    } else if (critterpediaStatus === "failed") {
        content = <div>{error}</div>
    }

    return (
        <section>
            <h2>Insects</h2>
            {content}
        </section>
    )
}

export default Critterpedia