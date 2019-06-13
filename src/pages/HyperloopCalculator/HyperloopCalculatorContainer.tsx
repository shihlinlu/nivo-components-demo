import * as React from 'react';

import HyperloopBarChart from './HyperloopBarChart';
import {
  StyledHyperloopPage,
  StyledHyperloopCardSection,
  StyledCard,
  StyledTitle,
  StyledButton,
  StyledActionWrapper,
  StyledChartContainer,
} from './StyledHyperloopComponents';

const HyperloopCalculatorContainer = () => {
  return (
    <StyledHyperloopPage>
      <StyledHyperloopCardSection>
        <StyledCard>
          <StyledTitle>Hyperloop Route Calculator</StyledTitle>
          <StyledChartContainer>
            <HyperloopBarChart />
          </StyledChartContainer>
          <StyledActionWrapper>
            <StyledButton margin="5px">Back to Home</StyledButton>
          </StyledActionWrapper>
        </StyledCard>
      </StyledHyperloopCardSection>
    </StyledHyperloopPage>
  );
};

export default HyperloopCalculatorContainer;
