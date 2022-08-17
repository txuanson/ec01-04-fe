import React from "react";
import "./app.css";
import logo from "../../assets/EC01-04-logo.png";

function AuthHeader() {
  return (
    <>
      <div className="body bg-white-100">
        <div className="container flex-row space-between">
          <a href="HomePage">
            <img src={logo} alt="logo" className="logo-full" />
          </a>

          <div className="flex-col auth-header">
            <div className="auth-title text-black-100" id="auth-title">
              Đăng nhập
            </div>
            <button className="auth-subtitle text-pink-100">
              Bạn cần giúp đỡ?
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AuthHeader;
