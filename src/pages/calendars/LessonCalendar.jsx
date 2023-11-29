import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import Navbar from "../../components/navbar/Navbar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import styled from "./LessonCalendar.module.css";
const localizer = momentLocalizer(moment);
const LessonCalendar = () => {
  const [events, setEvents] = useState([
    {
      start: new Date(2023, 10, 28),
      end: new Date(2023, 10, 28),
      title: "Today",
    },
    {
      start: new Date(2023, 10, 29),
      end: new Date(2023, 10, 29),
      title: "Tomorrow",
    },
  ]);
  const handleSelectSlot = (slotInfo) => {
    const newEvent = {
      title: 'New Event',
      start: slotInfo.start,
      end: slotInfo.end,
    };
    setEvents([...events, newEvent]);
    console.log('Slot selected:', slotInfo);
  };
  return (
    <>
    {/* <Navbar /> */}
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


