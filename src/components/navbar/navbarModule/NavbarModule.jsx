import React from 'react'
import styled from "./NavbarModule.module.css"
const NavbarModule = () => {
  return (
    <>
      <div className={styled.container}>
        <ul>
            <li>Profile</li>
            <li>Settings</li>
            <li>Contact</li>
            <li>Log Out</li>
        </ul>
      </div>
    </>
  )
}

export default NavbarModule