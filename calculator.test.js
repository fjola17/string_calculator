//calculator.test.js
const add = require("./calculator");

it("should return return 0 on empty string", () => {
    expect(add("")).toBe(0);
});