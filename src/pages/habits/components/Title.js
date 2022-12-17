import TitleStyle from "../../../style/TitleStyle";

export default function Title({ onClick }) {
  return (
    <TitleStyle>
      <div>
        <p>Meus hábitos</p>
      </div>
      <button onClick={onClick}>
        +
      </button>
    </TitleStyle>
  );
}
