import styled from "styled-components"
import {Heart} from '../../styles/Icons'


export const Container = styled.div`
  display: flex;
  gap: 1rem;
`

export const BoxNFT = styled.div`
width: auto;
height: auto;
display: flex;
flex-direction: column;
border-radius: .75rem;

> img {
  width: 400px;
  height: 300px;
  border-top-right-radius: 1em;
  border-top-left-radius: 1em;


  border-bottom: 1px solid white;
}
> div{
  position: relative;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  padding: 1rem;
}
> div span img {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: -3rem;
  right: 10px;
}
transition: all 0.2s ease;
&:hover{
  transform: scale(1.1);
  cursor: pointer;

}

`

export const BoxNFTInfo = styled.div`
  width: auto;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-align: center;
  padding: 0.5rem;

  > h1 {
    color: #FFF;
    font-weight: bold;
  }

  > div:nth-child(2) {
    display: flex;
    align-items: center;
    gap: 1rem;
    color: #fff;
    border-radius: .75rem;
    background-color: #6b6e91;
    padding: 1rem;
  }

  > div:nth-child(3){
    display: flex;
    gap: 1rem;
  }
  > div:nth-child(3) button{
    border: 1px solid #6b6e91;
    padding: .5rem;
    border-radius: .5rem;
    cursor: pointer;
  }

  > div:nth-child(3) button:nth-child(2){
    color: #fff;
    font-size: 1.2rem;
  }

`

export const HeartIcon = styled(Heart)`
  width:20px;
  height:20px;
  color: #6b6e91;
`