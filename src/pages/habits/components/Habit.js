import styled from "styled-components";
import initials from "../../../constants/days";
import remove from "../../../assets/remove.png";

export default function Habit({ name, days, onClick }) {
  return (
    <HabitStyle>
      <p>{name}</p>
      <Days>
        {initials.map((initial, idx) => <Day checked={days.includes(idx)}>{initial}</Day>)}
      </Days>
      <img src={remove} alt="trash can" onClick={onClick} />
    </HabitStyle>
  );
}

const HabitStyle = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 15px;
  img {
    position: absolute;
  }
`;

const Days = styled.div`
  display: flex;
`;

const Day = styled.div`
  border: 1px ${props => props.theme.color.checked.back} solid;
  border-radius: 5px;
  color: ${props => props.checked ? props.theme.color.checked.main : props.theme.color.checked.back};
  background-color: ${props => props.checked ? props.theme.color.checked.back : props.theme.color.checked.main };
  height: 30px;
  width: 30px;
  font-size: 20px;
`;
