import { useContext, useState } from "react";
import { FormStyle, ContentStyle } from "../../../style/FormStyle";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../../../services/trackit-api";
import { handleError } from "../../../constants/utils";
import UserContext from "../../../contexts/UserContext";

export default function Form() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext);

  const logIntoAccount = async (e) => {
    e.preventDefault();
    const { token, image, message, details } = await login(email, password);
    if (message) {
      handleError(message, details);
      return;
    }

    const user = { token, image };
    window.localStorage.setItem("user", JSON.stringify(user));
    setUser(user);
    navigate("/hoje");
  }

  return (
    <ContentStyle>
      <FormStyle onSubmit={logIntoAccount}>
        <label>
          <input
            name="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            type="email"
            required
            placeholder="email"
          />
        </label>
        <label>
          <input
            name="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            type="password"
            required
            placeholder="senha"
          />
        </label>
        <button>Entrar</button>
      </FormStyle>
      <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
    </ContentStyle>
  );
};
