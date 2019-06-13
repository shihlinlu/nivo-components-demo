import * as React from 'react';

import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ROUTES } from 'utility/routerConstants';

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

interface Props {
  /** callback for navigating to home page */
  navigateToHome: () => void;
}

const HyperloopCalculatorContainer = ({ navigateToHome }: Props) => {
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
            <StyledButton margin="5px" onClick={navigateToHome}>
              Back to Home
            </StyledButton>
          </StyledActionWrapper>
        </StyledCard>
      </StyledHyperloopCardSection>
    </StyledHyperloopPage>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  navigateToHome: () => {
    dispatch(push(ROUTES.HOME));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(HyperloopCalculatorContainer);
