import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { TeacherMainContainer } from '../../components/styled/teacherStyle/teacherHome'
const Teacherhome = () => {
  return (
    <TeacherMainContainer>
      <Navbar />
  <div>Welcome Home</div>
    </TeacherMainContainer>
  )
}

export default Teacherhome