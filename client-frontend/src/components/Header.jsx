import React from 'react';
import logo from '../assets/Logo.png';
import { FaUser,FaPlus,FaBell,FaSearch} from "react-icons/fa";
import styles from '../styles/Header.module.css';
const Header = () => {
  return (
    <nav className={styles.navbar}>
    <div className={styles.container}>
        <div className={styles.elements}>
            <img className={styles.img} src={logo} alt="logo"></img>
       
        <div className={styles.search_elements}>
            <FaSearch className={styles.search_icon} />
            <input className={styles.search} type="text" placeholder='Search'/>
            <FaBell className={styles.bell_icon}  />
       </div>
        <div className={styles.button_icon}>
           <button className={styles.plus_icon}><FaPlus /></button> 
           <button className={styles.user_icon}><FaUser /></button>
      </div>
         </div>
    </div>
    </nav>
  )
}


export default Header