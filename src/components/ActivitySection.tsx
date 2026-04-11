import classes from './ActivitySection.module.css'

const ActivitySection = () => {
    const activities=[
        {id:1, value:"Successfully logged in"},
        {id:2, value:"Dashboard accessed"}
    ]
  return (
    <div className={classes.activityContainer}>
      
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
        </svg>
        <strong>Recent Activity</strong>
        <span>Your recent dashboard activities</span>

        <div className={classes.activityList}>
      {
        activities.map((item) => (
          <div key={item.id} className={classes.activityItem}>
            <div className={classes.activityDot} />
            <div className={classes.activityContent}>
              <p className={classes.activityValue}>{item.value}</p>
            </div>
          </div>
        ))
      }
      </div>
    </div>
  );
};

export default ActivitySection;
