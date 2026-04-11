import { useState, useEffect } from "react";
import type { User } from "../context/AppContext";

export const useAuthState = () => {
    const [user, setUser] = useState<User | null>(null);
  const [isSignedIn, setIsSignedIn] = useState(false);
  const [errors, setErrors] = useState({ name: "", email: "" });
  // const [isLoading,setIsLoading]=useState(true)

  
  useEffect(()=>{
    // const user=localStorage.getItem('dashboard-user')
    // if(user){
    //   setUser(JSON.parse(user))
    //   setIsLoading(false)
    //   // setIsSignedIn(true)
    // }
    const user = localStorage.getItem("dashboard-user")
     if(user){
       setUser(JSON.parse(user))
       setIsSignedIn(true)
     }else{
      setIsSignedIn(false)
     }
    console.log(user)
  },[])

  const validateName = (name: string) => {
    if(name.trim() === "") return "Name is Required"
    return ""
  }
  const validateEmail = (email: string) => {
    if(email.trim() === "") return "Email is Required"
    if( !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email) ) return "Invalid email address"
    return ""

  }

  const handleSignIn = ({ name, email, id }: User):boolean => {
    // if (name.trim() === "" || email.trim() === "") {
    //   return;
    // }
    const nameError = validateName(name)
    const emailError = validateEmail(email)
    if(nameError || emailError) {
        setErrors({ name: nameError, email: emailError })
        console.log(nameError, emailError)
        return false
    }

    const newUser = { name, email,id };
    localStorage.setItem("dashboard-user", JSON.stringify(newUser));
    setUser(newUser);
    setIsSignedIn(true);
    setErrors({ name: "", email: "" })
    return true
  };

  const handleLogOut = () => {
    localStorage.removeItem("dashboard-user");
    setUser(null);
    setIsSignedIn(false);
  };
  return { user, isSignedIn, handleSignIn, handleLogOut,validateName, errors };
}

