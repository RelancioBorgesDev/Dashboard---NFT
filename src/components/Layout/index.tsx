import React from "react";
import Header from "../Header";
import {
  Cards,
  Grid,
  LayoutContainer,
  Principal,
  Side,
  Wrapper,
} from "./style";

import Player from "../Player/index";
import NFT from "../NFT";
import macaco from "../../assets/macaco.webp";
import Ney from "../../assets/neymar.jpg";
import Card from "../Card";

export default function Layout() {
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
