import remove from "../../../assets/remove.png";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { deleteHabit } from "../../../services/trackit-api";
import HabitStyle from "../../../style/HabitStyle";
import Days from "../../../components/Days";

export default function Habit({ habit, setHabits, habits }) {
  const { user } = useContext(UserContext);
  const [disabled, setDisabled] = useState(false);
  const { id, name, days } = habit;

  const removeHabit = async () => {
    setDisabled(true);
    await deleteHabit(id, user.token);
    setHabits(habits.filter(habit => habit.id !== id));
    setDisabled(false);
  };

  return (
    <HabitStyle>
      <p>{name}</p>
      <Days days={days} />
      <img src={remove} alt="trash can" onClick={removeHabit} disabled={disabled} />
    </HabitStyle>
  );
}
