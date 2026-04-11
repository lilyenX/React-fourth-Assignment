import DashboardIcon from "./DashboardIcon";
import LogOutIcon from "./LogOutIcon";
import classes from "./Navbar.module.css";
import { useAppContext } from "../context/AppContext";
import { NavLink, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Navbar = () => {
  const { user, onLogOut } = useAppContext();
  const navigate = useNavigate();
  return (
    <nav className={classes.nav}>
      <div className={classes.logoSection}>
        <DashboardIcon />
        <span className={classes.logoText}>Personal Dashboard</span>
      </div>

      <div className={classes.authSection}>
        {user ? (
          <div className={classes.loggedIn}>
            <div className={classes.userInfo}>
              <span className={classes.welcomeText}>Welcome back!</span>
              <span className={classes.userName}>{user.name}</span>
              <div className={classes.navLinks}>
                <NavLink
                  className={classes.homeLink}
                  style={({ isActive }) => ({
                    color: isActive ? "#00d2ff" : "black",
                  })}
                  to="/"
                >
                  Home
                </NavLink>
                <NavLink
                  style={({ isActive }) => ({
                    color: isActive ? "#00d2ff" : "black",
                  })}
                  className={classes.styledLink}
                  to="/write-article"
                >
                  Add Article
                </NavLink>
              </div>
            </div>
            <button
              onClick={() => {
                (onLogOut(), navigate("/"));
              }}
              className={classes.logOutBtn}
            >
              <LogOutIcon /> Logout
            </button>
          </div>
        ) : (
          <div className={classes.mainLinks}>
            <span className={classes.homeLink}>
              <NavLink
                className={classes.homeLink}
                style={({ isActive }) => ({
                  color: isActive ? "#00d2ff" : "black",
                })}
                to="/"
              >
                Home
              </NavLink>
            </span>
            <span className={classes.loginPrompt}>
              <Link className={classes.styledLink} to="/sign-up">
                Sign up
              </Link>
            </span>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
