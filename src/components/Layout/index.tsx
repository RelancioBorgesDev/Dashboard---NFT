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

export default function Layout() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Header />
        <Grid>
          <Principal>
          <NFT/>
          </Principal>
          <Side>
            <Player />
          </Side>
          <Cards>Cards</Cards>
        </Grid>
      </Wrapper>
    </LayoutContainer>
  );
}
