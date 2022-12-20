import TitleStyle from "../../../style/TitleStyle";
import { useContext } from "react";
import ProgressContext from "../../../contexts/ProgressContext";
import { weekDays } from "../../../constants/i18n-br";

export default function Title({ numDone }) {
  const { progress } = useContext(ProgressContext);

  return (
    <TitleStyle numDone={numDone}>
      <div>
        <p>{`${weekDays[(new Date()).getDay()]}, ${(new Date()).getDate()}/${(new Date()).getMonth()}`}</p>
        <p>{progress > 0 ? `${Math.round(progress)}% dos hábitos concluídos` : "zero habit message"}</p>
      </div>
    </TitleStyle>
  );
}
