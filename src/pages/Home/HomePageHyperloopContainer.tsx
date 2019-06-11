import * as React from 'react';

import HyperloopOneImage from 'resources/Images/hyperloopOne.png';

import {
  StyledTitle,
  StyledCard,
  StyledButton,
  StyledActionWrapper,
  StyledImageContainer,
} from './StyledHomeComponents';

/** Displays Hyperloop Navigation Card */
const HomePageHyperLoopContainer = () => (
  <StyledCard>
    <StyledTitle>Hyperloop Route Calculator</StyledTitle>
    <StyledImageContainer src={HyperloopOneImage} alt="hyperloopOneImage" />
    <StyledActionWrapper>
      <StyledButton margin="5px">Calculate</StyledButton>
    </StyledActionWrapper>
  </StyledCard>
);

export default HomePageHyperLoopContainer;
