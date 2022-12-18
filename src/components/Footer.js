import FooterStyle from "../style/FooterStyle";
import Progress from "./Progress";

export default function Footer() {
  return (
    <FooterStyle>
      <p>Hábitos</p>
      <Progress text="Hoje" />
      <p>Histórico</p>
    </FooterStyle>
  );
}
