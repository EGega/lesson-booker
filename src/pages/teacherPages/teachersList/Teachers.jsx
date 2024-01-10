import React from 'react'
import Navbar from '../../../components/navbar/Navbar'
import styled from './Teachers.module.css'
import {teachers} from '../../../data/teachersList'
import { Link } from 'react-router-dom'
const Teachers = () => {
  return (
  <>
  <Navbar />
  <div className={styled.container}>
   {teachers.map((teacher) => {
    const {id, name, birthyear, rating, gender} = teacher
    return (
        <div className={styled.card} key={id}>

        <div className={styled.name}>
          <h2>{name}</h2>
        </div>
        <div className={styled.genAge}>
          <h3>{new Date().getFullYear() - birthyear}</h3>
          <h3>{gender}</h3>
        </div>
       
         <Link to={`/teachers/${id}`} className={styled.btn}>
                Details
        </Link>
       
      </div>
    )
   })}
  </div>
  </>
  )
}

export default Teachers