import { useState } from "react";
import { FormStyle, ContentStyle } from "../../../style/FormStyle";
import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../../services/trackit-api";
import { handleError } from "../../../constants/utils";
import { ThreeDots } from "react-loader-spinner";

export default function Form() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const navigate = useNavigate();

  const createAccount = async (e) => {
    e.preventDefault();
    setDisabled(true);
    const { message, details } = await signup(email, name, image, password);
    if (message) {
      handleError(message, details);
      setDisabled(false);
      return;
    }

    navigate("/");
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
            disabled={disabled}
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
            disabled={disabled}
          />
        </label>
        <label>
          <input
            name="name"
            value={name}
            onChange={e => setName(e.target.value)}
            type="text"
            required
            placeholder="nome"
            disabled={disabled}
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
            disabled={disabled}
          />
        </label>
        <button disabled={disabled}>
          {<ThreeDots
            height="80"
            width="80"
            radius="9"
            color="#ffffff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={disabled}
          />}
          {!disabled && "Cadastrar"}
        </button>
      </FormStyle>
      <Link to="/"><p>Já tem uma conta? Faça login!</p></Link>
    </ContentStyle>
  );
};
