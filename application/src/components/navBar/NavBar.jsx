import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

const NavBar = () => {
   return (
      <div className={styles["container-navbar"]}>
         <nav>
            <ul>
               <li>
                  <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Login</NavLink>
               </li>
               <li>
                  <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Register</NavLink>
               </li>
            </ul>
         </nav>
      </div>
   )
}

export default NavBar