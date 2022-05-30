import React from 'react'
import Header from '../Header'
import { Cards, Grid, LayoutContainer, Principal, Side, Wrapper } from './style';

export default function Layout() {
  return (
    <LayoutContainer>
      <Wrapper>
        <Header/>
        <Grid>
          <Principal>
            <div>
              NFT IMAGE
            </div>
            <div>
              <h2>Neymar NFT</h2>
              <div>
                
              </div>
            </div>
          </Principal>
          <Side>Side</Side>
          <Cards>Cards</Cards>
        </Grid>
      </Wrapper>
    </LayoutContainer>
  )
}
