import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { teachers } from '../../data/teachersList'
import styled from './Feedback.module.css'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import femaleAvatar from "../../assets/femaleAvatar.png"
import maleAvatar from "../../assets/maleAvatar.jpg"
import { useState } from 'react';
const Feedback = () => {
const [rate, setRate] = useState(5)
const [num, setNum] = useState(1)
const [sum, setSum] = useState(0)
const generateStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(<IoIosStar key={i} className={styled.fullStar} onClick={() => handleStar(i)} />);
    } else {
      stars.push(<IoIosStarOutline key={i} className={styled.emptyStar} />);
    }
  }
  return stars;
};

const handleStar = (index) =>  {
  setSum((prev) => prev + index)
  console.log("The sum is", sum);
  setNum((prevNum) => prevNum + 1)
  console.log("The num is", num);
  setRate((prevRate) => (sum + prevRate) / num);
  console.log("The index is", index);
  console.log("The rate is", rate);
}

  return (
    <>
    <Navbar />
    <div className={styled.container}>
       {teachers?.map((teacher, index) => {
        const {name, birthyear, gender, rating, id } = teacher
       return (
           <div className={styled.card} key={id}>
            <img src={gender === "Male" ? maleAvatar : femaleAvatar } alt={name} className={styled.img} />
              <h3>{name}</h3>
              <h3>{new Date().getFullYear() - birthyear}</h3>
              <h3>{gender}</h3>
              <h3>Rate Your Teacher</h3>
              <h3>{generateStars(rating)}</h3>
           </div>
           )
       })}
    </div>
    </>
  )
}

export default Feedback

