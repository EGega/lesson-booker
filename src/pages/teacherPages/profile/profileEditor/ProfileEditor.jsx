import{ useState } from 'react'
import eneaPic from "../../../../assets/enea.jpg"
import styled from './ProfileEditor.module.css'
const ProfileEditor = () => {

const [teacherInfo, setTeacherInfo] = useState({
  name: "",
  profession: "",
  age: "",
  country: "",
  certifications: ""
})
  return (
    <>
       <img src={eneaPic}  className={styled.image} alt="" />
       <h3>Enea Gega</h3>
       <h3>English Teacher</h3>
       <h3>29 Years Old</h3>
       <h3>Albania</h3>
       <h3>TOEFL</h3>
       <a href="https://www.google.com" target='blank'>Intro Video</a>
       </>
  )
}

export default ProfileEditor