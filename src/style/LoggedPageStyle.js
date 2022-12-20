import styled from "styled-components";

const LoggedPageStyle = styled.div`
  background-color: ${props => props.theme.color.back};
  min-height: 100vh;
  margin-top: 70px;
  margin-bottom: 70px;
  padding-left: 17px;
  padding-right: 17px;
  font-size: 18px;
`;

export default LoggedPageStyle;
