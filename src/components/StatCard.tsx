import type React from "react"
import classes from './StatCard.module.css'

interface StatCardProps{
    label:string,
    value: string,
    icon: React.ReactNode
}

const StatCard = ({label,value,icon}:StatCardProps) => {
    // const stat={
    //     {id:1,label:"Profile", value:user.name, icon:<UserIcon>}
    // }
  return (
    <div className={classes.card}>
      <span className={classes.label}>{label}</span>
      <div className={classes.icon}>{icon}</div>
      <strong className={classes.value}>{value}</strong>
    </div>
  )
}

export default StatCard
