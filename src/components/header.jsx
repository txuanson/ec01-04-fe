// language: react
// path: src\components\navBar.jsx
import Logo from "../assets/EC01-04-logo.png";
import "./app.css"
import { Row, Col } from "antd";
// create a layout for the header component that will be used in the home page and has a logo at the left side and a welcome message at the right side of the navbar
const Header = () => {
    return (
        <>
        <Row>
            <Col span={5} >
                <img src={Logo} alt="logo" className="logo" />
            </Col>
            <Col span={2} offset={16}>
                <h1>Đăng nhập</h1>
                <p>Bạn cần giúp đỡ?</p>
            </Col>
        </Row>
        </>
    );
}
export default Header;