import remove from "../../../assets/remove.png";
import { useContext, useState } from "react";
import UserContext from "../../../contexts/UserContext";
import { deleteHabit, listTodaysHabits } from "../../../services/trackit-api";
import HabitStyle from "../../../style/HabitStyle";
import Days from "../../../components/Days";
import ProgressContext from "../../../contexts/ProgressContext";
import { dialogue } from "../../../constants/i18n-br";
import { getProgress } from "../../../constants/utils";

export default function Habit({ habit, setHabits, habits }) {
  const { user } = useContext(UserContext);
  const { setProgress } = useContext(ProgressContext);
  const [disabled, setDisabled] = useState(false);
  const { id, name, days } = habit;

  const removeHabit = async () => {
    setDisabled(true);
    if (disabled || !window.confirm(dialogue.delete)) {
      return;
    }

    await deleteHabit(id, user.token);
    setHabits(habits.filter(habit => habit.id !== id));
    setDisabled(false);
    const todayHabits = await listTodaysHabits(user.token);
    const { progress } = getProgress(todayHabits);
    setProgress(progress);

  };

  return (
    <HabitStyle>
      <p>{name}</p>
      <Days days={days} />
      <img src={remove} alt="trash can" onClick={removeHabit} />
    </HabitStyle>
  );
}
