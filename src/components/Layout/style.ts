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
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`




/* SideBox */
export const Side = styled.div`
  grid-area: side;
  box-shadow: -2px 10px 11px 1px #000000;
  height: fit-content;
  border-radius: .75rem;
  margin-top: 5rem;


`


export const Cards = styled.div`
  border-radius: .75rem;
  grid-area: cards;
  padding: 16px;
  box-shadow: -2px 10px 11px 1px #000000;
`

