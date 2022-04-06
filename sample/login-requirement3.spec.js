import { mount } from '@vue/test-utils'
import Component from '../../src/components/login-component'
import router  from '@/composables/router'
import validateUserAPI from "@/composables/validateUserAPI";

jest.mock('@/composables/router')
jest.mock('@/composables/validateUserAPI', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        success: true,
        permission: 'Admin'
    })),
}))

describe("[component] login", () => {
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = mount(Component);
    });

    test("Login elements are visible", () => {
        expect(wrapper.find("input[data-test-id=username]").isVisible()).toBe(true);
        expect(wrapper.find("input[data-test-id=password]").isVisible()).toBe(true);
        expect(wrapper.find("button[data-test-id=login_button]").isVisible()).toBe(true);
    });

    test('Username and password inputs are empty', () => {
        expect(wrapper.find("input[data-test-id=username]").text()).toEqual('');
        expect(wrapper.find("input[data-test-id=password]").text()).toEqual('');
    });

    test('Submit credentials that dont match displays an error', async () => {

        validateUserAPI.mockImplementation(() => ({
            success: false,
            msg: 'Incorrect username and password'
        }))

        wrapper.find('[data-test-id="username"]').setValue('Admin');
        wrapper.find('[data-test-id="password"]').setValue('wrong password');

        await wrapper.find('[data-test-id="login_button"]').trigger('click');

        expect(wrapper.find('[data-test-id="error_message"]').exists()).toBeTruthy();
        expect(wrapper.find('[data-test-id="error_message"]').text()).toEqual('Incorrect username and password');

    });

    test('Submit empty credentials displays an error', async () => {

    });

    test('Submit credentials that dont match displays an error', async () => {

        validateUserAPI.mockImplementation(() => ({
            success: false,
            msg: 'Incorrect username and password'
        }))

        wrapper.find('[data-test-id="username"]').setValue('Admin');
        wrapper.find('[data-test-id="password"]').setValue('wrong password');

        await wrapper.find('[data-test-id="login_button"]').trigger('click');

        expect(wrapper.find('[data-test-id="error_message"]').exists()).toBeTruthy();
        expect(wrapper.find('[data-test-id="error_message"]').text()).toEqual('Incorrect username and password');

    });

    test('Submit empty credentials displays an error', async () => {

    });

    test('Admin login redirects to /adminHomepage', async () => {

        validateUserAPI.mockImplementation(() => ({
            success: true,
            permission: 'Admin'
        }))
        const spy = jest.spyOn(wrapper.vm, 'login')
        await wrapper.vm.$forceUpdate()

        wrapper.find('[data-test-id="username"]').setValue('Admin');
        wrapper.find('[data-test-id="password"]').setValue('password');

        await wrapper.find('[data-test-id="login_button"]').trigger('click');

        expect(spy).toHaveBeenCalled();
        expect(validateUserAPI).toHaveBeenCalled();

        expect(router).toHaveBeenCalledWith('/adminHomepage');
    });

    test('Employee login redirects to /homepage', async () => {


    });
});

