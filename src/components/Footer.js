import { Link } from "react-router-dom";
import FooterStyle from "../style/FooterStyle";
import Progress from "./Progress";

export default function Footer() {
  return (
    <FooterStyle>
      <Link to="/habitos">
        <p>Hábitos</p>
      </Link>
      <Link to="/hoje">
        <Progress text="Hoje" />
      </Link>
      <Link to="/historico">
        <p>Histórico</p>
      </Link>
    </FooterStyle>
  );
}
