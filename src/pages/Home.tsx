import { Link } from "react-router-dom";
import classes from './Home.module.css';
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
  const fullText = "Welcome to our application!";
  const [displayedText, setDisplayedText] = useState("");
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      const timer = setInterval(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
      }, 80); 
      return () => clearInterval(timer);
    } else {
      setIsFinished(true);
    }
  }, [displayedText, fullText]);
   
  return (
    <div className={classes.container}>
      <div className={classes.glassCard}>
        <h1 className={classes.welcomeText}>
          {displayedText}
          <span className={classes.cursor}>|</span>
        </h1>
        
        <div className={`${classes.actionArea} ${isFinished ? classes.show : ''}`}>
          <p>Please <Link to="/login" className={classes.styledLink}>Log in</Link> to access your dashboard.</p>
        </div>
      </div>
    </div>
  );
}

export default Home;