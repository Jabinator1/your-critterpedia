import { useSelector, useDispatch } from 'react-redux'
import { critterpediaEdited } from '../../../redux/reducers/critterpediaReducer'
import {useState} from "react"
import { selectCritterpedia } from '../../../features/critterpedia/critterpediaSlice'


const Critterpedia = () => {
    const {bug_arr, fish_arr, sea_arr} = useSelector(selectCritterpedia)
    const dispatch = useDispatch()
    const [test2, setTest2] = useState([])
    const test = [...fish_arr, test2]

    onCompleteClick = () => dispatch(critterpediaEdited(test))
    
    return (
        <div>Critterpedia</div>
    )
}

export default Critterpedia