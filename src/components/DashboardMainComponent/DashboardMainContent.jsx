import React from "react";
import AnatomySection from "./DashboardOverview/AnatomySection";
import HealthStatusCards from "./DashboardOverview/HealthStatusCards";
import styles from "../../styles/DashboardMainContent.module.css";

import ActivityFeed from "./ActivityFeed";
import UpcomingSchedule from "./UpcomingSchedule";
import CalendarView from "./CalendarView";
import Sidebar from "../Sidebar";
const DashboardMainContent = () => {
  return (
   
   
    <div className={styles.layout}>
        <Sidebar></Sidebar>
    
    
      <div className={styles.container}>
        <div className={styles.anatomy_section}>
          <AnatomySection></AnatomySection>
        </div>
        <div className={styles.healthstatus_section}>
          <HealthStatusCards></HealthStatusCards>
        </div>
       
         <div className={styles.activity_section}>
          <ActivityFeed></ActivityFeed>
        </div>
        <div className={styles.calendarview_section}>
          <CalendarView></CalendarView>
        </div>
         <div className={styles.upcoming_section}>
          <UpcomingSchedule></UpcomingSchedule>
        </div>
       
      </div>
      </div>
  
  );
};

export default DashboardMainContent;
