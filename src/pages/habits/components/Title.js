import { useState } from "react";
import TitleStyle from "../../../style/TitleStyle";

export default function Title({ creatingHabit, setCreatingHabit }) {
  return (
    <>
      <TitleStyle>
        <div>
          <p>Meus hábitos</p>
        </div>
        <button onClick={() => setCreatingHabit(true)}>
          +
        </button>
      </TitleStyle>
    </>

  );
}
