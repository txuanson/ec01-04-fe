import React, { useState } from "react";
import "./app.css";

function Stores() {
  const [store, setStore] = useState({
    name: "Cửa hàng Huimitu Nguyễn Trãi - Quận 5",
    address: "Số 341 Nguyễn Trãi, Phường 7, Quận 5, TP.HCM",
    phone: "028.7106.9906",
    opening: "T2-CN (8:00 - 22:00)",
    img: "",
  });

  return (
    <>
      <div className="section store-width">
        <div className="section-header">
          <div className="section-title">Hệ thống cửa hàng</div>
          <button type="button" className="section-btn">
            Xem tất cả
          </button>
        </div>

        <div className="section-content">
          <div className="store-container flex-col bg-white-100 bd-rd-12">
            <div className="store-img bg-grey-100">{store.img}</div>
            <div className="store-content flex-col">
              <div className="store-title">{store.name}</div>
              <div className="store-subtitle">{`Địa chỉ: ${store.address}\nĐiện thoại: ${store.phone}\nThời gian mở cửa: ${store.opening}`}</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Article(props) {
  return (
    <>
      <div className="blog-container flex-col bg-white-100 bd-rd-12">
        <div className="blog-img bg-grey-100">{props.article.img}</div>
        <div className="blog-content">
          <div className="blog-title">{props.article.title}</div>
          <div className="blog-subtitle">{props.article.subtitle}</div>
        </div>
      </div>
    </>
  );
}
function Blogs() {
  const [blogs, setBlog] = useState([
    {
      title: "DINH DƯỠNG",
      subtitle: "Ý kiến chuyên gia về dinh dưỡng & chăm sóc cho thú cưng",
      img: "",
    },
    {
      title: "HUẤN LUYỆN",
      subtitle: "Tips phương pháp huấn luyện & giúp hiểu hành vi thú cưng",
      img: "",
    },
    {
      title: "ĐỜI SỐNG",
      subtitle:
        "Thông tin hữu ích từ chuẩn bị chỗ ở tới vấn đề grooming cho pet",
      img: "",
    },
    {
      title: "HỎI ĐÁP",
      subtitle: "Hỏi - Đáp với Chuyên gia về các vấn đề liên quan tới thú cưng",
      img: "",
    },
  ]);

  return (
    <>
      <div className="section blog-width">
        <div className="section-header">
          <div className="section-title">Tạp chí thú cưng</div>
          <button type="button" className="section-btn">
            Xem tất cả
          </button>
        </div>

        <div className="section-content blog-list flex-col">
          {blogs.map((blog) => (
            <Article article={blog} />
          ))}
        </div>
      </div>
    </>
  );
}

function StoreBlog() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container store-blog content-center flex-row bg-pink-30">
          <Stores />
          <Blogs />
        </div>
      </div>
    </>
  );
}
export default StoreBlog;
