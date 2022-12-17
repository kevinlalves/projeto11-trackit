import Title from "../today/components/Title";
import Habits from "../../components/Habits";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import { useEffect, useState } from "react";
import { listHabits } from "../../services/trackit-api";
import Loading from "../../components/Loading";

export default function HabitsPage() {
  const [habits, setHabits] = useState(undefined);

  useEffect(() => {
    listHabits.then(data => setHabits(data))
      .catch(err => {
        console.log("Problem with listHabits", err);
      })
  }, []);

  if (!habits) {
    return <Loading />;
  }

  return (
    <>
      <Header />
      <LoggedPageStyle>
        <Title />
        {habits.length ? <Habits habits={habits} /> : "Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para começar a trackear!"}
      </LoggedPageStyle>
      <Footer />
    </>
  );
}
