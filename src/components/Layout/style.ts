import styled from "styled-components";
import {Heart} from '../../styles/Icons'

export const LayoutContainer = styled.div`
  width: calc(100% - 15%);
  height: 100vh;
  margin-left: 15%;
`

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
`

export const Grid = styled.div`
  width: 100%;
  padding: 1rem;
  display: grid;
  grid-template-rows: 45% calc(100% - 60%);
  grid-template-columns: 65% calc(100% - 65%);
  grid-template-areas:
    "principal side"
    "cards cards"
  ;
  grid-gap: 1rem;
  height: calc(100%  - 100px);

  @media (max-width: 1050px) {
    display: grid;
    grid-template-rows: 50%;
    grid-template-columns: 100%;
    grid-template-areas:
    "principal"
    "side"
    "cards"
    ;
  }

  @media (max-width: 1024px){
   display: flex;
   flex-direction: column;
  }
`
/* Principal Box */
export const Principal = styled.div`
  width: 100%;

  grid-area: principal;
  border-radius: .75rem;
  padding: 16px;

  background-image: linear-gradient(to right bottom, #315668, #2d2e4b, #2d2e4b, #2d2e4b);
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px){
    height: fit-content;
  }
`




/* SideBox */
export const Side = styled.div`
  grid-area: side;
  height: fit-content;
  border-radius: .75rem;
`


export const Cards = styled.div`
  border-radius: .75rem;
  height: fit-content;
  grid-area: cards;
  padding: 16px;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    > h1{
      color: #a67cff;
      font-weight: bold;
    }

    > button{
      background-color: #a67cff;
      padding: .75rem;
      border-radius: .5rem;
      color: #f5f5f5;
      font-weight: bold;
      font-size: 1.2rem;
    }
  }

  > div {
    display: grid;
    grid-template-columns: repeat(4, 0.5fr);
    align-items: center;
    justify-items: center;
    grid-gap: .5rem;

    @media (max-width: 1440px){
      grid-template-columns: repeat(2, 0.5fr);
      align-items: center;
      justify-items: center;
    }

    @media (max-width: 875px){
      display: flex;
      flex-direction: column;
      gap: 1rem;
    }

  }
`

