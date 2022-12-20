import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import loading from "../assets/loading.gif";
import { useContext } from "react";
import UserContext from "../contexts/UserContext";


export default function Loading() {
  const { user } = useContext(UserContext);

  return user ? (
    <>
      <Header />
      <LoadingBack>
        <img
          src={loading}
          alt="Loading..."
        />
      </LoadingBack>
      <Footer />
    </>
  ) : null;
}

const LoadingBack = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.color.main};
  display: flex;
  align-items: center;
  justify-content: center;
`;
