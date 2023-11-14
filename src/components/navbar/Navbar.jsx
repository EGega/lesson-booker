import React from 'react'
import eneaPic from "../../assets/enea.jpg"
import { NavbarStyle } from '../styled/navbarStyled/navbar'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { LoginBtn } from '../styled/LoginStyle.styled'
const Navbar = () => {
  return (
    <NavbarStyle>
     <div className={styles.linkDiv}>
      <li><Link to="/">Profile</Link></li>
      <li><Link to="/">Lessons</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
     </div>
     <div className={styles.imgDiv}>
      <LoginBtn><Link to="/login">Log Out</Link></LoginBtn>
      <Link to="/">Teacher Enea</Link>
      <img className={styles.avatarImage} src={eneaPic} alt="username will come here" />
     </div>
    </NavbarStyle>

  )
}

export default Navbar