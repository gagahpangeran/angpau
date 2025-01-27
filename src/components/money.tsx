import classModifiers from "../utils/css";
import Rupiah from "./rupiah";

export default function Money({ state }: { state: string }) {
  return (
    <div className={classModifiers("money", state)}>
      <Rupiah />
    </div>
  );
}
