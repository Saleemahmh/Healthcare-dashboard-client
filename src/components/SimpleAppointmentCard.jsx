import React from 'react';
import { Appointments } from '../data/appointment';
import styles from '../styles/SimpleAppointmentCard.module.css';
const SimpleAppointmentCard = () => {
  return (
    <div className={styles.appointmentlayout}>
        {Appointments.map((appointment,i)=>(
        <div className={styles.appointmentcard_container} key={i} style={{backgroundColor:appointment.card_color, color: appointment.card_text}}>
            <div className={styles.appointmentname}>
               {appointment.appointment_name}
            <img className={styles.appointmenticon} src={appointment.icon}></img>
            </div>
            <div className={styles.appointmenttime}>
                {appointment.appointment_time}
            </div>
            <div className={styles.doctorname}>
                {appointment.doctor_name}
            </div>

        </div>
        ))}
    </div>
  )
}

export default SimpleAppointmentCard