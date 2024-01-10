import  {BrowserRouter, Routes, Route} from "react-router-dom";
import TeacherHome from "../home/teacherHome/TeacherHome";
import Login from '../login/Login'
import Register from '../login/Register';
import PrivateRouter from './PrivateRouter';
import TeacherRouter from "./TeacherRouter";
import StudentRouter from "./StudentRouter";
const RouterProvider = () => {
  
  return (
    <>
 <BrowserRouter >
    <Routes>
      <Route element={<PrivateRouter />}>
        < Route path='/*' element={<TeacherRouter />} />
        < Route path='/*' element={<StudentRouter />} />
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