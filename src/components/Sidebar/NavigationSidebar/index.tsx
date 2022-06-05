import React from "react";
import {
  HomeIcon,
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
} from "./styles";
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    <NavigationContainer>
      <NavigationList>

        <Link to="/Home">
          <NavigationItem>
            <HomeIcon />
            <NavigationItemTitle>Home</NavigationItemTitle>
          </NavigationItem>
        </Link>

        <Link to="/Market">
          <NavigationItem>
            <MarketIcon />
            <NavigationItemTitle>Market</NavigationItemTitle>
          </NavigationItem>
        </Link>
        <NavigationItem>

          <Link to="/Favorite">
            <FavoriteIcon />
            <NavigationItemTitle>Favorite</NavigationItemTitle>
          </Link>
        </NavigationItem>

        <Link to="/Trending">
          <NavigationItem>
            <TrendingIcon />
            <NavigationItemTitle>Trending</NavigationItemTitle>
          </NavigationItem>
        </Link>

        <Link to="/Featured">
          <NavigationItem>
            <FeaturedIcon />
            <NavigationItemTitle>Featured</NavigationItemTitle>
          </NavigationItem>
        </Link>

        <Link to="/Purchases">
          <NavigationItem>
            <PurchaseIcon />
            <NavigationItemTitle>Purchases</NavigationItemTitle>
          </NavigationItem>
        </Link>

        <Link to="/Settings">
          <NavigationItem>
            <SettingsIcon />
            <NavigationItemTitle>Settings</NavigationItemTitle>
          </NavigationItem>
        </Link>
        
      </NavigationList>
    </NavigationContainer>
  );
}
