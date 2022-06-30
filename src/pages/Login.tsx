import React, { useState } from "react";
import { Col, Divider, Form, Input, Row } from "antd";
import useAppDispatch from "../hooks/useAppDispatch";
import { userLogin } from "../redux/reducer/auth.slice";

export default function Login() {
    const [mEmail, setEmail] = useState("");
    const [mPassword, setPassword] = useState("");

    const dispatch = useAppDispatch();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(userLogin({ mEmail, mPassword }))
    }
    return (
        <Row className="md:bg-primary md:p-20 lg:px-60 xl:px-80" gutter={16}>
            <Col md={12}>
                logo
            </Col>
            <Col span={24} md={12}>
                <div className="bg-white p-8 md:rounded-lg">
                    <h4 className="text-xl font-bold text-center mb-4">Đăng nhập</h4>
                    <Form onSubmitCapture={handleLogin}>
                        <Form.Item>
                            <Input placeholder="Email"
                                type="email"
                                name="email"
                                required
                                autoComplete="off"
                                onChange={(e) => setEmail(e.target.value)}
                                value={mEmail}
                                className="p-2 rounded-lg border-primary" />
                        </Form.Item>
                        <Form.Item>
                            <Input.Password placeholder="Password"
                                type="password"
                                name="password"
                                required
                                autoComplete="off"
                                onChange={(e) => setPassword(e.target.value)}
                                value={mPassword}
                                className="p-2 rounded-lg border-primary" />
                        </Form.Item>
                        <Form.Item className="mb-0">
                            <button type="submit" className="block w-full py-1.5 px-2 bg-primary text-lg font-bold uppercase rounded-lg">
                                Đăng nhập
                            </button>
                        </Form.Item>
                        <a className="text-primary">Quên mật khẩu</a>
                        {/* <Link to="/forgot">
                            </Link> */}
                        <Divider style={{ borderTopColor: '#D9ADAD', margin: 0 }}>
                            logo
                        </Divider>
                    </Form>
                </div>
            </Col>
        </Row>
    );
}