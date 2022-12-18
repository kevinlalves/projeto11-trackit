import { useContext } from "react";
import UserContext from "../contexts/UserContext";
import HeaderStyle from "../style/HeaderStyle";

export default function Header() {
  const { user } = useContext(UserContext);

  return (
    <HeaderStyle>
      <p>TrackIt</p>
      <img src={user.image} alt="user avatar" />
    </HeaderStyle>
  );
}
