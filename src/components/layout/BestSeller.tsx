import React from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function BestSeller() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container brand col-item bg-pink-30">
          <div className="fav-header">
            <div className="fav-title text-pink-100">SẢN PHẨM BÁN CHẠY</div>
            <div className="fav-line">
              <div className="line" />
              <img src={logopaws} alt="logo" className="logo-paws" />
              <div className="line" />
            </div>
          </div>

          <div className="fav-content">
            <div className="fav-item">
              <div className="product-img"></div>
              <div className="product-content">
                <div className="product-title text-black-100">
                  Product Title
                </div>
                <div className="rating"></div>
                <div className="sale-price text-black-100">95.000 đ</div>
              </div>
            </div>
            <div className="fav-item">
              <div className="product-img">
                <div className="discount-tag bg-pink-30">
                  <div className="discount text-pink-100">- 20 %</div>
                </div>
              </div>
              <div className="product-content">
                <div className="product-title text-black-100">
                  Product Title
                </div>
                <div className="rating"></div>
                <div className="sale-price text-black-100">80.000 đ</div>
                <div className="cost-price text-black-100">100.000 đ</div>
              </div>
            </div>
            <div className="fav-item">
              <div className="product-img"></div>
              <div className="product-content">
                <div className="product-title text-black-100">
                  Product Title
                </div>
                <div className="rating"></div>
                <div className="sale-price text-black-100">95.000 đ</div>
              </div>
            </div>
            <div className="fav-item">
              <div className="product-img"></div>
              <div className="product-content">
                <div className="product-title text-black-100">
                  Product Title
                </div>
                <div className="rating"></div>
                <div className="sale-price text-black-100">95.000 đ</div>
              </div>
            </div>
            <div className="fav-item">
              <div className="product-img"></div>
              <div className="product-content">
                <div className="product-title text-black-100">
                  Product Title
                </div>
                <div className="rating"></div>
                <div className="sale-price text-black-100">95.000 đ</div>
              </div>
            </div>
            <div className="fav-more">
              <button
                type="button"
                className="fav-btn bg-pink-30 section-btn-title text-black-100"
              >
                Xem tất cả
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default BestSeller;
