import styled from "styled-components";

const FooterStyle = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  display: flex;
  height: 70px;
  background-color: ${props => props.theme.color.secondary};
  align-items: center;
  justify-content: space-evenly;
  font-size: 18px;
  p {
    color: ${props => props.theme.color.main};
  }
`;

export default FooterStyle;
