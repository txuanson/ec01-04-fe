import React from "react";
import "./app.css";
import logo from "../../assets/EC01-04-logo.png";

function Header2() {
  return (
    <>
      <div className="body bg-pink-100 text-white-100" id="top-bar">
        <div className="container row-item top-bar">
          <div className="social-media">
            <a href="#">
              <img src="" alt="fb" className="ic-social" />
            </a>
            <a href="#">
              <img src="" alt="ig" className="ic-social" />
            </a>
            <a href="#">
              <img src="" alt="tw" className="ic-social" />
            </a>
            <a href="#">
              <img src="" alt="yt" className="ic-social" />
            </a>
            <a href="#">
              <img src="" alt="ph" className="ic-social" />
            </a>
          </div>

          <div className="account">
            <button type="button" className="account-btn account-btn-title">
              Đăng nhập
            </button>
            <button type="button" className="account-btn account-btn-title">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      <div className="body bg-white-100" id="masthead">
        <div className="container row-item">
          <a href="HomePage">
            <img src={logo} alt="logo" className="logo-full" />
          </a>
        </div>
      </div>

      <div className="body bg-pink-50" id="menu-bar">
        <div className="container row-item">
          <div className="menu-bar">
            <button
              type="button"
              className="menu-item menu-item-title text-black-100"
            >
              Trang chủ giới thiệu
            </button>
            <button
              type="button"
              className="menu-item menu-item-title text-black-100"
            >
              Danh mục sản phẩm
            </button>
            <button
              type="button"
              className="menu-item menu-item-title text-black-100"
            >
              Thương hiệu đối tác
            </button>
            <button
              type="button"
              className="menu-item menu-item-title text-black-100"
            >
              Hệ thống cửa hàng
            </button>
            <button
              type="button"
              className="menu-item menu-item-title text-black-100"
            >
              Tạp chí thú cưng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header2;
