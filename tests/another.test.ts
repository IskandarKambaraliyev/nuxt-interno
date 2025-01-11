import { mount } from "@vue/test-utils";
import _hero from "../components/Section/Main/Hero/Hero.vue";

describe("import vue component", () => {
  test("normal imports as expected", async () => {
    expect(_hero).toBeTruthy();

    const wrapper = mount(_hero);
    expect(wrapper.find("h1").text()).toBe("Let Your Home Be Unique");
  });
});