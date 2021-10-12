import {Rule} from "rc-field-form/lib/interface";

const patterns = {
    letters: /^[a-zA-Z]+$/
}

const messages = {
    login: 'Login must contain Latin letters and prime numbers, 5 to 15 characters',
    password: 'Password must contain Latin letters, prime numbers, from 6 to 11 symbols'
}

export const rules = {
    login: [
        {required: true, message: 'Please input your login!', whitespace: true},
        {min: 3, max: 20, message: messages.login},
        {pattern: patterns.letters, message: messages.login}],

    password: [
        {required: true, message: 'Please input your password!'},
        {min: 6, max: 6, message: messages.password},
        {pattern: patterns.letters, message: messages.password}
    ],

    confirmPassword: [
        {required: true, message: 'Please confirm your password!'},
        ({getFieldValue}) => ({
            validator(_, value) {
                if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                }
                return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
        }),
    ],

    email: [
        {type: 'email', message: 'Wrong e-mail!!!'},
        {required: true, message: 'Please input your E-mail!'},
    ]
} as Record<string, Rule[]>
