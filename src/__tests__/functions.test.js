import { add } from "../utils/functions";

test("correctly adds two numbers", () => {
  expect(add(1, 2)).toBe(3);
});

test("correctly adds two numbers that are strings", () => {
  expect(add("1", "2")).toBe(3);
});

test("returns nan if two strings are passed", () => {
  expect(add("aaaa", "bbbbb")).toBeNaN();
});
