import { useEffect } from "react";
import { useLocation,Navigate,Outlet } from "react-router";

const RequireAuth = () => {
    const user=JSON.parse(localStorage.getItem("authorization"))
    const location = useLocation();
    
    useEffect(()=>{
        if(!user)
        alert("Please Sign in or Sign Up to continue!")
    },[])

    return (
        user ? <Outlet/> : <Navigate to='/home' state={{from:location}} replace/>
    )
}

export default RequireAuth;