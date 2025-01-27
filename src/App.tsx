import { useSearchParams } from "react-router";
import NameForm from "./components/name-form";
import Envelope from "./components/envelope";

function App() {
  const [params] = useSearchParams();

  const name = params.get("name")?.trim() ?? "";

  if (name.length > 0) {
    return <Envelope />;
  }

  return <NameForm />;
}

export default App;
