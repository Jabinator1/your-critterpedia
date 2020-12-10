import { useSelector } from "react-redux"
import { Redirect, Route } from "react-router-dom"
import { selectIsLoggedIn } from "../../../redux/slices/userSlice"

const PrivateRoute = ({children, ...rest}) => {

    const isLoggedIn = useSelector(selectIsLoggedIn)
    return (
        <Route {...rest}>
            {isLoggedIn ? children : <Redirect to="/entry" />}
        </Route>
    )
}

export default PrivateRoute