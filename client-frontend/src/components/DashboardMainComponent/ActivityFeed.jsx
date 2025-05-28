import React from "react";
import styles from "../../styles/ActivityFeed.module.css";
import { ActivityData } from "../../data/activitydata";
const ActivityFeed = () => {
  return (
    <>
      <div className={styles.activity_headingcontainer}>
        <div className={styles.activity_heading}>Activity</div>
        <p>3 appointments this week</p>
      </div>
      <div className={styles.activitychart_container}>
        {ActivityData.map((day, i) => (
          <div key={i} className={styles.activitydays}>
            <div className={styles.activitycolumns}>
              <div className={styles.activitybars}>
                {day.bars.map((height, j) => (
                  <div
                    key={j}
                    className={styles.activitybar}
                    style={{
                      height: `${height}px`,
                      backgroundColor: day.colors[j] || "grey",
                    }}
                  ></div>
                ))}
              </div>
            </div>
            
              <div className={styles.activitychart_day}>{day.day}</div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ActivityFeed;
