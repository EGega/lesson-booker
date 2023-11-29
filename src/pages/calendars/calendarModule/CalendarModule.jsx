import React from 'react'
import styled from "./CalendarModule.module.css"
const CalendarModule = ({module, setModule}) => {
  return (
    <div className={styled.container}>
            <input type="text" placeholder='Enter Your Lesson' />
    </div>
  )
}

export default CalendarModule