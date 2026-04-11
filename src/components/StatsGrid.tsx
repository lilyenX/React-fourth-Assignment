import StatCard from "./StatCard"
import ClockIcon from "./ClockIcon"
import MailIcon from "./MailIcon"
import UserIcon from "./UserIcon"
import classes from './StatsGrid.module.css'
import {  useAppContext } from "../context/AppContext"
const StatsGrid = () => {
    const {user} = useAppContext()
    if(!user) return null
    const statsData=[
        {id:1, label:"Profile", value: user.name, icon: <UserIcon/>},
        {id:2, label:"Email", value: user.email, icon: <MailIcon/>},
        {id:3, label:"Last Login", value: "Today", icon: <ClockIcon/>},
    ]
  return (
    <div className={classes.wrapper} >
      {
        statsData.map((stat)=>(
            <StatCard
            key={stat.id}
            label={stat.label}
            value={stat.value}
            icon={stat.icon}
            />
        ))
      }
    </div>
  )
}

export default StatsGrid
