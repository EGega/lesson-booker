import React, { useState } from 'react'
import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../home/Home"
import Login from '../login/Login'
import PrivateRouter from './PrivateRouter';

const RouterProvider = () => {
  const [auth, setAuth] = useState(false)
  return (
    <>
 <BrowserRouter >
    <Routes>
      <Route element={<PrivateRouter auth={auth}/>}>
        <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/login' element={<Login auth={auth} />}>
      
      </Route>
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default RouterProvider