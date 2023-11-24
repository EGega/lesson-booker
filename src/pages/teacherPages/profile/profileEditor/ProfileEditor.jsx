import React from 'react'
import eneaPic from "../../../../assets/enea.jpg"
const ProfileEditor = () => {
  return (
    <>
            <img src={eneaPic}  className={styled.image} alt="" />
            <h3 className={styled.genInfo}>Enea Gega</h3>
            <h3 className={styled.genInfo}>English Teacher</h3>
            <h3 className={styled.genInfo}>29 Years Old</h3>
            <h3 className={styled.genInfo}>Albania</h3>
            <h3 className={styled.genInfo}>TOEFL</h3></>
  )
}

export default ProfileEditor