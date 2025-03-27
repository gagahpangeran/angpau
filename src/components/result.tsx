import { RupiahValue } from "../utils/money";
import MoneyFan from "./money-fan";

interface ResultProps {
  rupiahStack: RupiahValue[];
}

export default function Result({ rupiahStack }: ResultProps) {
  return (
    <div className="result">
      <div className="result__link">
        <p>
          <a href="/">Get New THR</a>
        </p>
        <p>THR Online by GPR</p>
        <p>
          <a href="https://github.com/gagahpangeran/angpau/">Source Code</a>
        </p>
      </div>
      <MoneyFan rupiahStack={rupiahStack} />
    </div>
  );
}
