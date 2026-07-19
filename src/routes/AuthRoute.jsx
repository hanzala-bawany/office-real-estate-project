import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom"
import { toast } from "react-toastify";

 const AuthRoute = () => {
 
    const user = useSelector((state) => state?.authReducer?.user);


    useEffect(() => {

        if(!user){
            toast.warning("You have to login first")
        }

    }, [user]) 


   return (
      user ? <Outlet /> : <Navigate to="/signin" />
   )
 }
 
 export default AuthRoute