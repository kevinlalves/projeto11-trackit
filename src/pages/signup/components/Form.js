import FormStyle from "../../../style/FormStyle";

export default function Form({ onSubmit, email, name, image }) {
  return (
    <FormStyle>
      <Form onSubmit={onSubmit}>
        <label>
          <input name="email" value={email} type="email" required placeholder="email" />
        </label>
        <label>
          <input name="password" type="password" required placeholder="senha" />
        </label>
        <label>
          <input name="name" value={name} type="text" required placeholder="nome" />
        </label>
        <label>
          <input name="image" value={image} type="url" required placeholder="foto" />
        </label>
        <button>Cadastrar</button>
      </Form>
      <p>Já tem uma conta? Faça login!</p>
    </FormStyle>
  );
};
