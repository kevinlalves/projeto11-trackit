import { useContext, useState } from "react";
import styled from "styled-components";
import UserContext from "../../../contexts/UserContext";
import { createHabit } from "../../../services/trackit-api";
import Days from "../../../components/Days";
import { FormStyle } from "../../../style/FormStyle";
import ProgressContext from "../../../contexts/ProgressContext";
import { ThreeDots } from "react-loader-spinner";

export default function Form({ setCreatingHabit, setHabits, habits, name, setName, days, setDays }) {
  const [disabled, setDisabled] = useState(false);
  const { user } = useContext(UserContext);
  const { progress, setProgress } = useContext(ProgressContext);

  const createHabitApi = async (e) => {
    setDisabled(true);
    e.preventDefault();
    const newHabit = await createHabit(name, days, user.token);
    setHabits([...habits, newHabit]);
    setProgress(progress * habits.length / (habits.length + 1));
    setCreatingHabit(false);
    setName("");
    setDays([]);
    setDisabled(false);
  };

  return (
    <HFormStyle onSubmit={createHabitApi}>
      <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} required disabled={disabled} />
      <Days days={days} setDays={(disabled ? undefined : setDays)} />
      <Buttons>
        <button onClick={() => setCreatingHabit(false)} disabled={disabled}>Cancelar</button>
        <button type="submit" disabled={disabled}>
          {<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={disabled}
          />}
          {!disabled && "Salvar"}
        </button>
      </Buttons>
    </HFormStyle>
  );
}

const HFormStyle = styled(FormStyle)`
  align-items: flex-start;
  padding: 15px;
  margin-bottom: 10px;
  input {
    width: 100%;
  }
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  padding-left: calc(100% - 178px);
  button {
    width: 84px;
    height: 35px;
    font-size: 16px;
    margin-bottom: 0;
  }
  button:nth-child(2) {
    color: ${props => props.theme.color.secondary};
    background-color: ${props => props.theme.color.main};
    margin-left: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  button:nth-child(1) {
    color: ${props => props.theme.color.main};
    background-color: ${props => props.theme.color.secondary};
  }
`
