import React from 'react'
import { useParams } from 'react-router-dom'
import { teachers } from '../../../data/teachersList'
import Navbar from '../../../components/navbar/Navbar'
import styled from './TeacherDetails.module.css'
import { SubmitButton } from '../../../components/styled/styledbuttons/buttons'
import { useNavigate } from 'react-router-dom'
import maleAvatar from "../../../assets/maleAvatar.jpg"
import femaleAvatar from "../../../assets/femaleAvatar.png"
const TeacherDetails = () => {
  const {id} = useParams()
  const teacher = teachers.find((teacher) => teacher.id === parseInt(id))
  const navigate = useNavigate()
  return (
    <>
      <Navbar />
      <div className={styled.container}>
        <div className={styled.infoSide}>
          <img className={styled.img} src={teacher.gender === "Male" ?  maleAvatar : femaleAvatar } alt="" />
          <h3>{ teacher.gender === "Male" ? "Mr. " + teacher.name : "Ms. " + teacher.name }</h3>
          <h3>{teacher.gender}</h3>
          <h3>{new Date().getFullYear() - teacher.birthyear}</h3>
          <SubmitButton onClick={() => {
            navigate(-1)
          }} className={styled.goBackBtn}> &#x2190; Go Back </SubmitButton>
        </div>
        <div className={styled.commentSide}>
         <h3>Completed Lessons: </h3>
         <div className={styled.inputDiv}>
          <label>Leave a comment</label>
          <textarea className={styled.comment} type="text" id='comment' > </textarea>
          <SubmitButton >Submit</SubmitButton>
         </div>
        </div>
      </div>
    </>
  )
}

export default TeacherDetails