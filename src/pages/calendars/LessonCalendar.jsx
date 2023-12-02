import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navbar from "../../components/navbar/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './LessonCalendar.css'
import styled from "./LessonCalendar.module.css";
import { SubmitButton } from "../../components/styled/styledbuttons/submitButton.js";
// import CalendarModule from "./calendarModule/CalendarModule";
const localizer = momentLocalizer(moment);
const LessonCalendar = () => {

  // state hook
  const [module, setModule] = useState(false)
  const [events, setEvents] = useState([
  ]);

  // 
  const lessons = ["Maths", "English", "German", "Programming", "Robotics", "Drama"]


  // Handlers
  const handleSelectSlot = (slotInfo) => {
    setModule(true)
    const newEvent = {
      title: 'New Event',
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setEvents([...events, newEvent]);
    console.log('Slot selected:', slotInfo);
  };

  const submithandler = (e) => {
    if(e.key === 'Enter')
    setModule(false)
  }

  return (
    <>
    {/* <Navbar /> */}
   {  module && <div className={styled.module}>
            <input type="text" className={styled.nameInput} onKeyDown={submithandler} onChange={() => {}} placeholder='Enter Your Name' />
            <select name=""  id={styled.lessons}>
              {lessons.map((lesson, index) => {
                return <option  key={index} value={lesson}>{lesson}</option>
              })}
            </select>
            <SubmitButton>
              Submit
            </SubmitButton>
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


