import React from 'react'
import {  HomeIcon,
  MarketIcon,
  FavoriteIcon,
  TrendingIcon,
  FeaturedIcon,
  PurchaseIcon,
  SettingsIcon,
  NavigationContainer,
  NavigationList,
  NavigationItem,
  NavigationItemTitle,
} from './styles'

export default function Navigation() {
  return (
    <NavigationContainer>
    <NavigationList>
      <NavigationItem>
        <HomeIcon />
        <NavigationItemTitle>Home</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <MarketIcon />
        <NavigationItemTitle>Market</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <FavoriteIcon />
        <NavigationItemTitle>Favorite</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <TrendingIcon />
        <NavigationItemTitle>Trending</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <FeaturedIcon />
        <NavigationItemTitle>Featured</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <PurchaseIcon />
        <NavigationItemTitle>Purchases</NavigationItemTitle>
      </NavigationItem>
      <NavigationItem>
        <SettingsIcon />
        <NavigationItemTitle>Settings</NavigationItemTitle>
      </NavigationItem>
    </NavigationList>
  </NavigationContainer>
  )
}
