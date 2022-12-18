import Title from "../today/components/Title";
import Habits from "../../components/Habits";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import { useContext, useEffect, useState } from "react";
import { listHabits } from "../../services/trackit-api";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";

export default function HabitsPage() {
  const [habits, setHabits] = useState(undefined);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user, navigate]);

  useEffect(() => {
    console.log(listHabits(user.token));
  }, []);

  if (!habits) {
    return <Loading />;
  }

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title />
        {habits.length ? <Habits habits={habits} /> : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
