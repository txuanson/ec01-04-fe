import "./app.css";

function Footer2() {
  return (
    <>
      <div className="body footer-background">
        <div className="container brand flex-col content-center">
          <div className="section">
            <div className="flex-row space-between">
              <div className="footer-col">
                <div className="footer-title">THÔNG TIN LIÊN HỆ</div>
                <div className="footer-subtitle">
                  Địa chỉ: 227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP Hồ Chí Minh
                </div>
                <div className="footer-subtitle">Điện thoại: 0123.456.789</div>
                <div className="footer-subtitle">
                  Email: huimitu.pet@gmail.com
                </div>
                <div className="footer-subtitle">
                  Website: <a href="">https://ec01-04-fe.vercel.app/</a>
                </div>
              </div>

              <div className="footer-col">
                <div className="footer-title">HỖ TRỢ KHÁCH HÀNG</div>
                <a className="footer-subtitle" href="/policy">
                  Hướng dẫn mua hàng
                </a>
                <a className="footer-subtitle" href="/policy">
                  Chính sách Thanh toán
                </a>
                <a className="footer-subtitle" href="/policy">
                  Chính sách Giao nhận hàng
                </a>
                <a className="footer-subtitle" href="/policy">
                  Chính sách Đổi trả hàng
                </a>
                <a className="footer-subtitle" href="/policy">
                  Chính sách Bảo mật thông tin
                </a>
              </div>

              <div className="footer-col">
                <div className="footer-title">HỆ THỐNG CỬA HÀNG</div>
                <a className="footer-subtitle" href="#">
                  Huimitu tại Hồ Chí Minh
                </a>
                <a className="footer-subtitle" href="#">
                  Huimitu tại Hà Nội
                </a>
                <a className="footer-subtitle" href="#">
                  Huimitu tại Đà Nẵng
                </a>
                <a className="footer-subtitle" href="#">
                  Huimitu tại Hải Phòng
                </a>
              </div>

              <div className="footer-col">
                <div className="footer-title">TÀI KHOẢN</div>
                <a className="footer-subtitle" href="#">
                  Facebook
                </a>
                <a className="footer-subtitle" href="#">
                  Instagram
                </a>
                <a className="footer-subtitle" href="#">
                  Twitter
                </a>
                <a className="footer-subtitle" href="#">
                  Youtube
                </a>
              </div>
            </div>

            <div className="copyright">
              Copyright © 2022 HUIMITU. Web design by EC01-04. All rights
              reserved.
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer2;
