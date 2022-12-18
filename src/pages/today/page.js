import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import Title from "./components/Title";
import Habits from "../../components/Habits";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function TodayPage() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title />
        <Habits />
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
