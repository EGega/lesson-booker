import React from 'react'
import { useParams } from 'react-router-dom'
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