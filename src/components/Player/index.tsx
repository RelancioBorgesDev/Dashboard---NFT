import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";
import Video from '../../assets/APOCALYPTIC APES NFT Teaser Video.mp4'
import Poster from '../../assets/Poster.png'
const Player = ({ className } : any) => (
  <video
    src={Video}
    className={className}
    width="100%"
    height="100%"
    poster={Poster}
    autoPlay={true}
    loop
    muted
  />
);

const AbsolutelyPositionedPlayer = styled(Player)`
  position: absolute;
  top: 0;
  left: 0;
  border-radius: .75rem;

`;

const RelativePositionWrapper = styled.div`
  position: relative;
  padding-top: 56.25%;
  border-radius: .75rem;
`;

const ResponsiveStyledPlayer = () => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;
