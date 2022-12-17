import FormStyle from "../../../style/FormStyle";

export default function Form({ onSubmit, email }) {
  return (
    <FormStyle>
      <Form onSubmit={onSubmit}>
        <label>
          <input name="email" value={email} type="email" required placeholder="email" />
        </label>
        <label>
          <input name="password" type="password" required placeholder="senha" />
        </label>
        <button>Entrar</button>
      </Form>
      <p>Não tem uma conta? Cadastre-se!</p>
    </FormStyle>
  );
};
