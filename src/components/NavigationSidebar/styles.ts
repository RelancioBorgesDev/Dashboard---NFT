import styled from "styled-components"
import {Home, ShoppingBag, Settings, Favorite, TrendingUp, Star, PurchaseTag} from '../../styles/Icons'

/* Navigation */
export const NavigationContainer = styled.div`
  margin: 2rem 0;
`
export const NavigationList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 5px;
  gap: 2rem;

`
export const NavigationItem = styled.li`
  width: 100%;
  border-radius: .75rem;
  display: flex;
  align-items: center;
  gap: 2rem;
  padding: .75rem;
   &:hover{
     background-color: #413060;
     transition: all 0.2s ease;
     cursor: pointer;
   }
`

export const NavigationItemTitle = styled.span`
  font-size: 1.4rem;
  color: #6b6e91;
`

/* Icons Navigation */
export const HomeIcon = styled(Home)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const MarketIcon = styled(ShoppingBag)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const FavoriteIcon = styled(Favorite)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const TrendingIcon = styled(TrendingUp)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const FeaturedIcon = styled(Star)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const PurchaseIcon = styled(PurchaseTag)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`
export const SettingsIcon = styled(Settings)`
  color: #6b6e91;
  width: 30px;
  height: 30px;
`