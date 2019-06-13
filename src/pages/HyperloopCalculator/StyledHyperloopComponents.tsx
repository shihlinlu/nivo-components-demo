import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';

import styled from 'main-styled-components';

const StyledHyperloopPage = styled.div`
  margin-top: 180px;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledHyperloopCardSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledCard = styled(Card)`
  && {
    border: 3px solid;
    border-color: ${props => props.theme.card.borderColor};
    border-radius: 3px;
    background-color: #ffffff;
    color: #0e1111;
    max-width: 750px;
  }
`;

const StyledTitle = styled(Typography)`
  && {
    flex: 1;
    justify-content: center;
    text-align: center;
    margin: 0 10px;
    font-size: 20px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`;

const StyledActionWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 5px;
`;

const StyledButton = styled(Button)`
  && {
    color: #ffffff;
    margin: ${({ margin }: { margin: string }) => margin || '0 0 0 0'};
    background-color: #6fc3df;
    &&:hover {
      background-color: #4d5363;
    }
  }
`;

const StyledChartContainer = styled.div`
  height: 400px;
  width: 700px;
`;

export {
  StyledHyperloopPage,
  StyledHyperloopCardSection,
  StyledCard,
  StyledTitle,
  StyledButton,
  StyledActionWrapper,
  StyledChartContainer,
};
