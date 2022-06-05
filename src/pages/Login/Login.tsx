import React from 'react'
import { Container, InputContainer, GoogleIcon, LoginContainer, LoginGoogleBtn, Titulo, CheckBoxContainer, LoginBtn, HaveAccount } from './style'
import Wallpaper from '../../assets/nftWallpaper.jpg'
export default function Login() {
  return (
    <Container>
      <div>
        <img src={Wallpaper} alt="Login Image" width="100%" height="100%"/>
      </div>
      <LoginContainer>
        <Titulo>Login</Titulo>
        <LoginGoogleBtn>
          <GoogleIcon/>
          Sign in with Google
          </LoginGoogleBtn>
        <InputContainer>
          <label htmlFor="">Email:</label>
          <input type="email" placeholder="Type your email...."/>
        </InputContainer>
        <InputContainer>
          <label htmlFor="">Password:</label>
          <input type="password" placeholder="Type your password...."/>
        </InputContainer>

        <CheckBoxContainer>
          <div>
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <a href="#">Forgot Password ?</a>
        </CheckBoxContainer>

        <LoginBtn>Log In</LoginBtn>
          <HaveAccount>Don't have an account?<a href="#">Sign UP</a></HaveAccount>
      </LoginContainer>
    </Container>
  )
}
