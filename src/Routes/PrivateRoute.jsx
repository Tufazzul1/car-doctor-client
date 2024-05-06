import { useContext } from "react";
import { Authcontext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRoute = ({children}) => {
    const { user , loading} = useContext(Authcontext);
    const location = useLocation()

    if(loading){
        return <div className="text-center"><span className="loading loading-ring loading-lg mt-10"></span></div>
    }

    if (user?.email) {
        return children;
    }

    return <Navigate state={location.pathname} to={'/login'} replace></Navigate>
};

export default PrivateRoute;