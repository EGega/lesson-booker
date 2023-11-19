import eneaPic from "../../../assets/enea.jpg"
import styled from "./Profile.module.css"
import Navbar from "../../../components/navbar/Navbar"
const Profile = () => {
  return (
    <>
    <Navbar />
    <div className={styled.container}>
         <div className={styled.personalInfo}>
         <img src={eneaPic}  className={styled.image} alt="" />
          <h2 className={styled.genInfo}>Enea Gega</h2>
          <h2 className={styled.genInfo}>English Teacher</h2>
          <h2 className={styled.genInfo}>29 Years Old</h2>
          <h2 className={styled.genInfo}>Albania</h2>
          <h2 className={styled.genInfo}>TOEFL</h2>
         </div>
    </div>
    </>
  )
}

export default Profile