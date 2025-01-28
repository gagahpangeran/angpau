import { Chance } from "chance";

const rupiahValues = [100, 50, 20, 10, 5, 2, 1] as const;

export type RupiahValue = (typeof rupiahValues)[number];

export function nameToMoney(name: string) {
  const moneySplit = [
    { min: 1, max: 500 },
    { min: 501, max: 1000 },
    { min: 1001, max: 2000 }
  ];
  const weight = [1000, 100, 1];

  const rng = new Chance(name);
  const bound = rng.weighted(moneySplit, weight);
  const money = rng.integer(bound);

  return money;
}

export function moneyToRupiah(money: number): RupiahValue[] {
  return rupiahValues
    .map(val => {
      const cnt = Math.floor(money / val);
      money = money % val;
      return Array(cnt)
        .fill(null)
        .map(_ => val);
    })
    .flat();
}
