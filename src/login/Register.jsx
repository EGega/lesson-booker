
import { useState } from "react"
const Register = () =>  {
const [login, setLogin] = useState("student")
// I am implementing a simple logic to display the teacher of student according to the clicked button and will change the state accordingly
  return (
    <>
     { login === "student" ? <StudentLogin setLogin={setLogin}/> : <TeacherLogin setLogin={setLogin}/> } 
    </>
  )
}

export default Register