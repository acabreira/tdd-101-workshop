import { mount } from "@vue/test-utils";
import Component from "../../src/components/login-component";

describe("[component] login", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(Component);
  });

  test("Login elements are visible", () => {
    expect(wrapper.find("input[data-test-id=username]").isVisible()).toBe(true);
    expect(wrapper.find("input[data-test-id=password]").isVisible()).toBe(true);
    expect(wrapper.find("button[data-test-id=login_button]").isVisible()).toBe(true);
  });

  test('Username and password inputs are empty', () => {

  });

});
