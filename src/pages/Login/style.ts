import styled from 'styled-components';
import {Google} from '../../styles/Icons'

export const Container = styled.div`
  display: grid;
  grid-template-columns: 50%;
  grid-template-areas:
  "imagem login_container"
  ;
  height: 100vh;
  overflow: hidden;
  background-color: #1d1254;

  @media (max-width:975px){
    background-image: linear-gradient(to top, #17191a, #041c2a, #001d3c, #001b4b, #1d1254);
    display: flex;
    > div img {
      display: none;
    }
  }

`
export const LoginContainer = styled.div`
  width: 60%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 1rem;


  @media (max-width: 768px) {
    width: 100%;
  }

`

export const Titulo = styled.h1`
  width: 100%;
  text-align: center;
  color: #f5f5f5;
  font-weight: bold;
  border-bottom: 1px solid #fff;
  padding: 1rem;
`
export const LoginGoogleBtn = styled.button`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  border: 4px solid #2f1655;
  background-color: #17191a;
  color: #f5f5f5;
  font-weight: lighter;
  padding: 1rem;
  cursor: pointer;

`
export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .5rem;

  > label{
    color: #f5f5f5;
    font-weight: bold;
  }
  > input {
    width: 100%;
    background-color: #17191a;
    color: #f5f5f5;
    padding: 1rem;
    outline: 0;
  }

`

export const CheckBoxContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  font-weight: 500;

  > div{
    display: flex;
    gap: .5rem;
  }

  > a {
    color: #563864;
  }

`

export const LoginBtn = styled.button`
  width: 100%;
  border: none;
  border-radius: .2rem;
  font-size: 1.4rem;
  color: #fff;
  font-weight: bold;
  padding: 1rem;
  background-color: #6720ff;

`

export const HaveAccount = styled.span`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .2rem;
  color: #fff;
  font-weight: 500;
  > a {
    color: #563864;
  }
`

export const GoogleIcon = styled(Google)`
  width:20px;
  height:20px;
`