import styled from "styled-components";
import {Heart} from '../../styles/Icons'

export const LayoutContainer = styled.div`
  width: calc(100% - 15%);
  height: 100vh;
  margin-left: 15%;
  background-color: #1e213c;
  padding: 16px;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  padding: 16px;
`

export const Grid = styled.div`
  padding: 1rem;
  display: grid;
  grid-template-rows: 60% calc(100% - 60%);
  grid-template-columns: 65% calc(100% - 65%);
  grid-template-areas:
    "principal side"
    "cards cards"
  ;
  grid-gap: 1rem;
  height: calc(100%  - 100px);
`
/* Principal Box */
export const Principal = styled.div`
  grid-area: principal;
  border-radius: .75rem;
  padding: 16px;
  box-shadow: -2px 10px 11px 1px #000000;
  background: linear-gradient(to right, #315468, #2c2e4a);
  display: flex;
  align-items: center;
  justify-content: space-around;
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

/* SideBox */
export const Side = styled.div`
  border-radius: .75rem;
  grid-area: side;
  box-shadow: -2px 10px 11px 1px #000000;
  height: auto;

  > video {
    width: 100%;
    height: auto;
  }
`


export const Cards = styled.div`
  border-radius: .75rem;
  grid-area: cards;
  padding: 16px;
  box-shadow: -2px 10px 11px 1px #000000;
`

