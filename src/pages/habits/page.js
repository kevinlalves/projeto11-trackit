import Title from "./components/Title";
import Habit from "./components/Habit";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import { useContext, useEffect, useState } from "react";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import UserContext from "../../contexts/UserContext";
import { listHabits } from "../../services/trackit-api";
import Form from "./components/Form";
import { emptyText } from "../../constants/i18n-br";

export default function HabitsPage() {
  const [name, setName] = useState("");
  const [days, setDays] = useState([]);
  const [habits, setHabits] = useState(undefined);
  const [creatingHabit, setCreatingHabit] = useState(false);
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/");
    }

    async function fetchData() {
      const newHabits = await listHabits(user.token);
      setHabits(newHabits);
    }

    fetchData();
  }, [user, navigate]);

  if (!habits) {
    return <Loading />;
  }

  return user ? (
    <>
      <Header />
      <LoggedPageStyle>
        <Title setCreatingHabit={setCreatingHabit} />
        {creatingHabit && <Form
          setCreatingHabit={setCreatingHabit}
          setHabits={setHabits}
          habits={habits}
          name={name}
          setName={setName}
          days={days}
          setDays={setDays}
        />}
        {habits.length
          ? habits.map(habit => <Habit key={habit.id} habit={habit} setHabits={setHabits} habits={habits} />)
          : emptyText.habitsPage}
      </LoggedPageStyle>
      <Footer />
    </>
  ) : null;
}
