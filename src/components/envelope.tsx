import { useState } from "react";
import classModifiers from "../utils/css";
import Money from "./money";
import { RupiahValue } from "../utils/money";

type EnvelopeState = "open" | "close";

interface EnvelopeProps {
  rupiahStack: RupiahValue[];
  addHeaderMoney: (money: number) => void;
}

export default function Envelope({
  rupiahStack,
  addHeaderMoney
}: EnvelopeProps) {
  const [envelopeState, setEnvelopeState] = useState<EnvelopeState>("close");

  const handleClick = () => {
    setEnvelopeState("open");
  };

  return (
    <div
      className={classModifiers("envelope", envelopeState)}
      onClick={handleClick}
    >
      <div className="envelope__cover-front">
        <div className={classModifiers("envelope__top", envelopeState)}>
          <div className="envelope__top-cover" />
          <div className="envelope__top-cover envelope__top-cover--inside" />
        </div>
        <Money
          state={envelopeState}
          rupiahStack={rupiahStack}
          addHeaderMoney={addHeaderMoney}
        />
        <div className="envelope__cover-back" />
      </div>
      <div className="envelope__cover-front envelope__cover-front--inside" />
    </div>
  );
}
