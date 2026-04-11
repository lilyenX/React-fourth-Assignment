import ActivitySection from "../components/ActivitySection";
import StatsGrid from "../components/StatsGrid";
import WelcomeHeader from "../components/WelcomeHeader";
import classes from "./DashboardPage.module.css";
import {  useAppContext } from "../context/AppContext";

const DashboardPage = () => {
    const {user} = useAppContext()
    if(!user) return null
  return (
    <div className={classes.dashboardPage}>
      <WelcomeHeader  />
      <StatsGrid/>
      <ActivitySection />
    </div>
  );
};

export default DashboardPage;
