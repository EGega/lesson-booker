import React from 'react'
import Navbar from '../../../../components/navbar/Navbar'
import styled from './StudentClasses.module.css'
import bookNow from "../../../../assets/classes/bookNow.jpg"
import buyBooks from "../../../../assets/classes/buyBooks.png"
import subscribe from "../../../../assets/classes/subscribe.jpg"
import refer from  "../../../../assets/classes/refer.jpg"
import { ClickButton } from '../../../../components/styled/styledbuttons/buttons'
import { BsFillMouse2Fill } from "react-icons/bs";
const StudentClasses = () => {
  return (
     <>
     <Navbar />
      <div className={styled.container}>
        <div className={`${styled.bookAlesson} ${styled.img}`}>
          <img src={bookNow} alt="BookNow" />
          <ClickButton>Book a Lesson <BsFillMouse2Fill /> </ClickButton>
        </div>
        <div className={ `${styled.subscribe} ${styled.img}` }>
        <img src={subscribe} alt="Subscribe" />
          <ClickButton>Full Time Courses <BsFillMouse2Fill /> </ClickButton>
        </div>
        <div className={`${styled.buyBook} ${styled.img}`}>
          <img src={buyBooks} alt="BuyBooks" />
          <ClickButton>Buy Books <BsFillMouse2Fill /> </ClickButton>
        </div>
        <div className={`${styled.refer} ${styled.img}`}>
        <img src={refer} alt="refer" />
        <ClickButton>Refer & Earn <BsFillMouse2Fill /> </ClickButton>
        </div>
      </div>
     </>
  )
}

export default StudentClasses