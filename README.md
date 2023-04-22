# Fullstack lesson booker App
### This is a fullstack app that can be used by Teachers and Students to book lessons
___
## Used Technologies
___
### Front End
1. Javascript
2. React
3. Redux Toolkit
4. Styled Components
5. React Router
___
### Backend
6. Python
7. Django
8. Postgres Sql
9. Rest Framework

___

** Currently this app is under the construction
** For the moment a fake log in log out featuure has been added by using Private Routing and Redux Toolkit to store the global log in values
*Real Authentication is coming with Django*
** When login teachers see a homepage with some features like books, students, teaching videos, booked classes, admin page and feedback.
*Currently some dummy data comes when we fetch students but this will change with the implementation of Django*
** A unique page is created for each student when we click on each of the student cards / UseParam and ReactRoute has been used
*Routere*
```<Route path='/students/:id' element={<StudentDetails />} />
```
*StudentDetailPage*

```import { useParams } from 'react-router-dom'
import {students} from '../../data/data.js'
const StudentDetails = () => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));
  console.log(student);
  return (
    <div>{student.firstName}</div>
  )
}

export default StudentDetails

//More detailes are being added of course
```
### This readme file will be constantly updated
