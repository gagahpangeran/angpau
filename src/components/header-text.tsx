import { nameToMoney } from "../utils/money";

interface HeaderTextProps {
  name: string;
  currentMoney: number;
  result: boolean;
}

const formatter = new Intl.NumberFormat("id-ID", {
  style: "currency",
  currency: "IDR"
});

export default function HeaderText({
  name,
  currentMoney,
  result
}: HeaderTextProps) {
  const money = result ? nameToMoney(name) : currentMoney;

  return (
    <header className="header-text">
      {name.length > 0 ? (
        <>
          <h1>THR for {name}</h1>
          <h2>{formatter.format(money * 1000)}</h2>
        </>
      ) : (
        <>
          <h1>THR Online</h1>
          <h2>by GPR</h2>
        </>
      )}
    </header>
  );
}
