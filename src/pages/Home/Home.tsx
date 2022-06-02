import React from "react";
import Header from "../../components/Header";
import {
  Cards,
  Grid,
  LayoutContainer,
  Principal,
  Side,
  Wrapper,
} from "./style";

import Player from "../../components/Player";
import NFT from "../../components/NFT";
import macaco from "../../assets/macaco.webp";
import Ney from "../../assets/neymar.jpg";
import Card from "../../components/Card";
export default function Home() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Header />
        <Grid>
          <Principal>
            <NFT />
          </Principal>
          <Side>
            <Player />
          </Side>
          <Cards>
            <header>
              <h1>Melhores NFT'S</h1>
              <button>Ver mais</button>
            </header>
            <div>
              <Card imagem_nft={macaco} dono={"Neymar"} imagem_dono={Ney} />
              <Card imagem_nft={macaco} dono={"Neymar"} imagem_dono={Ney} />
              <Card imagem_nft={macaco} dono={"Neymar"} imagem_dono={Ney} />
              <Card imagem_nft={macaco} dono={"Neymar"} imagem_dono={Ney} />
            </div>
          </Cards>
        </Grid>
      </Wrapper>
    </LayoutContainer>
  );
}
