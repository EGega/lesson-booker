import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navbar from "../../components/navbar/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './LessonCalendar.css'
import styled from "./LessonCalendar.module.css";
import { SubmitButton, ExitButton } from "../../components/styled/styledbuttons/buttons.js";
// import CalendarModule from "./calendarModule/CalendarModule";
const localizer = momentLocalizer(moment);
const LessonCalendar = () => {

  // state hook
  const [module, setModule] = useState(false)
  const [events, setEvents] = useState([
  ]);
  const [stName, setStName] = useState("")
  const [timeSlotInfo, setTimeSlotInfo] = useState()
  // 
  const lessons = ["Maths", "English", "German", "Programming", "Robotics", "Drama"]


  // Handlers
  const handleSelectSlot = (slotInfo) => {
    setModule(true)
    setTimeSlotInfo(slotInfo)
  };
  const exitHandler = () => {
    setModule(false)
  }
  // const submitHandler = (slotInfo) => {
  //   setModule(false)
  //   const newEvent = {
  //     title: stName,
  //     start: new Date(slotInfo.start),
  //     end: new Date (slotInfo.end),
  //   };
  //   setEvents([...events, newEvent]);
  //   console.log('Slot selected:', slotInfo);
  // }
  const submitHandler = (slotInfo) => {
    setModule(false);
  
    const start = moment(slotInfo.start).startOf('minute').add(Math.ceil(moment(slotInfo.start).minute() / 30) * 30, 'minutes');
    const end = moment(start).add(30, 'minutes');
  
    const newEvent = {
      title: stName,
      start: start.toDate(),
      end: end.toDate(),
      // lesson: lessons[lessonIndex],
      studentName: stName,
    };
  
    setEvents([...events, newEvent]);
    console.log('Slot selected:', slotInfo);
  };
  
  return (
    <>
    {/* <Navbar /> */}
   {  module && <div className={styled.module}>
            <input type="text" className={styled.nameInput} onChange={(e) => {
              setStName(e.target.value)
            }} placeholder='Enter Your Name' />
            <select name=""  id={styled.lessons}>
              {lessons.map((lesson, index) => {
                return <option  key={index} value={lesson}>{lesson}</option>
              })}
            </select>
            <SubmitButton onClick={submitHandler(timeSlotInfo)}>
              Submit
            </SubmitButton>
            <ExitButton onClick={exitHandler}>
              X
            </ExitButton>
    </div> }
    <div className={styled.app}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="day"
        events={events}
        selectable={true}
        onSelectSlot={handleSelectSlot}
        // remove the drag and drop
        onSelecting = {slot => false}
        step={30}
        timeslots={1}
        style={{ height: "100vh" }}
        formats={{
          timeGutterFormat: (date, culture, localizer) =>
            localizer.format(date, 'HH:mm', culture),
        }}
      />
    </div>
    </>
  );
}
export default LessonCalendar


