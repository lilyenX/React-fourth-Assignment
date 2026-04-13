import {  useState } from "react";
import classes from "./LoginForm.module.css";
import UserIcon from "../components/UserIcon";
import MailIcon from "../components/MailIcon";
import {  useAppContext } from "../context/AppContext";
import React from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const navigate=useNavigate()
//   const [inputNameValue, setInputNameValue] = useState("");
//   const [inputEmailValue, setInputEmailValue] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
    })
    
  const {handleSignIn,errors}=useAppContext()

    //  const onChangeName=(e: React.ChangeEvent<HTMLInputElement>)=>{
    //     setInputNameValue(e.target.value)
    //  }
    //  const onChangEmail=(e: React.ChangeEvent<HTMLInputElement>)=>{
    //     setInputEmailValue(e.target.value)
    //  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userId = btoa(`${formData.name}-${formData.email}`).replace(/[^a-zA-Z0-9]/g, '');  // Simple hash-like ID based on name-email 
    // handleSignIn({...formData, id: userId})
    const success=handleSignIn({...formData, id: userId})
    if(success){
        navigate(`/user/${userId}`)
    }
    // if (inputNameValue.trim() === "" || inputEmailValue.trim() === "") {
    //   return;
    // }

    // // console.log(inputEmailValue,
    // //     inputEmailValue
    // // )
    // // return

    // handleSignIn({
    //   name: inputNameValue,
    //   email: inputEmailValue,
    // });
  };

  return (
    <form noValidate onSubmit={handleSubmit}
    className={classes.loginForm}>
        {/* <div className={classes.loginformSection}> */}
        <div className={classes.formInner}>
            <label className={classes.fieldGroup}>
            <span className={classes.fieldLabel}>
                <UserIcon />
                Username
            </span>
            <input
                value={formData.name}
                onChange={(e)=>setFormData({...formData, name: e.target.value})}
                className={classes.fieldControl}
                type="text"
                name="userName"
                placeholder="Enter your username"
            />
            </label>
            
            {errors?.name && <div className={classes.error}><span>{errors.name}</span></div>}

            <label className={classes.fieldGroup}>
            <span className={classes.fieldLabel}>
                <MailIcon />
                Email
            </span>
            <input
                name="email"
                value={formData.email}
                onChange={(e)=>setFormData({...formData, email: e.target.value})}
                className={classes.fieldControl}
                type="text"
                placeholder="Enter your email"
            />
            </label>

            {errors?.email && <div className={classes.error}><span>{errors.email}</span></div>}

            <button type="submit"  className={classes.signInBtn}>
            Sign In
            </button>
        </div>
        {/* </div> */}
    </form>

    
    );

}
export default LoginForm;
