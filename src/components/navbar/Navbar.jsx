import React from 'react'
import eneaPic from "../../assets/enea.jpg"
import { NavbarStyle } from '../styled/navbarStyled/navbar'
import { Link } from 'react-router-dom'
import styles from "./Navbar.module.css"
import { LoginBtn } from '../styled/LoginStyle.styled'

import {useState} from 'react'
import NavbarModule from './navbarModule/NavbarModule'
const Navbar = () => {

  // Part of my previous toggler
  // const [navbarModule, setNavbarModule] = useState(1)
  const [navbarModuleVisibility, setNavbarModuleVisibility] = useState(false)
  return (
    <>
    <NavbarStyle>
     <div className={styles.linkDiv}>
      <li><Link to="/profile">Profile</Link></li>
      <li><Link to="/">Lessons</Link></li>
      <li><Link to="/calendar">Calendar</Link></li>
     </div>
     <div className={styles.imgDiv}>
      <LoginBtn><Link to="/">Home</Link></LoginBtn>
      <Link to="/profile">Teacher Enea</Link>
      <img className={styles.avatarImage} onClick={() => {
        setNavbarModuleVisibility((prevValue) => !prevValue)
      }} src={eneaPic} alt="username will come here" />
     </div>
      {/* The code below is just another way to create an "effective toggler that I just came up with"  */}
      {/* { navbarModule % 2 === 0 ? <NavbarModule className={styles.navbarModule} /> : null} */}

      {navbarModuleVisibility && <NavbarModule className={styles.navbarModule} />}

    </NavbarStyle>
    </>

  )
}

export default Navbar