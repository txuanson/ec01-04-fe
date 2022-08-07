import React from "react";
import "./app.css";
import logo from "../../assets/EC01-04-logo.png";

function Header2() {
  return (
    <>
      <div className="body bg-pink-100">
        <div className="container flex-row space-between">
          <div className="flex-row social-media">
            <a href="#">
              <img src="" alt="fb" className="ic-social bg-white-100" />
            </a>
            <a href="#">
              <img src="" alt="ig" className="ic-social bg-white-100" />
            </a>
            <a href="#">
              <img src="" alt="tw" className="ic-social bg-white-100" />
            </a>
            <a href="#">
              <img src="" alt="yt" className="ic-social bg-white-100" />
            </a>
            <a href="#">
              <img src="" alt="ph" className="ic-social bg-white-100" />
            </a>
          </div>

          <div className="flex-row account">
            <button type="button" className="account-btn">
              Đăng nhập
            </button>
            <button type="button" className="account-btn">
              Đăng ký
            </button>
          </div>
        </div>
      </div>

      <div className="body bg-white-100">
        <div className="container flex-row content-center">
          <a href="HomePage">
            <img src={logo} alt="logo" className="logo-full" />
          </a>
        </div>
      </div>

      <div className="body bg-pink-50">
        <div className="container flex-row content-center">
          <div className="flex-row menu-bar">
            <button type="button" className="menu-btn  text-black-100">
              Trang chủ giới thiệu
            </button>
            <button type="button" className="menu-btn text-black-100">
              Danh mục sản phẩm
            </button>
            <button type="button" className="menu-btn text-black-100">
              Thương hiệu đối tác
            </button>
            <button type="button" className="menu-btn text-black-100">
              Hệ thống cửa hàng
            </button>
            <button type="button" className="menu-btn text-black-100">
              Tạp chí thú cưng
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Header2;
