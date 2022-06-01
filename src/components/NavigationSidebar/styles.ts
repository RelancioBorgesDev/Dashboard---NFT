import styled from "styled-components"
import {Home, ShoppingBag, Settings, Favorite, TrendingUp, Star, PurchaseTag} from '../../styles/Icons'

/* Navigation */
export const NavigationContainer = styled.div`
  margin: 2rem 0;

  @media (max-width: 475px){
   margin: 0;
  }
`
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  gap: 2rem;

  @media (max-width: 1200px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 475px){
    width: 100vw;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    height: 50px;
    bottom: 0;
    background-color: #1e203c;
    border-top: 1px solid #fff;
    z-index: 100;
    gap: 0.8rem;
  }


`
export const NavigationItem = styled.li`
  width: 100%;
  border-radius: .75rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: .5rem;

   &:hover{
     background-color: #413060;
     transition: all 0.2s ease;
     cursor: pointer;
   }

   @media (max-width: 1200px) {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const NavigationItemTitle = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;


  @media (max-width: 1300px) {
    display: none;
  }
`

/* Icons Navigation */
export const HomeIcon = styled(Home)`
  color: #6b6e91;
  width: 30px;
  height: 30px;

  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }
`
export const MarketIcon = styled(ShoppingBag)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
  @media (max-width: 475px){
    width: 20px;
    height: 20px;
    @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }
  }
`
export const FavoriteIcon = styled(Favorite)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }
`
export const TrendingIcon = styled(TrendingUp)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }


`
export const FeaturedIcon = styled(Star)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }
`
export const PurchaseIcon = styled(PurchaseTag)`
  color: #6b6e91;
  width: 30px;
  height: 30px;

  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }


`
export const SettingsIcon = styled(Settings)`
  color: #6b6e91;
  width: 30px;
  height: 30px;

  @media (max-width: 475px){
    width: 20px;
    height: 20px;
  }
`