import  {BrowserRouter, Routes, Route} from "react-router-dom";
import TeacherHome from "../home/teacherHome/TeacherHome";
import Login from '../login/Login'
import Register from '../login/Register';
import PrivateRouter from './PrivateRouter';
import Students from "../pages/teacherPages/Students";
import StudentDetails from "../pages/teacherPages/StudentDetails";
import Classes from "../pages/teacherPages/classes/Classes";
import Books from "../pages/teacherPages/books/Books";

const RouterProvider = () => {
  
  return (
    <>
 <BrowserRouter >
    <Routes>
      <Route element={<PrivateRouter />}>
        <Route path='/' element={<TeacherHome/>}/> 
        {/* The route should change since that is tonbly the teacher homepage not the home page */}
        <Route path='/students' element={<Students/>}/>
        <Route path='/students/:id' element={<StudentDetails />} />
        <Route path='/classes' element={<Classes/>}/>
        <Route path='/books' element={<Books/>}/>
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