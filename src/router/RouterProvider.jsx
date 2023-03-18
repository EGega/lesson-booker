import  {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../home/Home"
import Login from '../login/Login'
import Register from '../login/Register';
import PrivateRouter from './PrivateRouter';

const RouterProvider = () => {
  
  return (
    <>
 <BrowserRouter >
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path='/' element={<Home/>}/>
      </Route>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register />}>
      </Route>
    </Routes>
 </BrowserRouter>
    </>
  )
}

export default RouterProvider