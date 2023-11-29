import React from 'react'
import styled from "./CalendarModule.module.css"
const CalendarModule = ({module, setModule}) => {
   
  const submithandler = () => {
    setModule(false)
  }


  return (
    <div className={styled.container}>
            <input type="text" onKeyDown={submithandler} placeholder='Enter Your Lesson' />
    </div>
  )
}

export default CalendarModule