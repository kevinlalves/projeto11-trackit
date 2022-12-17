import { CircularProgressbar } from "react-circular-progressbar";
import ProgressStyle from "../style/ProgressStyle";

export default function Progress({ text, percentage }) {
  return (
    <ProgressStyle>
      <CircularProgressbar value={percentage} text={text} />
    </ProgressStyle>
  );
}
