import StartPageStyle from "../../style/StartPageStyle";
import Logo from "../../components/Logo";
import Form from "./components/Form";
import { useContext, useEffect } from "react";
import UserContext from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";

export default function SigninPage() {
  const {user} = useContext(UserContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/hoje");
    }
  }, [user, navigate]);

  return (
    <StartPageStyle>
      <Logo />
      <Form />
    </StartPageStyle>
  );
}
