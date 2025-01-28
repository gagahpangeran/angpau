import { useSearchParams } from "react-router";
import NameForm from "./components/name-form";
import Envelope from "./components/envelope";
import { moneyToRupiah, nameToMoney } from "./utils/money";
import Result from "./components/result";
import HeaderText from "./components/header-text";
import { useState } from "react";

function App() {
  const [params] = useSearchParams();

  const [headerMoney, setHeaderMoney] = useState(0);
  const addHeaderMoney = (money: number) => {
    setHeaderMoney(prev => prev + money);
  };

  const name = params.get("name")?.trim() ?? "";
  const showResult = params.get("result") === "1";

  let screen = <NameForm />;

  if (name.length > 0) {
    const money = nameToMoney(name);
    const stack = moneyToRupiah(money);

    if (showResult) {
      screen = <Result rupiahStack={stack} />;
    } else {
      screen = <Envelope rupiahStack={stack} addHeaderMoney={addHeaderMoney} />;
    }
  }

  return (
    <>
      <HeaderText name={name} currentMoney={headerMoney} result={showResult} />
      {screen}
    </>
  );
}

export default App;
