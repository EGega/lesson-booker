import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import { teachers } from '../../data/teachersList'
import styled from './Feedback.module.css'
import { IoIosStar, IoIosStarHalf, IoIosStarOutline } from 'react-icons/io';
import femaleAvatar from "../../assets/femaleAvatar.png"
import maleAvatar from "../../assets/maleAvatar.jpg"
import { useState, useEffect } from 'react';
import Empty from './Empty';
const Feedback = () => {
const [num, setNum] = useState(0)
const [sum, setSum] = useState(0)
const [rate, setRate] = useState(0)
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
  setNum((prevNum) => prevNum + 1)
  console.log("The num is", num);
  console.log("The sum is", sum);
//   console.log("The rate is", rate);
  setRate(sum / num)
}

let theRate = Math.round((sum / num))



// useEffect(() => {
//   // setRate((prevRate) => (sum + prevRate) / num);
//   console.log("The num is", num);
//   console.log("The sum is", sum);
//   console.log("The rate is", rate);

// }, [ num, sum,  ]);

  return (
    <>
    <Navbar />
    {/* <Empty /> */}
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
              <h4>The teachers rate is equal to {sum} / {num} = {theRate}</h4>
              <h3>{generateStars(rating)}</h3>
           </div>
           )
       })}
    </div>
    </>
  )
}

export default Feedback

