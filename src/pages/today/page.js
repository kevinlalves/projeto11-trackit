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
import ProgressContext from "../../contexts/ProgressContext";
import { getProgress } from "../../constants/utils";
import { emptyText } from "../../constants/i18n-br";

export default function TodayPage() {
  const [habits, setHabits] = useState(undefined);
  const [numDone, setNumDone] = useState(0);
  const { user } = useContext(UserContext);
  const { setProgress } = useContext(ProgressContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    async function fetchData() {
      const todayHabits = await listTodaysHabits(user.token);
      const { doneHabits, progress } = getProgress(todayHabits);
      window.localStorage.setItem("progress", progress);
      setProgress(progress);
      setNumDone(doneHabits);
      setHabits(todayHabits);
    }

    fetchData();
  }, [user, navigate, setProgress]);

  if (!habits) {
    return <Loading />
  }

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title numDone={numDone} />
        {habits.length !== 0
          ? habits.map(habit =>
            <Habit key={habit.id} habit={habit} habitsSize={habits.length} setNumDone={setNumDone} numDone={numDone} />
          )
          : emptyText.todayPage
        }
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
