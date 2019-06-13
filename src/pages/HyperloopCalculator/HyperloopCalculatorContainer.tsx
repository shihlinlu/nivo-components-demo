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
  StyledText,
} from './StyledHyperloopComponents';

const HyperloopCalculatorContainer = () => {
  return (
    <StyledHyperloopPage>
      <StyledHyperloopCardSection>
        <StyledCard>
          <StyledTitle variant="h2">Hyperloop Route Calculator</StyledTitle>
          <StyledText variant="subtitle1" gutterBottom>
            How long does it take to travel from Albuquerque, NM to Vancouver,
            BC?
          </StyledText>
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
