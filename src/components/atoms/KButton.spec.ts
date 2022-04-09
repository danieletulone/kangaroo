import { describe, it, expect } from "vitest";
import { createWrapper } from "@/utils/tests";

import KButton from "@/components/atoms/KButton.vue";

describe("KButton", () => {
  it("renders properly", () => {
    const wrapper = createWrapper(KButton, {
      slots: { default: "Hello Vitest" },
    });

    expect(wrapper.text()).toContain("Hello Vitest");
  });
});
