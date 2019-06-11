import * as React from 'react';

import HomePageHyperLoopContainer from './HomePageHyperloopContainer';

import {
  StyledHomePage,
  StyledHomePageCardSection,
} from './StyledHomeComponents';

const Home = () => (
  <StyledHomePage>
    <StyledHomePageCardSection>
      <HomePageHyperLoopContainer />
    </StyledHomePageCardSection>
  </StyledHomePage>
);

export default Home;
