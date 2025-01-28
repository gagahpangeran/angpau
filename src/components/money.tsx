import { useState } from "react";
import classModifiers from "../utils/css";
import Rupiah from "./rupiah";
import { type RupiahValue } from "../utils/money";

interface MoneyStack {
  value: RupiahValue;
  modifier: number;
}

interface MoneyProps {
  state: "open" | "close";
  rupiahStack: RupiahValue[];
}

export default function Money({ state, rupiahStack }: MoneyProps) {
  const stack: MoneyStack[] = rupiahStack.map((value, idx, arr) => {
    const modifier = Math.min(arr.length - idx, 3);
    return { value, modifier };
  });

  const [currentStack, setCurrentStack] = useState<MoneyStack[]>(stack);

  const handleClick = (idx: number) => {
    const nextStack = [...currentStack];

    for (let i = idx; i >= Math.max(idx - 2, 0); i--) {
      nextStack[i].modifier = Math.max(nextStack[i].modifier - 1, 0);
    }

    setCurrentStack(nextStack);
  };

  return (
    <div className={classModifiers("money", state)}>
      {currentStack.map(({ value, modifier }, idx) => (
        <Rupiah
          key={`${idx}-${value}`}
          rupiahValue={value}
          modifier={`${modifier}`}
          onClick={() => handleClick(idx)}
        />
      ))}
    </div>
  );
}
