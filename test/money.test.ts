import { expect, test } from "vitest";
import { nameToMoney } from "../src/utils/money";

test("string 'abc' to money", () => {
  const res = nameToMoney("abc");
  expect(res).toBe(565);
});

test("string 'budi' to money", () => {
  const res = nameToMoney("Budi");
  expect(res).toBe(443);
});
