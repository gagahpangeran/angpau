import { Chance } from "chance";

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
