import { useContext, useState } from "react";
import styled from "styled-components";
import checkmark from "../../../assets/checkmark.png";
import UserContext from "../../../contexts/UserContext";
import { checkHabitDone, listTodaysHabits, uncheckHabitDone } from "../../../services/trackit-api";
import HabitStyle from "../../../style/HabitStyle";

export default function Habit({ habit, setHabits }) {
  const { user } = useContext(UserContext);
  const { id, name, done, currentSequence, highestSequence } = habit;

  const checkDone = async () => {
    if (done) {
      await uncheckHabitDone(id, user.token);
    } else {
      await checkHabitDone(id, user.token);
    }
    const data = await listTodaysHabits(user.token);
    setHabits(data);
  }

  return (
    <THabitStyle>
      <Left>
        <p>{name}</p>
        <Info>
          <p>{`Sequência atual: ${currentSequence} dias`}</p>
          <p>{`Seu recorde: ${highestSequence} dias`}</p>
        </Info>
      </Left>
      <State onClick={checkDone} done={done}>
        <img src={checkmark} alt="checkmark" />
      </State>
    </THabitStyle>
  );
}

const THabitStyle = styled(HabitStyle)`
  flex-direction: row;
`;

const State = styled.div`
  background-color: ${props => props.done ? props.theme.color.done : props.theme.color.checked.back};
  border-radius: 5px;
  width: 69px;
  height: 69px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  img {
    width: 35px;
    height: 28px;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 20px;
`;

const Info = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 13px;
  margin-top: 10px;
`;
