import TeacherRegister from "./teacherLogin/TeacherRegister"
import StudentRegister from "./studentLogin/StudentRegister"
import { useState } from "react"
const Register = () =>  {
const [register, setRegister] = useState("student")
  return (
    <>
     { register === "student" ? <StudentRegister setRegister={setRegister}/> : <TeacherRegister setRegister={setRegister}/> } 
    </>
  )
}

export default Register