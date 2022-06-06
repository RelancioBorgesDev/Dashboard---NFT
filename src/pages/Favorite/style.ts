import styled from "styled-components";

export const Container = styled.div`
  margin-left: 15%;
  height: 100vh;
  padding: 1rem;
  @media (max-width: 475px){
    margin-left: 0;
    padding: 1rem;
  }

  > h1 {
    color: #a67cff;
  }
`

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4,0.5fr) ;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  padding: .75rem;

  @media (max-width: 1600px){
    grid-template-columns: repeat(3,0.3fr) ;

  }

`