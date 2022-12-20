import styled from "styled-components";


const FormStyle = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${props => props.theme.color.secondary};
  input {
    margin-bottom: 6px;
    width: 303px;
    height: 45px;
    padding-left: 10px;
    font-size: 20px;
    border: 1px ${props => props.theme.color.input} solid;
    border-radius: 5px;
  }
  input::placeholder {
    color: ${props => props.theme.color.input};
  }
  button {
    border: none;
    background-color: ${props => props.theme.color.main};
    color: ${props => props.theme.color.secondary};
    border-radius: 5px;
    width: 303px;
    height: 45px;
    margin-bottom: 25px;
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const ContentStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  p {
    font-size: 14px;
    color: ${props => props.theme.color.main};
    text-decoration: underline;
  }
`

export { FormStyle, ContentStyle };
