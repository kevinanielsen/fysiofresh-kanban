import App from "@/App.vue";
import { shallowMount } from "@vue/test-utils";

describe("App view", () => {
  it("renders without crashing", () => {
    const wrapper = shallowMount(App);
    expect(wrapper.html()).toBeTruthy();
  });
});