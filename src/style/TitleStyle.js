import styled from "styled-components";

const TitleStyle = styled.div`
  padding-top: 28px;
  margin-bottom: 28px;
  div {
    display: flex;
    flex-direction: column;
    p:nth-child(1) {
      color: ${props => props.theme.color.header};
      font-size: 23px;
      margin-bottom: 5px;
    }
    p:nth-child(2) {
      color: ${props => props.numDone > 0 ? props.theme.color.done : props.theme.color.subtitle};
      font-size: 18px;
    }
  }
  display: flex;
  justify-content: space-between;
  align-items: center;
  button {
    border: none;
    border-radius: 5px;
    height: 35px;
    width: 40px;
    font-size: 27px;
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.main};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4px;
  }
`;

export default TitleStyle;
