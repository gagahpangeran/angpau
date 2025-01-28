import { RupiahValue } from "../utils/money";
import MoneyFan from "./money-fan";

interface ResultProps {
  rupiahStack: RupiahValue[];
}

export default function Result({ rupiahStack }: ResultProps) {
  return (
    <div className="result">
      <MoneyFan rupiahStack={rupiahStack} />
    </div>
  );
}
