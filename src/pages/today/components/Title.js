import TitleStyle from "../../../style/TitleStyle";
import { useContext } from "react";
import ProgressContext from "../../../contexts/ProgressContext";
import { weekDays } from "../../../constants/i18n-br";

export default function Title({ doneSome }) {
  const { progress } = useContext(ProgressContext);

  return (
    <TitleStyle doneSome={doneSome}>
      <div>
        <p>{`${weekDays[(new Date()).getDay()]}, ${(new Date()).getDate()}/${(new Date()).getMonth()}`}</p>
        <p>{progress ? `${progress}% dos hábitos concluídos` : "zero habit message"}</p>
      </div>
    </TitleStyle>
  );
}
