import React from 'react'
import { FormStyle, LoginContainer, InputStyle, LoginInnerContainer, LoginBtn, NotAnUser } from '../../components/styled/LoginStyle.styled'
import {TbUserCircle} from "react-icons/tb"
import {RiLockPasswordFill} from "react-icons/ri"
import { loginIcons } from '../../components/styled/iconStylers'
const teacherLogin = ({setLogin}) => {
  return (
    <LoginContainer >
      <LoginInnerContainer>
        <FormStyle action='submit'>
        <h3>Teacher Login</h3>
          <InputStyle>
          <TbUserCircle style={loginIcons} />
          <input type="text" id='email' placeholder='Type your email'/>
          </InputStyle>
          <InputStyle>
          <RiLockPasswordFill style={loginIcons}/>
          <input type="password" id='password'  placeholder='Type your password' />
          </InputStyle>
          <LoginBtn> Login </LoginBtn>
        </FormStyle>
        {/* Not a user */}
        <NotAnUser >
         <div>
          <p>Not a user?</p>
          <LoginBtn> Register Here </LoginBtn>
         </div>
         <div>
          <p>Are You a Student?</p>
          <LoginBtn onClick={() => {
            setLogin("student")
          }}> Login Here </LoginBtn>
         </div>
        </NotAnUser>
      </LoginInnerContainer> 
    </LoginContainer >
  )
}

export default teacherLogin