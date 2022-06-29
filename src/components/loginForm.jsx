// // import { Col, Row } from 'antd';
// // import Logo from "../assets/EC01-04-logo.png";

// // const loginForm = () => {
// //     <>
// //     <Row>
// //       <Col flex={2}>
// //         <img src={Logo} alt="logo" className="logo" />
// //       </Col>
// //       <Col flex={3}>3 / 5</Col>
// //     </Row>
// //     </>
// // }
// // export default loginForm;
// import React, { useState } from "react";
// import { get, post } from "../api/index";
// import { message } from "antd";
// import { Link } from "react-router-dom";
// import useQuery from "../utils/query";

// export function LoginForm() {
//     const query = useQuery();
//     const [username, setEnterUsername] = useState("");
//     const [password, setEnterPass] = useState("");
//     const usernameChangeHandler = (event) => {
//       setEnterUsername(event.target.value);
// };
// const passChangeHandler = (event) => {
//     setEnterPass(event.target.value);
// };
// const submitHandler = (event) => {
//     event.preventDefault();
//     post("/login", {
//         username: username,
//         password: password,
//     })
//         .then((res) => {
//             if (res.status === 200) {
//                 message.success("Đăng nhập thành công");
//                 query.set("username", username);
//                 query.set("password", password);
//                 window.location.href = "/";
//             } else {
//                 message.error("Đăng nhập thất bại");
//             }
//         })
//         .catch((err) => {
//             message.error("Đăng nhập thất bại");
//         }
//         );
// }
//     return (
//         <>
//         <div className="login-form">
//             <div className="login-form-header">
//                 <h1>Đăng nhập</h1>
//                 <p>Bạn cần giúp đỡ?</p>
//             </div>
//             <div className="login-form-body">
//                 <form onSubmit={submitHandler}>
//                     <div className="login-form-input">
//                         <label htmlFor="username">Tài khoản</label>
//                         <input
//                             type="text"
//                             id="username"
//                             value={username}
//                             onChange={usernameChangeHandler}
//                             required
//                         />
//                     </div>
//                     <div className="login-form-input">
//                         <label htmlFor="password">Mật khẩu</label>
//                         <input
//                             type="password"
//                             id="password"
//                             value={password}
//                             onChange={passChangeHandler}
//                             required
//                         />
//                     </div>
//                     <div className="login-form-submit">
//                         <button type="submit">Đăng nhập</button>
//                     </div>
//                 </form>
//             </div>
//         </div>
//         <div className="login-form-footer">
//             <p>Bạn chưa có tài khoản?</p>
//             <Link to="/register">Đăng ký</Link>
//         </div>
//         </>
//     );
// }
// export default LoginForm;