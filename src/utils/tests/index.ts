import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { fn } from "vitest";

type CreateWrapper = typeof mount;

export const createWrapper: CreateWrapper = function (component: any, options: any) {
  const wrapper = mount(component, {
    global: {
      plugins: [createTestingPinia({ createSpy: fn })],
    },
    ...options,
  });

  return wrapper;
};
