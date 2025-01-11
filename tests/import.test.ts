import { describe, test, expect } from "vitest";

describe("import vue component", () => {
  test("normal imports as expected", async () => {
    const cmp = await import("../components/Section/Main/Hero/Hero.vue");
    expect(cmp.default).toBeDefined();
  });
});
