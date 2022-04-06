import { mount } from "@vue/test-utils";
import Component from "../../src/components/login-component-sample";

describe("[component] login", () => {
  let wrapper;

  beforeEach( () => {
    wrapper = mount(Component);
  });

  test("Username and password input boxes should be visible", () => {

    expect(wrapper.find("input[data-test-id=username]").isVisible()).toBe(true);
    expect(wrapper.find("input[data-test-id=password]").isVisible()).toBe(true);

  });

  test("Forgot password link is displayed", () => {
    expect(wrapper.find("a[data-test-id=forgot_password_link]").isVisible()).toBe(true);
  });

  test("Login button should visible", () => {
    expect(wrapper.find("button[data-test-id=login_button]").isVisible()).toBe(true);
  });

  test('Login button calls the login function', async () => {

    const spy = jest.spyOn(wrapper.vm, 'login');
    await wrapper.vm.$forceUpdate()

    await wrapper.find('button[data-test-id=login_button]').trigger('click');

    expect(spy).toHaveBeenCalled();
  })
});
