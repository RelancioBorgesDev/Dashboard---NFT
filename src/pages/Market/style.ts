import styled from 'styled-components';

export const Container = styled.div`
  overflow-x: hidden;
  margin-left: 15%;
  padding: 1rem;

  @media (max-width: 475px){
    margin-left:0;
  }
`

export const HeaderMarket = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  @media (max-width: 765px){
    flex-direction: column;
    gap: 1rem;
    padding: 1rem;
  }

  > h1 {
    color: #a67cff;
  }

  > select {
    font-size: 1.2rem;
    width: 20%;
    border: 1px solid #a67cff;
    background-color: #a67cff;
    border-top-right-radius: .5rem;
    border-top-left-radius: .5rem;
    padding: .75rem;
    outline: 0;
    cursor: pointer;
    color: #f5f5f5;
    @media (max-width: 765px){
    width: 100%;
  }

    > option{
      cursor: pointer;
      padding: 1.5rem;
    }
  }
`

export const ContainerItems = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 0.5fr 0.5fr ;
  align-items: center;
  justify-items: center;
  grid-gap: 1rem;
  padding: .75rem;

  @media (max-width: 1300px){
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 875px){
    grid-template-columns: 1fr;
  }
`