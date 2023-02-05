import React from 'react'

import styles from './Login.module.css'

const Login = () => {
   return (
      <div className={styles["container-login"]}>
         <form>
            <label>
               <span>Name:</span>
               <input type="text" name="inputName" id="name" />
            </label>
            <label>
               <span>E-mail:</span>
               <input type="email" name="inputEmail" id="email" />
            </label>
            <label>
               <span>Password:</span>
               <input type="password" name="inputPassword" id="password" />
            </label>
            <label>
               <span>Confirm password:</span>
               <input type="password" name="inputConfirmPassword" id="confirmPassword" />
            </label>
            <input type="submit" />
         </form>
      </div>
   )
}

export default Login