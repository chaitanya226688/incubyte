import Add from "./Add";

test("return 0 for empty string", () => {
    expect(Add("")).toBe(0);
});

test("returns the number itself if only one number is provided", () => {
    expect(Add("1")).toBe(1);
});