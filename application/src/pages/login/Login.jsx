import React from 'react'

import styles from './Login.module.css'
import { useLogin } from './useLogin'

const Login = () => {

   const {
      email,
      setEmail,
      password,
      setPassword,
      error,
      loading,
      handleSubmit

   } = useLogin();

   return (
      <div className={styles["container-login"]}>
         <form onSubmit={handleSubmit}>
            <label>
               <span>E-mail:</span>
               <input
                  type="email"
                  name="inputEmail"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
            </label>
            <label>
               <span>Password:</span>
               <input
                  type="password"
                  name="inputPassword"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
               />
            </label>
            {error && <p>{error}</p>}
            {!loading && <button className='btn'>Login</button>}
            {loading && <button disabled={true} className='btn'>Login</button>}
         </form>
      </div>
   )
}

export default Login