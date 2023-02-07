import React from 'react'

import styles from './Register.module.css'

import { useRegister } from './useRegister.js'

const Register = () => {

   const {
      displayName,
      setDisplayName,
      email,
      setEmail,
      password,
      setPassword,
      confirmPassword,
      setConfirmPassword,
      error,
      loading,
      handleSubmit
   } = useRegister();

   return (
      <div className={styles["container-register"]}>
         <form onSubmit={handleSubmit}>
            <label>
               <span>Name:</span>
               <input
                  type="text"
                  name="displayName"
                  id="name"
                  value={displayName}
                  onChange={(e)=>setDisplayName(e.target.value)}
               />
            </label>
            <label>
               <span>E-mail:</span>
               <input
                  type="email"
                  name="inputEmail"
                  id="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
               />
            </label>
            <label>
               <span>Password:</span>
               <input
                  type="password"
                  name="inputPassword"
                  id="password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
               />
            </label>
            <label>
               <span>Confirm password:</span>
               <input
                  type="password"
                  name="inputConfirmPassword"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e)=>setConfirmPassword(e.target.value)}
               />
            </label>
            {!loading && <button className='btn'>Register</button>}
            {loading && <button disabled={true} className='btn'>Register</button>}
            {error && <p className={styles.error}>{error}</p>}
         </form>
      </div>
   )
}

export default Register