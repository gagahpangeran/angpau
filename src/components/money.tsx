import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
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
  addHeaderMoney: (money: number) => void;
}

export default function Money({
  state,
  rupiahStack,
  addHeaderMoney
}: MoneyProps) {
  const stack: MoneyStack[] = rupiahStack.map((value, idx, arr) => {
    const modifier = Math.min(arr.length - idx, 3);
    return { value, modifier };
  });

  const navigate = useNavigate();
  const location = useLocation();

  const [currentStack, setCurrentStack] = useState<MoneyStack[]>(stack);

  const handleClick = (idx: number) => {
    const nextStack = [...currentStack];

    for (let i = idx; i >= Math.max(idx - 2, 0); i--) {
      nextStack[i].modifier = Math.max(nextStack[i].modifier - 1, 0);
    }

    addHeaderMoney(currentStack[idx].value);
    setCurrentStack(nextStack);

    if (idx == 0) {
      const resultUrl = location.pathname + location.search + "&result=1";

      setTimeout(() => {
        void navigate(resultUrl);
      }, 600);
    }
  };

  return (
    <div className={classModifiers("money", state)}>
      {currentStack.map(({ value, modifier }, idx) => (
        <div
          key={`${idx}-${value}`}
          className={classModifiers("money__item", `${modifier}`)}
          onClick={() => handleClick(idx)}
        >
          <Rupiah rupiahValue={value} />
        </div>
      ))}
    </div>
  );
}
