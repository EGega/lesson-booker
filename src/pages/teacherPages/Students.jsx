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
    const {id, firstName, lastName, gender, img, age} = student
    return(
   <div className={styled.card} key={id}>
      <img className={styled.img} src={img} alt="" />
      <div className={styled.name}>
        <h2>{firstName}</h2>
        <h2>{lastName}</h2>
      </div>
      <div className={styled.genAge}>
        <h3>{gender}</h3>
        <h3>{age}</h3>
      </div>
      <button className={styled.btn}>Details</button>
    </div>
    )
   })
    }
   </div>
    </>
  )
}

export default Students