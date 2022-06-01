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
    border-top-right-radius: .75rem;
    border-top-left-radius: .75rem;
  }
`

export const Descricao = styled.div`
  grid-area: descricao;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #2d2e4b;
  border-bottom-right-radius: 1em;
  border-bottom-left-radius: 1em;
  padding: 16px;

  display: grid;
    grid-template-rows: 50px 50px;
    grid-template-areas:
    "nome",
    "item_nome",
    "preco_atual"
    ;
    color: #f5f5f5;
    font-weight: bold;

> h3{
  grid-area: nome;
  grid-row: 1;
  grid-column: 1/2;
}

> h2 {
  font-size: 1rem;
  grid-area: item_nome;
  grid-row: 2;
  grid-column: 1/2;
}

> span{
  grid-area: preco_atual;
  grid-row: 3;
  grid-column: 1/2;

}
> span img {
  position: absolute;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  top: -1rem;
  right: 10px;
  border: 4px solid #2d2e4b;
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