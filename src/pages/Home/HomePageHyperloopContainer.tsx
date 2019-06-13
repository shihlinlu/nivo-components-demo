import * as React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';

import { ROUTES } from 'utility/routerConstants';

import HyperloopOneImage from 'resources/Images/hyperloopOne.png';

import {
  StyledTitle,
  StyledCard,
  StyledButton,
  StyledActionWrapper,
  StyledImageContainer,
} from './StyledHomeComponents';

interface HomeProps {
  /** callback for navigating to the Hyperloop calculator page */
  navigateToHyperloop: () => void;
}

/** Displays Hyperloop Navigation Card */
const HomePageHyperLoopContainer = ({ navigateToHyperloop }: HomeProps) => {
  return (
    <StyledCard>
      <StyledTitle>Hyperloop Route Calculator</StyledTitle>
      <StyledImageContainer src={HyperloopOneImage} alt="hyperloopOneImage" />
      <StyledActionWrapper>
        <StyledButton margin="5px" onClick={navigateToHyperloop}>
          Calculate
        </StyledButton>
      </StyledActionWrapper>
    </StyledCard>
  );
};

export const mapDispatchToProps = (dispatch: Dispatch) => ({
  navigateToHyperloop: () => {
    dispatch(push(ROUTES.HYPERLOOP_CALCULATOR));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(HomePageHyperLoopContainer);
