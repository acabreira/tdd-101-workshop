import { mount } from "@vue/test-utils";
import Component from "../../src/components/login-component";

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

  test('Clicking login button emits a login event', async () => {

    const spy = jest.spyOn(wrapper.vm, 'login');
    await wrapper.vm.$forceUpdate()

    await wrapper.find('button[data-test-id=login_button]').trigger('click');

    expect(spy).toHaveBeenCalled();
  })

  test.skip('Clicking login button with credentials dont match displays an error', () => {})
  test.skip('Clicking login button with empty credentials displays an error', () => {})
  test.skip('Clicking login button with valid credentials displays a success message', () => {})
  test.skip('Clicking Forgot Password link opens a modal', () => {})
});
