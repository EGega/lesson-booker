import{ useState } from 'react'
import eneaPic from "../../../../assets/enea.jpg"
import styled from './ProfileEditor.module.css'
const ProfileEditor = () => {
  
const [teacherInfo, setTeacherInfo] = useState({
  name: "Name:",
  profession: "Profession:",
  age: "Age:",
  country: "Country:",
  certifications: "Certifications:",
  introVideo: ""
})

const [editing, setEditing] = useState(false)
  return (
    <>
    {!editing ? 
    <div>
     <img src={eneaPic}  className={styled.image} alt="" />
       <h3>{teacherInfo.name}</h3>
       <h3>{teacherInfo.profession}</h3>
       <h3>{teacherInfo.age}</h3>
       <h3>{teacherInfo.country}</h3>
       <h3>{teacherInfo.certifications}</h3>
       <a className={styled.videoLink} href={teacherInfo.introVideo} target='blank'>Intro Video</a>
       <button onClick={() => {
      setEditing(true)
     }} className={styled.editProfile}>Edit Profile</button>
     </div> : 
     <form className={styled.form} action="">
      <button className={styled.closeBtn} onClick={() => {
      setEditing(false)
     }}>X</button>
      <input type="text" onChange={(e) => {
        setTeacherInfo({...teacherInfo, name: e.target.value })
      }} placeholder='Your name' />
      <input type="text" placeholder='Profession' onChange={(e) => {
        setTeacherInfo({...teacherInfo, profession: e.target.value })
      }} />
      <input type="number" placeholder='Age' onChange={(e) => {
        setTeacherInfo({...teacherInfo, age: e.target.value })
      }} />
      <input type="text" placeholder='Country' onChange={(e) => {
        setTeacherInfo({...teacherInfo, country: e.target.value })
      }} />
      <input type="text" placeholder='Certificates' onChange={(e) => {
        setTeacherInfo({...teacherInfo, certifications: e.target.value })
      }} />
      <input type="text" placeholder='Video Link' onChange={(e) => {
        setTeacherInfo({...teacherInfo, introVideo: e.target.value })
      }} />
     </form>}
       </>
  )
}

export default ProfileEditor