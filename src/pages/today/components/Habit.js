import styled from "styled-components";

export default function Habit({ name, done, currentSequence, highestSequence }) {
  return (
    <HabitStyle>
      <Left>
        <p>{name}</p>
        <Info>
          <p>{`Sequência atual: ${currentSequence} dias`}</p>
          <p>{`Seu recorde: ${highestSequence} dias`}</p>
        </Info>
      </Left>
      <State done={done}>
        checkmark
      </State>
    </HabitStyle>
  );
}

const HabitStyle = styled.div`

`;


const State = styled.div`
  background-color: ${props => props.done ? props.theme.color.done : props.theme.color.checked.back};
  border-radius: 5px;
  width: 69px;
  height: 69px;
`;
