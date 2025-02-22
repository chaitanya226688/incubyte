import Add from "./Add";

test("return 0 for empty string", () => {
    expect(Add("")).toBe(0);
});

test("returns the number itself if only one number is provided", () => {
    expect(Add("1")).toBe(1);
});

test("add two numbers seperated by comma", () => {
    expect(Add("1,2")).toBe(3);
});

test("add numbers seperated by comma and new line", () => {
    expect(Add("1,2\n3")).toBe(6);
});