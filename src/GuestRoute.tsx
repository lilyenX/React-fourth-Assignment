import { Navigate } from "react-router-dom"
import { useAppContext } from "./context/AppContext"
//gate keep-security
export const GuestRoute = ({children}: {children: React.ReactNode}) => {
    const user = useAppContext().user
    if(user){
        return <Navigate to={`/user/${user.id}`} replace />
    }
  return <>{children}</> 
}
