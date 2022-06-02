import React from "react";
import { BoxNFT, Descricao, Imagem } from "./style";
import macaco from "../../assets/macaco.webp";
import Ney from "../../assets/neymar.jpg";
export default function CardShop() {
  return (
    <BoxNFT>
      <Imagem>
        { <img
          src={macaco}
          alt="NFT de macaco"
    /*       width="300px"
          height="200px" */
        /> }
      </Imagem>
      <Descricao>
        <div>
          <span>Pudgy Apes</span>
          <span>Pudgy Apes #8513</span>
        </div>
        <div>
          <span>Price</span>
          <span>
            eth
            0.045
          </span>
        </div>
      </Descricao>
    </BoxNFT>
  );
}
