import React from "react";
import Navigation from "./NavigationSidebar";
import {
  Container,
  LogoContainer,
  DashboardIcon,
  TituloLogo,
} from "./styles";
export default function Sidebar() {
  return (
    <Container>
      <LogoContainer>
        <DashboardIcon />
        <TituloLogo>Dashboard - NFT</TituloLogo>
      </LogoContainer>
      <Navigation/>
    </Container>
  );
}
