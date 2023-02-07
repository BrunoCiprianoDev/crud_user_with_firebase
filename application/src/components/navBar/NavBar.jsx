import React from 'react'

import { NavLink } from 'react-router-dom'

import styles from './NavBar.module.css'

import { useAuthentication } from '../../hooks/useAuthentication'

import { useAuthValue } from '../../context/AuthContext'

const NavBar = () => {

   const { user } = useAuthValue();

   const { logout } = useAuthentication();

   return (
      <div className={styles["container-navbar"]}>
         <nav>
            <ul>
               {!user &&
                  <>
                     <li>
                        <NavLink to="/" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Login</NavLink>
                     </li>
                     <li>
                        <NavLink to="/register" className={({ isActive }) => (isActive ? styles.active : styles.navLink)}>Register</NavLink>
                     </li>
                  </>
               }
               {user && (
                  <li>
                     <button onClick={logout} className={styles["link-logout"]}>Logout</button>
                  </li>
               )}
            </ul>
         </nav>
      </div>
   )
}

export default NavBar