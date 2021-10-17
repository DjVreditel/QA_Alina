import {Rule} from "rc-field-form/lib/interface";

export const rules = {
    login: [
        {required: true, message: 'Enter login', whitespace: true},
        {
            pattern: /^[A-Za-z0-9]{4,15}$/,
            message: 'Login must contain Latin letters and prime numbers, 4 to 15 characters'
        }
    ],

    password: [
        {required: true, message: 'Enter password'},
        {
            pattern: /^[A-Za-z0-9]{6,10}$/,
            message: 'Password must contain Latin letters, prime numbers, from 6 to 10 symbols'
        },
    ],

    confirmPassword: [
        {required: true, message: 'Please confirm your password!'},
        ({getFieldValue}) => ({
            validator(_, value) {
                return !value || getFieldValue('password') === value ?
                    Promise.resolve() : Promise.reject(new Error('Wrong re-entry password'))
            },
        }),
    ],

    email: [
        {type: 'email', message: 'Select email address'},
        {required: true, message: 'Please input your E-mail!'},
    ],

    birthday: [{required: true, message: 'Enter date of birth'},]
} as Record<string, Rule[]>
