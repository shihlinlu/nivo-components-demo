import * as React from 'react';
import Card from '@material-ui/core/Card';
import HyperloopOne from 'resources/Images/hyperloop-one.png';

import { StyledTitle, StyledCardMedia } from './StyledHomeComponents';

const HomePageHyperLoopContainer = () => (
  <Card>
    <StyledTitle>Hyperloop Route Calculator</StyledTitle>
    <StyledCardMedia image={HyperloopOne} />
  </Card>
);

export default HomePageHyperLoopContainer;
