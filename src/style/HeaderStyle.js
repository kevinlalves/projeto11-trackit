import styled from "styled-components";

const HeaderStyle = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  padding-left: 18px;
  padding-right: 18px;
  justify-content: space-between;
  background-color: ${props => props.theme.color.header};
  p {
    color: ${props => props.theme.color.secondary};
    font-family: "Playball", cursive !important;
    font-size: 39px;
  }
  img {
    border-radius: 50%;
    width: 51px;
    height: 51px;
  }
`;

export default HeaderStyle;
