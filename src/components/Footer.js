import FooterStyle from "../style/FooterStyle";
import Progress from "./Progress";

export default function Footer() {
  const doneHabitsPercentage = 0;

  return (
    <FooterStyle>
      <p>Hábitos</p>
      <Progress text="Hoje" percentage={doneHabitsPercentage} />
      <p>Histórico</p>
    </FooterStyle>
  );
}
