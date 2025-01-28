import { RupiahValue } from "../utils/money";
import Rupiah from "./rupiah";

interface MoneyFanProps {
  rupiahStack: RupiahValue[];
}

export default function MoneyFan({ rupiahStack }: MoneyFanProps) {
  const stack = [...rupiahStack].reverse();

  return (
    <div
      className="money-fan"
      style={{ "--length": stack.length } as React.CSSProperties}
    >
      <div className="money-fan__wrapper">
        {stack.map((value, index) => (
          <div
            key={`${index}-${value}`}
            className="money-fan__item"
            style={{ "--index": index } as React.CSSProperties}
          >
            <Rupiah rupiahValue={value} />
          </div>
        ))}
      </div>
    </div>
  );
}
