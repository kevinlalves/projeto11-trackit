import { useState } from "react";
import { FormStyle, ContentStyle } from "../../../style/FormStyle";
import { Link } from "react-router-dom";

export default function Form() {
  const [email, setEmail] = useState("");

  return (
    <ContentStyle>
      <FormStyle>
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
          <input name="password" type="password" required placeholder="senha" />
        </label>
        <button>Entrar</button>
      </FormStyle>
      <Link to="/cadastro"><p>Não tem uma conta? Cadastre-se!</p></Link>
    </ContentStyle>
  );
};
