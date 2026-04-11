import React from "react"
import { useAuthState } from "../hooks/useAuthState";

export interface User {
  name: string;
  email: string;
  id: string;
}
type AppContextType={
    user: User | null
    handleSignIn: (user:User)=>boolean,
    onLogOut: ()=> void
    errors: {name: string, email: string} 
}
export const AppContext=React.createContext<AppContextType|undefined>(undefined)



export const AppContextProvider: React.FC<{children: React.ReactNode}> = ({children}:{
    children: React.ReactNode
}) => {
    const {user,handleSignIn,handleLogOut,errors}=useAuthState()
    return (
        <AppContext.Provider value={{ user, handleSignIn, onLogOut: handleLogOut, errors }}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => {
    const context = React.useContext(AppContext);
    if (!context) {
        throw new Error("useAppContext must be used within an AppContextProvider");
    }
    return context;
}