import { useSearchParams } from "react-router";
import NameForm from "./components/name-form";
import Envelope from "./components/envelope";
import { moneyToRupiah, nameToMoney } from "./utils/money";

function App() {
  const [params] = useSearchParams();

  const name = params.get("name")?.trim() ?? "";

  if (name.length > 0) {
    const money = nameToMoney(name);
    const stack = moneyToRupiah(money);

    return <Envelope rupiahStack={stack} />;
  }

  return <NameForm />;
}

export default App;
