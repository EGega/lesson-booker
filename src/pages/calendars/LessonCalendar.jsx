import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navbar from "../../components/navbar/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './LessonCalendar.css'
import styled from "./LessonCalendar.module.css";
// import CalendarModule from "./calendarModule/CalendarModule";
const localizer = momentLocalizer(moment);
const LessonCalendar = () => {
  const [module, setModule] = useState(false)
  const [events, setEvents] = useState([
  ]);


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

  const submithandler = () => {
    setModule(false)
  }

  return (
    <>
    {/* <Navbar /> */}
   {  module && <div className={styled.module}>
            <input type="text" onKeyDown={submithandler} onChange={() => {}} placeholder='Enter Your Lesson' />
    </div> }
    <div className={styled.app}>
      <Calendar
        localizer={localizer}
        defaultDate={new Date()}
        defaultView="week"
        events={events}
        selectable={true}
        onSelectSlot={handleSelectSlot}
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


