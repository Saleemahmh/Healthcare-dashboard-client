import React from "react";
import { SidebarMenus } from "../data/sidebardata";
import styles from "../styles/Sidebar.module.css";
const Sidebar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.elements}>
        {SidebarMenus.map((category, i) => (
          <div key={i} className={styles.section}>
            <h4 className={styles.section_category}>{category.category}</h4>

            <ul className={styles.menu_items}>
              {category.menu_name?.map((menu_name, j) => (
                <li key={j} className={styles.menu_list}>
                  <span className={styles.menu_icon}>{menu_name.icon && <menu_name.icon />}</span>
                  <span className={styles.menu_name}>{menu_name.name}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className={styles.section_settings}>
          {SidebarMenus.map((menu, i) => (
            <div key={i} className={styles.settings}>
              <span className={styles.menu_icon}>{menu.icon && <menu.icon />}</span>
              <span className={styles.menu_name}>{menu.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
