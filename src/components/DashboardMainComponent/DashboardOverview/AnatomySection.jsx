import React from "react";
import styles from "../../../styles/AnatomySection.module.css";
import humanbody from "../../../assets/human-body.png";
import scan from "../../../assets/scan.png";
import heart from "../../../assets/heart.png";
import leg from "../../../assets/leg.png";
import { HiMagnifyingGlassPlus } from "react-icons/hi2";
const AnatomySection = () => {
  return (
    <>
      <div className={styles.heading_section}>
        <h2 className={styles.heading}>Dashboard</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.img_container}>
          <img className={styles.human_img} src={humanbody} alt="Human Body" />
                  <HiMagnifyingGlassPlus className={styles.magnifyingglass} />
          <img className={styles.scan_img} src={scan} alt="Digital Scan" />
          <div className={styles.indicators_heart}>
            <img className={styles.heart_img} src={heart} alt="Heart"/>
            <p>Healthy Heart</p>
        </div>
          <img className={styles.scan2_img} src={scan} alt="Digital Scan" />
           <div className={styles.indicators_leg}>
            <img className={styles.leg_img} src={leg} alt="Leg"/>
            <p>Healthy Leg</p>
        </div>
        </div>
        
       
      </div>
    </>
  );
};

export default AnatomySection;
