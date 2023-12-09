import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { teachers } from '../../data/teachersList'
import styled from './Feedback.module.css'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import femaleAvatar from "../../assets/femaleAvatar.png"
import maleAvatar from "../../assets/maleAvatar.jpg"

const Feedback = () => {

  return (
    <>
    <Navbar />
    <div className={styled.container}>
       {teachers?.map((teacher, index) => {
        const {name, birthyear, gender, rating } = teacher
       return (
           <div className={styled.card} key={index}>
            <img src={gender === "Male" ? maleAvatar : femaleAvatar } alt={name} className={styled.img} />
              <h3>{name}</h3>
              <h3>{new Date().getFullYear() - birthyear}</h3>
              <h3>{gender}</h3>
              <h3>Rate Your Teacher</h3>
              <h3><IoIosStarOutline className={styled.emptyStar}/><IoIosStarOutline className={styled.emptyStar}/><IoIosStarOutline className={styled.emptyStar}/><IoIosStarOutline className={styled.emptyStar}/><IoIosStarOutline className={styled.emptyStar}/></h3>
           </div>
           )
       })}
    </div>
    </>
  )
}

export default Feedback