import React from 'react'
import { useParams } from 'react-router-dom'
import {students} from '../../data/data.js'
import Navbar from '../../components/navbar/Navbar.jsx'
import styled from "./StudentDetails.module.css"
const StudentDetails = () => {
  const { id } = useParams();
  const student = students.find((s) => s.id === parseInt(id));
  console.log(student);
  return (
    <>
      <Navbar />
      <div className={styled.container}>
      <img src={student.img} alt="" />
      <h3>{student.firstName}</h3>
      <h3>{student.lastName}</h3>
      <h3>{student.gender}</h3>
      <h3>{student.age}</h3>

      </div>
    </>
  )
}

export default StudentDetails