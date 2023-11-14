import { Outlet, Navigate } from 'react-router-dom';
import React from 'react'
import { useSelector } from 'react-redux';
const PrivateRouter = () => {
const isLogged = useSelector(state => state.login.logged )
console.log(isLogged)
  return (
    isLogged ? <Outlet/> : <Navigate to='/login'/> 
  )
}

export default PrivateRouter