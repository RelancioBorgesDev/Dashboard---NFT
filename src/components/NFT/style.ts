import styled from "styled-components"
import {Heart, Verified} from '../../styles/Icons'



export const Container = styled.div`
  display: flex;
  gap: 2rem;

  @media (max-width: 765px){
    flex-direction: column;
    align-items: center;
  }
`


export const BoxNFTInfo = styled.div`

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


export const BoxNFT = styled.div`
  display: grid;
  grid-template-rows: 200px;
  grid-template-areas:
  "imagem"
  "descricao"
  ;
`

export const Imagem = styled.div`
  grid-area: imagem;
  grid-row: 1;

  > img {
    border-top-right-radius: .75rem;
    border-top-left-radius: .75rem;
  }
`

export const Descricao = styled.div`
  width: 100%;
  position: relative;
  grid-area: descricao;
  grid-row: 2/3;
  padding: 16px;
  background-color: #f5f5f5;
  border-bottom-right-radius: .75rem;
  border-bottom-left-radius: .75rem;

  > span img {
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  top: -3rem;
  right: 10px;
  border: 4px solid #fff;

  @media (max-width: 1300px){
    width: 50px;
    height: 50px;
    top: -2rem;
  }
}

`

export const VerifiedIcon = styled(Verified)`
  width:20px;
  height:20px;
  color: #469bf0;
  position: absolute;
  top: 0;
  right: 0;
`