import React from "react";
import styles from "../../styles/CalendarView.module.css";
import { IoArrowBackCircle } from "react-icons/io5";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { CalendarData } from "../../data/calendardata";
const CalendarView = () => {
  return (
    <>
      <div>
        <div className={styles.calendar_heading}>
          <h2>October 2021</h2>
          <div className={styles.arrowbuttons}>
            <IoArrowBackCircle />
            <IoArrowBackCircleSharp />
          </div>
        </div>
      </div>
      <div className={styles.calendardata}>
        {CalendarData.map((data, i) => (
          <div key={i} style={{ color: `${data.disabled ? "grey" : ""}` }}>
            <div className={styles.calendardays}>{data.days}</div>
            <div className={styles.calendardate}>{data.date}</div>
            {data.slots.map((slot) => (
              <div
                key={slot} className={styles.calendarslots}
                style={{
                  backgroundColor: `${
                    data.selected === slot ? "rgb(46, 11, 99)" : ""
                  }`,
                  color: `${data.selected === slot ? "white" : ""}`,
                  borderRadius: `${data.selected === slot ? "5px" : ""}`,
                  padding: `${data.selected === slot ? "4px" : ""}`,
                  margin:`${data.selected === slot ? "4px" : ""}`,
        
                }}
              >
                {slot}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default CalendarView;
