import { useState } from "react";
import classModifiers from "../utils/css";
import Rupiah, { type RupiahValue } from "./rupiah";

interface MoneyStack {
  value: RupiahValue;
  modifier: number;
}

const stack: MoneyStack[] = [
  { value: 100, modifier: 3 },
  { value: 50, modifier: 3 },
  { value: 20, modifier: 3 },
  { value: 10, modifier: 3 },
  { value: 5, modifier: 3 },
  { value: 2, modifier: 2 },
  { value: 1, modifier: 1 }
];

export default function Money({ state }: { state: string }) {
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
      {stack.map(({ value, modifier }, idx) => (
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
