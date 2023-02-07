import reducer from "./boardSlice";

describe("boardSlice test", () => {
  test("should return the initial state", () => {
    const data = reducer(undefined, { type: undefined });
    expect(data.length).toBe(5);
  });
});
