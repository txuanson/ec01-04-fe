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
              <i
                className="fa fa-facebook ic-social text-white-100"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-instagram ic-social text-white-100"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-twitter ic-social text-white-100"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-youtube-play ic-social text-white-100"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-phone ic-social text-white-100"
                aria-hidden="true"
              ></i>
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
        <div className="container flex-row space-between">
          <a href="HomePage">
            <img src={logo} alt="logo" className="logo-full" />
          </a>

          <div className="form-group search-bar bg-grey-100 bd-1-grey space-between">
            <input
              type="text"
              className="form-control search-text bg-grey-100"
              name=""
              id=""
              aria-describedby="helpId"
              placeholder="Search Products, categories,..."
            />
            <a href="#">
              <i className="fa fa-search ic-search" aria-hidden="true"></i>
            </a>
          </div>

          <div className="flex-row account-cart">
            <a href="#">
              <i
                className="fa fa-user-circle-o ic-acc-cart"
                aria-hidden="true"
              ></i>
            </a>
            <a href="#">
              <i
                className="fa fa-shopping-bag ic-acc-cart"
                aria-hidden="true"
              ></i>
            </a>
          </div>
        </div>
      </div>

      <div className="body bg-pink-50">
        <div className="container flex-row content-center">
          <div className="flex-row menu-bar">
            <button type="button" className="menu-btn text-black-100">
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