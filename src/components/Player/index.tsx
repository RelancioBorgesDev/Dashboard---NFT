import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Player = ({ className } : any) => (
  <ReactPlayer
    url="https://www.youtube.com/watch?v=V5PrLfCyko4"
    className={className}
    width="100%"
    height="100%"
    playing
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
  border: 1px solid black;
  border-radius: .75rem;
`;

const ResponsiveStyledPlayer = () => (
  <RelativePositionWrapper>
    <AbsolutelyPositionedPlayer />
  </RelativePositionWrapper>
);

export default ResponsiveStyledPlayer;
