import { Navigate} from "react-router-dom";

export default function PrivateRoute({children})
{
    return localStorage.getItem("user") ? children : <Navigate to="/login"/>
}