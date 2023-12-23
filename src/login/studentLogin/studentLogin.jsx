
import { FormStyle, LoginContainer, InputStyle, LoginInnerContainer, LoginBtn, NotAnUser } from '../../components/styled/LoginStyle.styled'
import {TbUserCircle} from "react-icons/tb"
import {RiLockPasswordFill} from "react-icons/ri"
import { loginIcons } from '../../components/styled/iconStylers'
import { useNavigate } from 'react-router-dom'
import { loginActions } from '../../store'
import { useDispatch } from 'react-redux'
const StudentLogin = ({setLogin}) => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // loginhandler
  const loginHandler = () => {
    dispatch(loginActions.loginToggler()) 
    navigate('/')
  }
  return (
    <LoginContainer >
      <LoginInnerContainer>
        <FormStyle>
        <h3> Student Login</h3>
          <InputStyle>
          <TbUserCircle style={loginIcons} />
          <input type="text" id='email' placeholder='Type your email'/>
          </InputStyle>
          <InputStyle>
          <RiLockPasswordFill style={loginIcons}/>
          <input type="password" id='password'  placeholder='Type your password' />
          </InputStyle>
          <LoginBtn onClick={loginHandler}> Login </LoginBtn>
        </FormStyle>
        {/* Not a user */}
        <NotAnUser >
         <div>
          <p>Not a User?</p>
          <LoginBtn onClick={(e) => {
            e.preventDefault()
            navigate('/register')
          }}> Register Here </LoginBtn>
         </div>
         <div>
          <p>Are You a Teacher?</p>
          <LoginBtn onClick={() => {
            setLogin("teacher")
          }}> Login Here </LoginBtn>
         </div>
        </NotAnUser>
      </LoginInnerContainer> 
    </LoginContainer >
    
  )
}

export default StudentLogin