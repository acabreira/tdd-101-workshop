import { mount } from '@vue/test-utils'
import Component from '@/components/login-component'
import validateUserAPI from '@/composables/validateUserAPI';

jest.mock('@/composables/router')
jest.mock('@/composables/validateUserAPI', () => ({
    __esModule: true,
    default: jest.fn(() => ({
        success: true,
        permission: 'Admin'
    })),
}))

describe('[component] login', () => {
    let wrapper;

    beforeEach(() => {
        jest.clearAllMocks()
        wrapper = mount(Component);
    });

    test('Login elements are visible', () => {
        expect(wrapper.find('input[data-test-id=username]').isVisible()).toBe(true);
        expect(wrapper.find('input[data-test-id=password]').isVisible()).toBe(true);
        expect(wrapper.find('button[data-test-id=login_button]').isVisible()).toBe(true);
    });

    //Based on requirement 1, we are still missing a test

    test('Submitting incorrect credentials displays an error', async () => {

        validateUserAPI.mockImplementation(() => ({
            success: false,
            msg: 'Incorrect username and password'
        }))

        wrapper.find('[data-test-id=username]').setValue('Admin');
        //insert incorrect password value here

        //insert click button here

        expect(wrapper.find('[data-test-id=error_message]').exists()).toBeTruthy();
        expect(wrapper.find('[data-test-id=error_message]').text()).toEqual('Incorrect username and password');

    });

    //Based on requirement 2, what other tests can we write to fulfill the requirement?

    test('Admin login redirects to /adminHomepage', async () => {

        validateUserAPI.mockImplementation(() => ({
            success: true,
            permission: 'Admin'
        }))
        const spy = jest.spyOn(wrapper.vm, 'login')
        await wrapper.vm.$forceUpdate()

        //set username and password

        //click login button

        expect(spy).toHaveBeenCalled();
        expect(validateUserAPI).toHaveBeenCalled();

        expect(router).toHaveBeenCalledWith('/adminHomepage');
    });

    //Write the missing test here
});