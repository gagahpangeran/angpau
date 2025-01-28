import { useSearchParams } from "react-router";
import NameForm from "./components/name-form";
import Envelope from "./components/envelope";
import { moneyToRupiah, nameToMoney } from "./utils/money";
import Result from "./components/result";

function App() {
  const [params] = useSearchParams();

  const name = params.get("name")?.trim() ?? "";
  const showResult = params.get("result") === "1";

  if (name.length > 0) {
    const money = nameToMoney(name);
    const stack = moneyToRupiah(money);

    if (showResult) {
      return <Result rupiahStack={stack} />;
    }

    return <Envelope rupiahStack={stack} />;
  }

  return <NameForm />;
}

export default App;
