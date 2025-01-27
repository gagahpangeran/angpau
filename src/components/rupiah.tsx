import r100 from "/100.jpeg";
import r50 from "/50.jpeg";
import r20 from "/20.jpeg";
import r10 from "/10.jpeg";
import r5 from "/5.jpeg";
import r2 from "/2.jpeg";
import r1 from "/1.jpeg";
import classModifiers from "../utils/css";

const rupiahImg = {
  100: r100,
  50: r50,
  20: r20,
  10: r10,
  5: r5,
  2: r2,
  1: r1
};

export type RupiahValue = keyof typeof rupiahImg;

interface RupiahProps {
  rupiahValue: RupiahValue;
  modifier: string;
  onClick: () => void;
}

export default function Rupiah({
  rupiahValue,
  modifier,
  onClick
}: RupiahProps) {
  return (
    <img
      className={classModifiers("rupiah", modifier)}
      src={rupiahImg[rupiahValue]}
      onClick={onClick}
    />
  );
}
