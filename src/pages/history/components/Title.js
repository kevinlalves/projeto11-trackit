import TitleStyle from "../../../style/TitleStyle";
import { title } from "../../../constants/i18n-br";

export default function Title({ onClick }) {
  return (
    <TitleStyle>
      <div>
        <p>{title.historyPage}</p>
      </div>
    </TitleStyle>
  );
}
