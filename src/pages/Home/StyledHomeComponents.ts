import Typography from '@material-ui/core/Typography';
import CardMedia from '@material-ui/core/CardMedia';

import styled from 'main-styled-components';

const StyledHomePage = styled.div`
  margin-top: 180px;

  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyledHomePageCardSection = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
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

const StyledCardMedia = styled(CardMedia)`
  margin: 10px 10px 10px 10px;
  height: 0;
`;

export {
  StyledHomePage,
  StyledHomePageCardSection,
  StyledTitle,
  StyledCardMedia,
};
