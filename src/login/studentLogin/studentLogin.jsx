import React from 'react'
import { FormStyle, LoginContainer, InputStyle } from '../../components/styled/LoginStyle.styled'
import {TbUserCircle} from "react-icons/tb"
import {RiLockPasswordFill} from "react-icons/ri"
import { loginIcons } from '../../components/styled/iconStylers'
const StudentLogin = () => {
  return (
    <LoginContainer > 
      <FormStyle action='submit'>
         <h3>Log in</h3>
        <InputStyle>
        <TbUserCircle style={loginIcons} />
        <input type="text" id='email' placeholder='Type your email'/>
        </InputStyle>

        <InputStyle>
        <RiLockPasswordFill style={loginIcons}/>
        <input type="password" id='password'  placeholder='Type your password' />
        </InputStyle>
      </FormStyle>
    </LoginContainer >
    
  )
}

export default StudentLogin