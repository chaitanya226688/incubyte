import Add from "./Add";

test("return 0 for empty string", () => {
    expect(Add("")).toBe(0);
});