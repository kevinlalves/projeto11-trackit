import styled from "styled-components";
import initials from "../constants/days";

export default function Days({ days, setDays }) {
  const selectDay = dayIdx => {
    if (!setDays) {
      return ;
    }

    const existentIdx = days.indexOf(dayIdx);
    if (existentIdx > 0) {
      days.splice(existentIdx, 1);
      const newDays = [...days];
      setDays(newDays);
      return ;
    }

    setDays([...days, dayIdx]);
  }

  return (
    <DaysContent>
      {initials.map((initial, dayIdx) =>
        <Day clickable={setDays} onClick={() => selectDay(dayIdx)} key={dayIdx} checked={days.includes(dayIdx)}>
          <p>{initial}</p>
        </Day>)}
    </DaysContent>
  );
}

const DaysContent = styled.div`
  display: flex;
  margin-top: 15px;
`;

const Day = styled.div`
  border: 1px ${props => props.theme.color.checked.back} solid;
  border-radius: 5px;
  color: ${props => props.checked ? props.theme.color.checked.main : props.theme.color.checked.back};
  background-color: ${props => props.checked ? props.theme.color.checked.back : props.theme.color.checked.main};
  height: 30px;
  width: 30px;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 4px;
  cursor: ${props => props.clickable ? "pointer" : "default"};
`;
