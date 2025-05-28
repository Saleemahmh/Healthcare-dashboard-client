import React from "react";
import SimpleAppointmentCard from "../SimpleAppointmentCard";
import { UpcomingAppointments } from "../../data/appointment";
import styles from "../../styles/UpcomingSchedule.module.css";
const UpcomingSchedule = () => {
  return (
    <div>
      <SimpleAppointmentCard></SimpleAppointmentCard>
      <div>
        <div>
          <h2 className={styles.schedule_heading}>The Upcoming Schedule</h2>
        </div>
      </div>
      <div className={styles.appointmentlayout}>
              {UpcomingAppointments.map((day,i)=>(
              <div className={styles.appointmentcard_container} key={i} style={{backgroundColor:day.card_color}}>
                <h3>{day.day}</h3>
                <div className={styles.cardcontainer}>
                {day.appointment_schedule.map((appointment,j)=>(
                  <div key={j} className={styles.cards}>
                  <div className={styles.appointmentname}>
                     {appointment.appointment_name}
                  <img className={styles.appointmenticon} src={appointment.icon}></img>
                  </div>
                  <div className={styles.appointmenttime}>
                      {appointment.appointment_time}
                  </div>
      
              </div>
                ))}
                </div>
                 </div> 
              ))}
          </div>
    </div>
  );
};

export default UpcomingSchedule;
