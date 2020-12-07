import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from "react"
import { selectCritterpedia, fetchCritterpedia } from '../../../redux/slices/critterpediaSlice'
import { selectCurrentCritterType } from '../../../redux/slices/crittersSlice'


const Critterpedia = () => {
    const dispatch = useDispatch()
    const {critterpediaInsects, critterpediaFish, critterpediaSea, status, error} = useSelector(selectCritterpedia)
    const critterType = useSelector(selectCurrentCritterType)

    useEffect(() => {
        if (status === "idle") {
            dispatch(fetchCritterpedia())
        }
    }, [status, dispatch])

    let content

    if (status === "loading") {
        content = <div>Loading...</div>
    } else if (status === "succeeded") {
        const mappedArr = critterType === "insects" ? critterpediaInsects 
        : critterType === "fish" ? critterpediaFish 
        : critterpediaSea

        content = mappedArr.map(critter => (
            <div>{critter}</div>
        ))
    } else if (status === "failed") {
        content = <div>{error}</div>
    }

    return (
        <section>
            <h2>{critterType}</h2>
            {content}
        </section>
    )
}

export default Critterpedia