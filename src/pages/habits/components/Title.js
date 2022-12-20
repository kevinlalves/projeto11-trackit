import TitleStyle from "../../../style/TitleStyle";
import { title } from "../../../constants/i18n-br";

export default function Title({ setCreatingHabit }) {
  return (
    <>
      <TitleStyle>
        <div>
          <p>{title.habitsPage}</p>
        </div>
        <button onClick={() => setCreatingHabit(true)}>
          +
        </button>
      </TitleStyle>
    </>

  );
}
