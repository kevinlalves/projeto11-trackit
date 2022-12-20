import styled from "styled-components";

const LoggedPageStyle = styled.div`
  background-color: ${props => props.theme.color.back};
  min-height: calc(100vh - 140px);
  margin-top: 70px;
  padding-bottom: 80px;
  padding-left: 17px;
  padding-right: 17px;
  font-size: 18px;
`;

export default LoggedPageStyle;
