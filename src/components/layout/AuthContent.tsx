import React from "react";
import "./app.css";
import logo from "../../assets/EC01-04-logo-paws-white.png";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function SigninBox() {
  return (
    <>
      <div className="flex-col auth-box">
        <div className="auth-title text-black-100">Đăng nhập</div>
        <div className="auth-group flex-col">
          <div className="form-group auth-textbox bd-1-pink space-between">
            <input
              type="email"
              className="form-control search-text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div className="form-group auth-textbox bd-1-pink space-between">
            <input
              type="password"
              className="form-control search-text"
              name=""
              id=""
              placeholder="Mật khẩu"
            />
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="auth-btn-group flex-col">
          <button className="auth-btn text-black-100 bg-pink-100 bd-rd-12">
            ĐĂNG NHẬP
          </button>
          <button className="auth-bottom-btn text-pink-100 ">
            Quên mật khẩu
          </button>
        </div>
        <div className="group-line">
          <div className="auth-line" />
          <img src={logopaws} alt="logo" className="logo-paws" />
          <div className="auth-line" />
        </div>
        <div className="flex-col auth-bottom">
          <div className="auth-social-group flex-row">
            <button className="auth-social-btn text-grey-100 bd-1-pink bd-rd-12 content-center">
              <i className="fa fa-facebook-square" aria-hidden="true"></i>
              Đăng nhập Facebook
            </button>
            <button className="auth-social-btn text-grey-100 bd-1-pink bd-rd-12 content-center">
              <i className="fa fa-google-plus-square" aria-hidden="true"></i>
              Đăng nhập Google
            </button>
          </div>
          <div className="auth-other-group flex-row">
            <div className="auth-other text-grey-100">
              Bạn mới biết đến Huimitu?&nbsp;
              <button className="auth-other text-pink-100">Đăng ký</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function SignupBox() {
  return (
    <>
      <div className="flex-col auth-box">
        <div className="auth-title text-black-100">Đăng ký</div>
        <div className="auth-group flex-col">
          <div className="form-group auth-textbox bd-1-pink space-between">
            <input
              type="email"
              className="form-control search-text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
          <div className="form-group auth-textbox bd-1-pink space-between">
            <input
              type="password"
              className="form-control search-text"
              name=""
              id=""
              placeholder="Mật khẩu"
            />
            <a href="#">
              <i className="fa fa-eye" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="auth-btn-group flex-col">
          <button className="auth-btn text-black-100 bg-pink-100 bd-rd-12">
            ĐĂNG KÝ
          </button>
        </div>
        <div className="group-line">
          <div className="auth-line" />
          <img src={logopaws} alt="logo" className="logo-paws" />
          <div className="auth-line" />
        </div>
        <div className="flex-col auth-bottom">
          <div className="flex-row content-center">
            <div className="auth-other text-grey-100">
              Bằng việc đăng ký, bạn đã đồng ý với Huimitu về&nbsp;
              <button className="auth-other text-pink-100">
                Điều khoản dịch vụ
              </button>
              &nbsp;&&nbsp;
              <button className="auth-other text-pink-100">
                Chính sách bảo mật
              </button>
            </div>
          </div>
          <div className="flex-row content-center">
            <div className="auth-other text-grey-100">
              Bạn đã có tài khoản?&nbsp;
              <button className="auth-other text-pink-100">Đăng nhập</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ChangePassword() {
  return (
    <>
      <div className="flex-col auth-box">
        <div className="auth-title text-black-100">Đổi mật khẩu</div>
        <div className="auth-group flex-col">
          <div className="form-group auth-textbox bd-1-pink space-between">
            <input
              type="email"
              className="form-control search-text"
              name=""
              id=""
              placeholder="Email"
            />
          </div>
        </div>
        <div className="auth-btn-group flex-col">
          <button className="auth-btn text-black-100 bg-pink-100 bd-rd-12">
            XÁC NHẬN
          </button>
          <div className="auth-bottom-btn text-pink-100 space-between">
            <button>Đăng nhập</button>
            <button>Đăng ký</button>
          </div>
        </div>
      </div>
    </>
  );
}

function AuthContent() {
  return (
    <>
      <div className="body bg-white-100">
        <div className="container authen flex-row content-center">
          <SigninBox />
          {/* <SignupBox /> */}
          {/* <ChangePassword /> */}
        </div>
      </div>
    </>
  );
}
export default AuthContent;
