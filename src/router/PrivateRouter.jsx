import { Outlet, Navigate } from 'react-router-dom';
import React from 'react'

const PrivateRouter = ({auth}) => {

  return (
    auth ? <Outlet/> : <Navigate to='/login'/> 
  )
}

export default PrivateRouter