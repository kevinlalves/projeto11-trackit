import Header from "../../components/Header";
import Footer from "../../components/Footer";
import LoggedPageStyle from "../../style/LoggedPageStyle";
import Title from "./components/Title";
import Habits from "../../components/Habits";

export default function TodayPage() {
  return (
    <>
      <Header />
      <LoggedPageStyle>
        <Title />
        <Habits />
      </LoggedPageStyle>
      <Footer />
    </>
  );
}
