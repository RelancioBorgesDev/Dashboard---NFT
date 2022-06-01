import styled from "styled-components";
import {Dashboard, Home, ShoppingBag, Settings, Favorite, TrendingUp, Star, PurchaseTag} from '../../styles/Icons'
/* Sidebar Container */
export const Container = styled.div`
  width: fit-content;
  height: 100vh;
  position: fixed;
  background-color: #1e203c;
  padding: 16px;
`
/* Logo */
export const LogoContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid #6b6e91;
  padding: 5px;
  text-align: center;


  @media (max-width: 1300px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

`
export const DashboardIcon = styled(Dashboard)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const TituloLogo = styled.h2`
  font-size: 1.4rem;
  color: #6b6e91;

  @media (max-width: 1300px) {
    text-align: center;
  }

  @media (max-width: 1300px) {
    display: none;
  }
`


