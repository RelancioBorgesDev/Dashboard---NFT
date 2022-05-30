import styled from "styled-components";

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
  border: 1px solid red;
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
export const Principal = styled.div`
  border: 1px solid red;
  grid-area: principal;
  border-radius: .75rem;
  padding: 16px;
`
export const Side = styled.div`
border: 1px solid yellow;
  border-radius: .75rem;
  grid-area: side;
  padding: 16px;
`
export const Cards = styled.div`
  border: 1px solid blue;
  border-radius: .75rem;
  grid-area: cards;
  padding: 16px;
`
