import React from "react";
import { BoxNFT, Descricao, Imagem, VerifiedIcon } from "./style";

interface ICard {
  imagem_nft: string;
  dono: string;
  imagem_dono: string;
}
export default function Card({ imagem_nft, dono, imagem_dono }: ICard) {
  return (
    <BoxNFT>
      <Imagem>
        <img
          src={imagem_nft}
          alt="NFT de macaco"
          width="300px"
          height="200px"
        />
      </Imagem>
      <Descricao>
        <h3>{dono}</h3>
        <h2>Nome da Obra</h2>
        <span>
          <img src={imagem_dono} alt="Neymar" />
          <VerifiedIcon />
        </span>
        <span>
          <label htmlFor="">Preço Atual:</label>
          <h2>0.70 ETH</h2>
        </span>
      </Descricao>
    </BoxNFT>
  );
}
