import { useContext, useState } from "react";
import styled from "styled-components";
import checkmark from "../../../assets/checkmark.png";
import ProgressContext from "../../../contexts/ProgressContext";
import UserContext from "../../../contexts/UserContext";
import { checkHabitDone, uncheckHabitDone } from "../../../services/trackit-api";
import HabitStyle from "../../../style/HabitStyle";

export default function Habit({ habit, habitsSize, numDone, setNumDone }) {
  const { user } = useContext(UserContext);
  const { progress, setProgress } = useContext(ProgressContext);
  const { id, name, done, currentSequence, highestSequence } = habit;
  const [disabled, setDisabled] = useState(false);
  const [updatedDone, setUpdatedDone] = useState(done);
  const [updatedCurrentSequence, setUpdatedCurrentSequence] = useState(currentSequence);

  const checkDone = async () => {
    setDisabled(true);
    if (disabled) {
      return;
    }
    if (updatedDone) {
      await uncheckHabitDone(id, user.token);
      setUpdatedCurrentSequence(updatedCurrentSequence-1);
      setNumDone(numDone-1);
      setProgress(progress - 100/habitsSize);
    } else {
      await checkHabitDone(id, user.token);
      setUpdatedCurrentSequence(updatedCurrentSequence+1);
      setNumDone(numDone+1);
      setProgress(progress + 100/habitsSize);
    }

    setUpdatedDone(!updatedDone);
    setDisabled(false);
  }

  return (
    <THabitStyle>
      <Left>
        <p>{name}</p>
        <Info>
          <p>{`Sequência atual: ${updatedCurrentSequence} dias`}</p>
          <p>{`Seu recorde: ${Math.max(highestSequence, updatedCurrentSequence)} dias`}</p>
        </Info>
      </Left>
      <State onClick={checkDone} done={updatedDone}>
        <img src={checkmark} alt="checkmark" />
      </State>
    </THabitStyle>
  );
}

const THabitStyle = styled(HabitStyle)`
  flex-direction: row;
  justify-content: space-between;
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
