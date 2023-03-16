import styled from "styled-components"
import loginBG from "../../assets/login.jpg"
export const LoginContainer = styled.div `
width: 100vw;
max-width: 100%;
padding: 0 20px;
margin: 0 auto;
background: url(${loginBG});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
height: 100vh;
font-size: 30px;
display: flex;
justify-content: right;
align-items: center;
`

export const LoginBtn = styled.button `
color: #fff;
background-color: #1d7bff;
padding: 15px;
border: none;
outline: none;
border-radius: 5px;
`

export const FormStyle = styled.form `
 height: 80%;
 background-color: #fff;
 width: 40%;
 border-radius: 5px;
 box-shadow: 5px 5px 5px 5px #00FFFF22;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 align-items: center;
`

export const InputStyle = styled.div `
display: flex;
justify-content: center;
gap: 10px;
border-bottom: 2px solid #00FFFF;
input {
  width: 60%;
  border: none;
  outline: none;
  font-size: 1rem;
}
`
// It is possible to create instances of this button