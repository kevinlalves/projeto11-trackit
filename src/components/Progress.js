import { useContext } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import ProgressContext from "../contexts/ProgressContext";
import color from "../constants/colors";
import ProgresStyle from "../style/ProgressStyle";

export default function Progress({ text }) {
  const { progress } = useContext(ProgressContext);

  return (
    <ProgresStyle>
      <CircularProgressbar
        value={progress}
        background
        backgroundPadding={6}
        styles={buildStyles({
          backgroundColor: color.main,
          pathColor: color.secondary,
          trailColor: "transparent",
        })}
      />
      <p>{text}</p>
    </ProgresStyle>
  );
}
