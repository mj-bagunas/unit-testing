const calculator = require("./javascript_function");

test("Check if add function is working", () => {
  expect(calculator.add(10, 5)).toBe(15);
});

test("Check if subtract function is working", () => {
  expect(calculator.subtract(10, 5)).toBe(5);
});

test("Check if multiply function is working", () => {
  expect(calculator.multiply(10, 5)).toBe(50);
});

test("Check if divide function is working", () => {
  expect(calculator.divide(10, 5)).toBe(2);
});
