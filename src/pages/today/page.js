import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import Title from "./components/Title";
import Habit from "./components/Habit";
import { useContext, useEffect, useState } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading";
import { listTodaysHabits } from "../../services/trackit-api";

export default function TodayPage() {
  const [habits, setHabits] = useState(undefined);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
  }, [user]);

  useEffect(() => {
    async function fetchData() {
      const data = await listTodaysHabits(user.token);
      setHabits(data);
    }

    fetchData();
  }, []);

  if (!habits) {
    return <Loading />
  }

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title doneSome={habits.length && habits.some(habit => habit.done === true)} />
        {habits.length !== 0
        && habits.map(habit => <Habit key={habit.id} habit={habit} setHabits={setHabits} />)}
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
