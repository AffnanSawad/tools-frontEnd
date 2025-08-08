import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useNavigate } from "react-router-dom";


const PrivateRoute = ({children}) => {
   
   const {loading , user} = useContext(AuthContext);


   


   if(loading){

    return  <span className="loading loading-bars loading-lg"></span>

   }


   if(user){
    return children ;
   }

   else{

    return  <Navigate to='/login'></Navigate>
   }



};

export default PrivateRoute;