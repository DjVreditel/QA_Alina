import React from 'react';
import {Button, DatePicker, Form, Input} from 'antd';
import moment from 'moment';
import {formItemLayout, tailFormItemLayout} from "./formSettings";
import {rules} from "./rules";


const Registration = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log('Received values of form: ', values);
    };

    return (
        <Form{...formItemLayout} form={form} name="register" onFinish={onFinish}>

            <Form.Item name="login" label="Login" rules={rules.login}>
                <Input/>
            </Form.Item>

            <Form.Item name="password" label="Password" rules={rules.password} hasFeedback>
                <Input.Password/>
            </Form.Item>

            <Form.Item name="confirm" label="Confirm Password" dependencies={['password']}
                       rules={rules.confirmPassword} hasFeedback>
                <Input.Password/>
            </Form.Item>

            <Form.Item name="email" label="E-mail" rules={rules.email}>
                <Input/>
            </Form.Item>

            <Form.Item name="name" label="Name">
                <Input/>
            </Form.Item>

            <Form.Item name="lastName" label="LastName">
                <Input/>
            </Form.Item>

            <Form.Item name="birthday" label="Date of birth" rules={rules.birthday}>
                <DatePicker
                    disabledDate={current => current &&
                        (current > moment().endOf('day') || current < moment('1970'))}
                    format="DD/MM/yyyy"/>
            </Form.Item>

            <Form.Item {...tailFormItemLayout}>
                <Button type="primary" htmlType="submit"> Register </Button>
            </Form.Item>
        </Form>
    );
};

export default Registration
