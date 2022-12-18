import { useState } from "react";
import { FormStyle, ContentStyle } from "../../../style/FormStyle";
import { Link } from "react-router-dom";
import { signup } from "../../../services/trackit-api";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");

  const createAccount = async (e) => {
    e.preventDefault();
    const data = await signup(email, name, image, password);
    console.log(data);
  };

  return (
    <ContentStyle>
      <FormStyle onSubmit={createAccount}>
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
        <label>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            required placeholder="nome"
          />
        </label>
        <label>
          <input
            name="image"
            value={image}
            onChange={e => setImage(e.target.value)}
            type="url"
            required
            placeholder="foto"
          />
        </label>
        <button>Cadastrar</button>
      </FormStyle>
      <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
    </ContentStyle>
  );
};
