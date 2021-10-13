import {Rule} from "rc-field-form/lib/interface";

export const rules = {
    login: [
        {required: true, message: 'Please input your login!', whitespace: true},
        {
            pattern: /^[A-Za-z0-9]{5,15}$/,
            message: 'Login must contain Latin letters and prime numbers, 5 to 15 characters'
        }
    ],

    password: [
        {required: true, message: 'Please input your password!'},
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
                    Promise.resolve() : Promise.reject(new Error('The two passwords that you entered do not match!'))
            },
        }),
    ],

    email: [
        {type: 'email', message: 'Wrong e-mail!!!'},
        {required: true, message: 'Please input your E-mail!'},
    ],

    birthday: [{required: true, message: 'Please input your Date of birth!'},]
} as Record<string, Rule[]>
