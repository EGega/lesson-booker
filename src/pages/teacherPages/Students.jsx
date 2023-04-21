import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { students } from '../../data/data'
import styled from './Students.module.css'
// for the moment I am creating a fake students website and will put user generated students for backend
const Students = () => {
  console.log(students);
  return (
    <>
   <Navbar/>
   <div className={styled.container}>
   {students.map((student) => {
    const {id, firstName, lastName, gender, img} = student
    return(
   <div key={id}>
      <h2>{firstName}</h2>
      <h2>{lastName}</h2>
      <img height="200px" width="200px" src={img} alt="" />
      <h3>{gender}</h3>
    </div>
    )
   })
    }
   </div>
    </>
  )
}

export default Students