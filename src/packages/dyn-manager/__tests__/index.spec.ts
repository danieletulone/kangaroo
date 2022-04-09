import { createDyn, DynManager } from "@/packages/dyn-manager";
import { describe, test, expect } from "vitest";

describe("dyn", () => {
  test("create dyn manager", () => {
    const dyn1 = createDyn();
    expect(dyn1).toBeInstanceOf(DynManager);
  });
});
