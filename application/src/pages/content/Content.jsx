import React from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

const Content = () => {

  const { auth } = useAuthentication();

  console.log(auth);
  return (
    <div><h1>Current user</h1>
      <p><b>Name:</b> {auth.currentUser.displayName}</p>
      <p><b>E-mail:</b> {auth.currentUser.email}</p>
    </div>
  )
}

export default Content