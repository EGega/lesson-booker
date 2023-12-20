import  {BrowserRouter, Routes, Route} from "react-router-dom";
import TeacherHome from "../home/teacherHome/TeacherHome";
import Login from '../login/Login'
import Register from '../login/Register';
import PrivateRouter from './PrivateRouter';
import Students from "../pages/studentPages/Students";
import StudentDetails from "../pages/studentPages/StudentDetails";
import Classes from "../pages/teacherPages/classes/Classes";
import Books from "../pages/teacherPages/books/Books";
import BookDetails from "../pages/teacherPages/books/BookDetails";
import LessonCalendar from "../pages/calendars/LessonCalendar";
import Profile from "../pages/teacherPages/profile/Profile";
import LessonInfo from "../pages/teacherPages/lessonInfo/LessonInfo";
import Feedback from "../pages/feedback/Feedback";

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
        <Route path='/books/:id' element={<BookDetails/>}/>
        <Route path='/calendar' element={<LessonCalendar />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/lessoninfo' element={<LessonInfo />} />
        <Route path='/feedback' element={<Feedback />} />
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