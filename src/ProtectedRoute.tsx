import { Navigate } from "react-router-dom";
import { useAppContext } from "./context/AppContext";
//gate keep-security
export const ProtectedRoute = ({children}: {children: React.ReactNode}) => {
    const user = useAppContext().user
    if(!user){
        return <Navigate to="/login" replace />
    }
  return <>{children}</> 
}