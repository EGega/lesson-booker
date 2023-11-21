import eneaPic from "../../../assets/enea.jpg"
import styled from "./Profile.module.css"
import Navbar from "../../../components/navbar/Navbar"
import Toefl from "../../../assets/certificates/TOEFL_Certificate.png"
import teachingCert from "../../../assets/certificates/English_Teacher_Certificate.png"
const Profile = () => {
  return (
    <>
    <Navbar />
    <div className={styled.container}>
         <div className={styled.personalInfo}>
          <div className={styled.leftSide}>
          <img src={eneaPic}  className={styled.image} alt="" />
          <h3 className={styled.genInfo}>Enea Gega</h3>
          <h3 className={styled.genInfo}>English Teacher</h3>
          <h3 className={styled.genInfo}>29 Years Old</h3>
          <h3 className={styled.genInfo}>Albania</h3>
          <h3 className={styled.genInfo}>TOEFL</h3>
          </div>
          <div className={styled.middleSide}>
            <h2>Certificates</h2>
            <img src={Toefl} alt="" />
            <img src={teachingCert} alt="" />
          </div>
          <div className={styled.rightSide}>
            <h2>General Info</h2>
            <div>
            <h3>Completed Lessons: </h3>
            <h3>Awaiting Lessons</h3>
            <h3>Students</h3>
            <h4>Today's Lessons</h4>
            </div>
          </div>
         </div>
    </div>
    </>
  )
}

export default Profile