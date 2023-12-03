// import React, { useState } from "react";
// import { Calendar, momentLocalizer } from "react-big-calendar";
// import moment from "moment";
// import Navbar from "../../components/navbar/Navbar";
// import "react-big-calendar/lib/css/react-big-calendar.css";
// import './LessonCalendar.css'
// import styled from "./LessonCalendar.module.css";
// import { SubmitButton, ExitButton } from "../../components/styled/styledbuttons/buttons.js";
// // import CalendarModule from "./calendarModule/CalendarModule";
// const localizer = momentLocalizer(moment);
// const LessonCalendar = () => {

//   // state hook
//   const [module, setModule] = useState(false)
//   const [events, setEvents] = useState([
//   ]);
//   const [stName, setStName] = useState("")
//   const [timeSlotInfo, setTimeSlotInfo] = useState()
//   const lessons = ["Maths", "English", "German", "Programming", "Robotics", "Drama","Okul Öncesi Öğretmenliği"]
//   const [lessonSelected, setLessonSelected] = useState(lessons[0]);
//   // 


//   // Handlers
//   const handleSelectSlot = (slotInfo) => {
//     setModule(true)
//     setTimeSlotInfo(slotInfo)
//   };
//   const exitHandler = () => {
//     setModule(false)
//   }
//   const submitHandler = (slotInfo) => {
//     setModule(false);
  
//     const newEvent = {
//       title: `${stName} - ${lessonSelected}`,
//       start: slotInfo.start,
//       end: slotInfo.end,
//       lesson: lessonSelected,
//       studentName: stName,
      
//     };
  
//     setEvents([...events, newEvent]);
//     console.log('Slot selected:', slotInfo);
//   };
  
//   return (
//     <>
//     {/* <Navbar /> */}
//    {  module && <div className={styled.module}>
//             <input type="text" className={styled.nameInput} onChange={(e) => {
//               setStName(e.target.value)}} placeholder='Enter Your Name' />

//             <select name=""  id={styled.lessons} 
//             value={lessonSelected}
//             onChange={(e) => {
//               setLessonSelected(e.target.value)
//             }
//               } >
//               {lessons.map((lesson, index) => {
//                 return <option  key={index} value={lesson}>{lesson}</option>
//               })}
//             </select>
//             <SubmitButton onClick={ () => {
//               submitHandler(timeSlotInfo) }
//             }>
//               Submit
//             </SubmitButton>
//             <ExitButton onClick={exitHandler}>
//               X
//             </ExitButton>
//     </div> }
//     <div className={styled.app}>
//       <Calendar
//         localizer={localizer}
//         defaultDate={new Date()}
//         defaultView="week"
//         events={events}
//         selectable={true}
//         onSelectSlot={handleSelectSlot}
//         // remove the drag and drop
//         onSelecting = {slot => false}
//         step={30}
//         timeslots={1}
//         style={{ height: "100vh" }}
//         formats={{
//           timeGutterFormat: (date, culture, localizer) =>
//             localizer.format(date, 'HH:mm', culture),
//         }}
//       />
//     </div>
//     </>
//   );
// }
// export default LessonCalendar


import React, { useState } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import './LessonCalendar.css'
import styled from "./LessonCalendar.module.css";
import { SubmitButton, ExitButton } from "../../components/styled/styledbuttons/buttons.js";

const localizer = momentLocalizer(moment);

const LessonCalendar = () => {
  const [module, setModule] = useState(false);
  const [events, setEvents] = useState([]);
  const [stName, setStName] = useState("");
  const [timeSlotInfo, setTimeSlotInfo] = useState();
  const [lessons] = useState([
    "Maths", "English", "German", "Programming", "Robotics", "Drama",
  ]);
  const [lessonSelected, setLessonSelected] = useState(lessons[0]);

  const handleSelectSlot = (slotInfo) => {
    setModule(true);
    setTimeSlotInfo(slotInfo);
  };

  const exitHandler = () => {
    setModule(false);
  };

  const submitHandler = () => {
    setModule(false);

    const newEvent = {
      title: `${stName} - ${lessonSelected}`,
      start: timeSlotInfo.start,
      end: timeSlotInfo.end,
      lesson: lessonSelected,
      studentName: stName,
    };

    setEvents([...events, newEvent]);
  };

  const removeEvent = (eventId) => {
    const updatedEvents = events.filter((event, index) => index !== eventId);
    console.log(eventId);
    console.log(events);
    setEvents(updatedEvents);
  };

  const CustomEvent = ({ event }) => (
    <div>
      <strong>{event.title}</strong>
      <button onClick={() => removeEvent(event.id)}>Remove</button>
    </div>
  );

  return (
    <>
      {module && (
        <div className={styled.module}>
          <input
            type="text"
            className={styled.nameInput}
            onChange={(e) => setStName(e.target.value)}
            placeholder="Enter Your Name"
          />

          <select
            name=""
            id={styled.lessons}
            value={lessonSelected}
            onChange={(e) => setLessonSelected(e.target.value)}
          >
            {lessons.map((lesson, index) => (
              <option key={index} value={lesson}>
                {lesson}
              </option>
            ))}
          </select>

          <SubmitButton onClick={submitHandler}>Submit</SubmitButton>
          <ExitButton onClick={exitHandler}>X</ExitButton>
        </div>
      )}

      <div className={styled.app}>
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          defaultView="day"
          events={events.map((event, index) => ({ ...event, id: index }))}
          selectable={true}
          onSelectSlot={handleSelectSlot}
          onSelecting={(slot) => false}
          step={30}
          timeslots={1}
          style={{ height: "100vh" }}
          formats={{
            timeGutterFormat: (date, culture, localizer) =>
              localizer.format(date, "HH:mm", culture),
          }}
          components={{
            event: CustomEvent,
          }}
        />
      </div>
    </>
  );
};

export default LessonCalendar;
