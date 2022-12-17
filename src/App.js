import { Route, Routes, BrowserRouter } from "react-router-dom";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";
import NotFoundPage from "./pages/NotFoundPage";
import TodayPage from "./pages/today/page";
import HistoryPage from "./pages/history/page";
import HabitsPage from "./pages/habits/page";
import { ThemeProvider } from "styled-components";
import color from "./constants/colors";

export default function App() {
  return (
    <ThemeProvider color={color}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SigninPage />} />
          <Route path="/cadastro" element={<SignupPage />} />
          <Route path="/habitos" element={<HabitsPage />} />
          <Route path="/hoje" element={<TodayPage />} />
          <Route path="/historico" element={<HistoryPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
