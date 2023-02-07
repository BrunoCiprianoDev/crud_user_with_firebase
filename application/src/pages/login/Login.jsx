import React from 'react'

import styles from './Login.module.css'

const Login = () => {
   return (
      <div className={styles["container-login"]}>
         <form>
            <label>
               <span>E-mail:</span>
               <input type="email" name="inputEmail" id="email" />
            </label>
            <label>
               <span>Password:</span>
               <input type="password" name="inputPassword" id="password" />
            </label>
            <input type="submit" value="Login"/>
         </form>
      </div>
   )
}

export default Login