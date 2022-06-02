import React from 'react'
import Sidebar from '../../components/Sidebar'
import Header from '../../components/Header/index';
import { Container, ContainerItems, HeaderMarket } from './style';
import CardShop from '../../components/CardShop';

export default function Market() {
  return (
    <>
    <Sidebar/>
      <Container>
        <Header/>
        <HeaderMarket>
          <h1>NFT - MarketShop</h1>
          <select>
              <option value="" disabled selected hidden>Sort By...</option>
              <option value="0">Price - Low to High</option>
              <option value="1">Price - High to Low</option>
          </select>
        </HeaderMarket>

        <ContainerItems>
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <CardShop/>
            <CardShop/>

        </ContainerItems>
      </Container>
    </>
  )
}
