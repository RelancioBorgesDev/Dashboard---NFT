import styled from "styled-components"
import {Verified} from '../../styles/Icons'

export const BoxNFT = styled.div`
  width: fit-content;
  border-radius: .75rem;
  display: grid;
  grid-template-rows: 200px;
  grid-template-areas:
  "imagem"
  "descricao"
  ;
`

export const Imagem = styled.div`
  grid-area: imagem;
  > img {
    width: 20rem;
    border-top-right-radius: .75rem;
    border-top-left-radius: .75rem;
  }
`

export const Descricao = styled.div`
  grid-area: descricao;
  position: relative;
  width: 20rem;
  background-color: #2d2e4b;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  padding: 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;

    > span{
      color: #f5f5f5;
      font-weight: 500;
    }
  }
`
