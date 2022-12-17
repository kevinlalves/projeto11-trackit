import TitleStyle from "../../../style/TitleStyle";
import dayjs from "dayjs";

export default function Title() {
  const doneHabitsPercentage = 0;

  return (
    <TitleStyle>
      <div>
        <p>{`${dayjs().locale("br").day().toString()}, ${dayjs().locale("br").date().toString()}`}</p>
        <p>{doneHabitsPercentage ? `${doneHabitsPercentage}% dos hábitos concluídos`: "Nenhum hábito concluido ainda"}</p>
      </div>
    </TitleStyle>
  );
}
