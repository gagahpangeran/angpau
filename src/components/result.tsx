import { RupiahValue } from "../utils/money";
import MoneyFan from "./money-fan";

interface ResultProps {
  rupiahStack: RupiahValue[];
}

export default function Result({ rupiahStack }: ResultProps) {
  return (
    <div className="result">
      <a href="/">Get new angpau</a>
      <MoneyFan rupiahStack={rupiahStack} />
    </div>
  );
}
