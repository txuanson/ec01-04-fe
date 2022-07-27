import React from "react";
import "./app.css";

function Category() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container row-item category bg-white-100">
          <div className="heading">
            <div className="section-title text-black-100">
              Danh mục sản phẩm
            </div>

            <div className="heading-category">
              <button
                type="button"
                className="category-item category-item-title"
              >
                Thức ăn, dinh dưỡng
              </button>
              <button
                type="button"
                className="category-item category-item-title"
              >
                Vệ sinh, chăm sóc
              </button>
              <button
                type="button"
                className="category-item category-item-title active"
              >
                Đồ dùng, phụ kiện
              </button>
              <button
                type="button"
                className="category-item category-item-title"
              >
                Nhà, chuồng, nệm
              </button>
              <button
                type="button"
                className="category-item category-item-title"
              >
                Thuốc thú y
              </button>
            </div>
          </div>

          <div className="sub bg-pink-25">
            <div className="sub-category">
              <button type="button" className="sub-title">
                Chó
              </button>

              <div className="sub-category-row">
                <div className="sub-category-col">
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Quần áo & Mũ nón
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Vòng cổ & Dây dắt
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Rọ mõm
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Đồ chơi & Huấn luyện
                  </button>
                </div>
                <div className="sub-category-col">
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Địu chó
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Túi xách chó
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Balo đựng chó
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Lồng vận chuyển
                  </button>
                </div>
              </div>
            </div>
            <div className="sub-category">
              <button type="button" className="sub-title">
                Mèo
              </button>

              <div className="sub-category-row">
                <div className="sub-category-col">
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Quần áo & Trang sức
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Vòng cổ & Dây dắt
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Đồ chơi & Huấn luyện
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Túi xách mèo
                  </button>
                </div>
                <div className="sub-category-col">
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Balo đựng mèo
                  </button>
                  <button
                    type="button"
                    className="category-item category-item-title"
                  >
                    Lồng vận chuyển
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
