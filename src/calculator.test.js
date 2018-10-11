//calculator.test.js
const add = require("./calculator");

it("should return return 0 on empty string", () => {
    expect(add("")).toBe(0);
});

it("should return the number inputed when there is only one number in the string", () => {
    expect(add("5")).toBe(5);
});

it("should return sum of two given numbers", () => {
    expect(add("1,2")).toBe(3);
});

it("should sum multiple numbers", () => {
    expect(add("1,2,3")).toBe(6);
});

it("should be able to be able to handle unknown arguments of numbers", () => {
    expect(add("1,2,3,4,5")).toBe(15);
});

it("should return sum of array if a new line is added", () => {
    expect(add("1\n2,3")).toBe(6);
});

it("Should return sum of new line", () => {
    expect(add("1\n3")).toBe(4);
});

it("should return Error if negative", () => {
    expect(add("1,-3")).toBe("Negatives not allowed: -3");
}); 

it("should be able to handle multiple negatives" , () => {
    expect(add("1,-3,5,-7")).toBe("Negatives not allowed: -3 -7");
}); 

it("Should ignore numbers larger than 1000", () => {
    expect(add("2,1020")).toBe(2);
});
it("Should be able to handle a different delimeter", () => {
    expect(add("//;\n1;2")).toBe(3);
});