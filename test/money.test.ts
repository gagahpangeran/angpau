import { expect, test } from "vitest";
import { moneyToRupiah, nameToMoney } from "../src/utils/money";

test("string 'abc' to money", () => {
  const res = nameToMoney("abc");
  expect(res).toBe(13);
});

test("string 'budi' to money", () => {
  const res = nameToMoney("Budi");
  expect(res).toBe(89);
});

test("string 'Muhammad Ardana' to money", () => {
  const res = nameToMoney("Muhammad Ardana");
  expect(res).toBe(420);
});

test("string 'Audrey Brown' to money", () => {
  const res = nameToMoney("Audrey Brown");
  expect(res).toBe(2624);
});

test("'443' money to rupiah", () => {
  const res = moneyToRupiah(443);
  expect(res).toStrictEqual([100, 100, 100, 100, 20, 20, 2, 1]);
});

test("'88' money to rupiah", () => {
  const res = moneyToRupiah(88);
  expect(res).toStrictEqual([50, 20, 10, 5, 2, 1]);
});
