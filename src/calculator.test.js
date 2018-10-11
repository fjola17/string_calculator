//calculator.test.js
const add = require("./calculator");

it("should return return 0 on empty string", () => {
    expect(add("")).toBe(0);
});

it("should return the number inputed when there is only one number in the string", () => {
    expect(add("5")).toBe(5);
});