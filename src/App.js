import { Route, Routes, BrowserRouter } from "react-router-dom";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";
import NotFoundPage from "./pages/NotFoundPage";
import TodayPage from "./pages/today/page";
import HistoryPage from "./pages/history/page";
import HabitsPage from "./pages/habits/page";
import { ThemeProvider } from "styled-components";
import color from "./constants/colors";
import UserContext from "./contexts/UserContext";
import ProgressContext from "./contexts/ProgressContext";
import { useMemo, useState } from "react";

export default function App() {
  const [user, setUser] = useState(JSON.parse(window.localStorage.getItem("user")));
  const [progress, setProgress] = useState(0);
  const userValue = useMemo(() => ({ user, setUser }), [user, setUser]);
  const progressValue = useMemo(() => ({ progress, setProgress }), [progress, setProgress]);

  return (
    <ThemeProvider theme={{ color }}>
      <UserContext.Provider value={userValue}>
        <ProgressContext.Provider value={progressValue}>
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
        </ProgressContext.Provider>
      </UserContext.Provider>
    </ThemeProvider>
  );
}
