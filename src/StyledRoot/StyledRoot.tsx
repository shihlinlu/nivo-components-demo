import styled from '../themes/styledComponents';

const StyledRoot = styled.div`
  color: ${props => props.theme.root.color};
  background-color: ${props => props.theme.root.backgroundColor};
  font-family: ${props => props.theme.text.standard.fontFamily};
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  height: 100vh;
  width: 100vw;

  overflow: hidden;
`;

export { StyledRoot };

export default StyledRoot;
