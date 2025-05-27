import React from "react";
import styles from "../../../styles/HealthStatusCards.module.css";
import { IoIosArrowDown } from "react-icons/io";
import { FaLongArrowAltRight } from "react-icons/fa";
import { HealthStatus } from "../../../data/healthstatuscards";
const HealthStatusCards = () => {
  return (
    <div className={styles.status_container}>
      <div className={styles.heading_section}>
        <p className={styles.time_period}>
          This week
          <IoIosArrowDown className={styles.icon} />
        </p>
      </div>
      <div className={styles.status_cards}>
        {HealthStatus.map((status, i) => (
          <div>
            <div className={styles.organ} key={i}>
              <img src={status.organ_icon} className={styles.img}></img>
              <p className={styles.organ_name}>{status.organ_name}</p>
            </div>
            <div className={styles.time}>
              <p className={styles.organ_time}>{status.time}</p>
            </div>
            <div className={styles.statusbar_container}>
              <div
                className={styles.status_bar}
                style={{
                  width: status.statusbar_percent + "%",
                  backgroundColor: status.statusbar_color,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <div className={styles.detail_section}>
          <p className={styles.details}>
            Details
            <FaLongArrowAltRight className={styles.icon} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default HealthStatusCards;
