import { mount } from '@vue/test-utils';
import Component from '../../src/components/login-component';

describe('[component] login', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(Component);
  });

  test('Login elements are visible', () => {

    expect(wrapper.find('input[data-test-id=username]').isVisible()).toBe(true);

    //Add verification for other elements: password and login button should be visible

  });

  //Based on requirement 1, we are still missing a test



});

