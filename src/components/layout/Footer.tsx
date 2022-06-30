import React from "react";
import "./app.css"
import { Col, Row, Typography } from 'antd';
const { Title } = Typography;

const Footer = () => {
    return (
        <>
            <Row justify="space-evenly" align="top">
                <Col span={4}>
                    <Title level={4}>THÔNG TIN LIÊN HỆ</Title>
                    <p>Địa chỉ:</p>
                    <p>Điện thoại:</p>
                    <p>Email:</p>
                    <p>Website:</p>
                </Col>
                <Col span={4}>
                    <Title level={4}>HỖ TRỢ KHÁCH HÀNG</Title>
                    <p>Hướng dẫn Đặt hàng</p>
                    <p>Chính sách Thanh toán</p>
                    <p>Chính sách Giao nhận hàng</p>
                    <p>Chính sách Đổi trả hàng</p>
                    <p>Chính sách Bảo mật thông tin</p>
                </Col>
                <Col span={4}>
                    <Title level={4}>HỆ THỐNG CỬA HÀNG</Title>
                    <p>Huimitu tại Hồ Chí Minh</p>
                    <p>Huimitu tại Hà Nội</p>
                    <p>Huimitu tại Đà Nẵng</p>
                    <p>Huimitu tại Cần Thơ</p>
                    <p>Huimitu tại Hải Phòng</p>
                </Col>
                <Col span={4}>
                    <Title level={4}>TÀI KHOẢN</Title>
                    <p>Facebook</p>
                    <p>Instagram</p>
                    <p>Twitter</p>
                    <p>Youtube</p>
                </Col>
            </Row>
            <Row justify="center" align="top">
                <p>Copyright &copy; HUIMITU. Web design by EC01-04. All rights reserved.</p>
            </Row>
        </>
    )
}
export default Footer;