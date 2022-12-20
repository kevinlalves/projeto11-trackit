import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import UserContext from "../../contexts/UserContext";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import Title from "./components/Title";
import { emptyText } from "../../constants/i18n-br";

export default function HistoryPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title />
        <p>{emptyText.historyPage}</p>
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
