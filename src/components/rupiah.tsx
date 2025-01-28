import { type RupiahValue } from "../utils/money";
import classModifiers from "../utils/css";

interface RupiahProps {
  rupiahValue: RupiahValue;
}

export default function Rupiah({ rupiahValue }: RupiahProps) {
  return (
    <img
      className={classModifiers("rupiah", `${rupiahValue}`)}
      src={`/img/${rupiahValue}.jpeg`}
    />
  );
}
