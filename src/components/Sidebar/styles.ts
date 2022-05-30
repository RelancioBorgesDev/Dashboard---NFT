import styled from "styled-components";
import {Dashboard, Home, ShoppingBag, Settings, Favorite, TrendingUp, Star, PurchaseTag} from '../../styles/Icons'
/* Sidebar Container */
export const Container = styled.div`
  width: 18rem;
  height: 100vh;
  position: fixed;
  background-color: #1e213c;
  -moz-box-shadow:    inset 0 0 10px #000000;
  -webkit-box-shadow: inset 0 0 10px #000000;
  box-shadow:         inset 0 0 10px #000000;
  padding: 16px;
`
/* Logo */
export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid #6b6e91;
  padding: 5px;

`
export const DashboardIcon = styled(Dashboard)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const TituloLogo = styled.h2`
  font-size: 1.4rem;
  color: #6b6e91;
`


