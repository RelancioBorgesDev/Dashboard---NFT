import React from 'react'
import Header from '../Header'
import { BoxNFT, BoxNFTInfo, Cards, Grid, HeartIcon, LayoutContainer, Principal, Side, Wrapper } from './style';
import NFT from '../../assets/macaco.webp'
import Ney from '../../assets/neymar.jpg'
import nftVideo from '../../assets/APOCALYPTIC APES NFT Teaser Video.mp4'
import Poster from '../../assets/Poster.png'
export default function Layout() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Header/>
        <Grid>
          <Principal>
            <BoxNFT>
              <img src={NFT} alt="NFT de macaco"/>
              <div>
                <h2>Neymar JR</h2>
                <span>
                  <img src={Ney} alt="Neymar" />
                </span>
              </div>
            </BoxNFT>
            <BoxNFTInfo>
              <h1>Mutant Ape Yacht Club</h1>

              <div>
                <span>Preço Atual:</span>
                <h2>55 ETH</h2>
              </div>

              <div>
                <button>
                  <HeartIcon/>
                </button>
                <button>Ver arte</button>
              </div>
            </BoxNFTInfo>
          </Principal>
          <Side>
            <video src={nftVideo} controls poster={Poster}/>
          </Side>
          <Cards>Cards</Cards>
        </Grid>
      </Wrapper>
    </LayoutContainer>
  )
}
