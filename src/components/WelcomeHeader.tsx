import classes from "./WelcomeHeader.module.css";
import {  useAppContext } from "../context/AppContext";


const WelcomeHeader = () => {
    const {user} = useAppContext()
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", 
    year: "numeric", 
    month: "long", 
    day: "numeric", 
  });

  return (
    <div className={classes.header}>
      <span className={classes.title}>Welcome back, {user?.name}!</span>
      <span className={classes.subtitle}>Today is {today}</span>
    </div>
  );
};

export default WelcomeHeader;
