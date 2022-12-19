import styled from "styled-components";

const HabitStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  font-size: 20px;
  background-color: ${props => props.theme.color.secondary};
  border-radius: 5px;
  margin-bottom: 10px;
  &>img {
    position: absolute;
    top: 15px;
    right: 8px;
    width: 13px;
    height: 15px;
    cursor: pointer;
  }
`;

export default HabitStyle;
