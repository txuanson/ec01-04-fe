import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function Description() {
  return (
    <>
      <div className="product-view-content flex-col">
        <div className="product-content-section flex-col">
          <div className="product-content-title">Mô tả</div>
          <div className="product-content-subtitle">
            Quần áo cho chó mèo AMBABY PET là sản phẩm dành cho cả chó và mèo.
            Thêm mô tả tí xíu cho nó dài để test giao diện.
          </div>
        </div>

        <div className="product-content-section flex-col">
          <div className="product-content-title">Lợi ích chính</div>
          <div className="product-content-subtitle">
            {`- Quần áo cho chó mèo AMBABY PET sẽ làm cho thú cưng trở nên sành điệu và xinh xắn.
      - Sản phẩm được thiết kế với chất liệu cotton và gia công tỉ mỉ.
      - Kiểu dáng dễ mặc, dễ vận động đem đến sự thoải mái cho chó mèo.
      - Có nhiều kích cỡ cho bạn lựa chọn phù hợp như XS, S, M, L, XL.`}
          </div>
        </div>
      </div>
    </>
  );
}

function ProductInfo() {
  const [products, setProduct] = useState([
    {
      mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
      mPhotos: "",
      discount: "- 20 %",
      mAvgRating: "",
      sale_price: "80.000 đ",
      mPrice: "100.000 đ",
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container content-center bg-white-100">
          <div className="product-info flex-row space-between">
            <div className="product-gallery flex-col">
              <div className="product-thumbnail bg-grey-100 bd-rd-12">
                <button className="product-prev">
                  <i className="fa fa-chevron-left text-white-100"></i>
                </button>
                <img src=""></img>
                <button className="product-next">
                  <i className="fa fa-chevron-right text-white-100"></i>
                </button>
              </div>
              <div className="product-slider flex-row">
                <img src="" className="product-small bd-1-pink bd-rd-12"></img>
                <img src="" className="product-small bd-1-grey bd-rd-12"></img>
                <img src="" className="product-small bd-1-grey bd-rd-12"></img>
              </div>
            </div>

            <div className="detail-info flex-col">
              <div className="product-name text-black-100">
                Một cái tên sản phẩm thật là dài để test giao diện nhe
              </div>

              <div className="product-rating flex-row space-between">
                <div className="rating-star">
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                </div>
                <div className="rating-detail">1 đánh giá của khách hàng</div>
              </div>

              <div className="flex-row space-between">
                <div className="product-describe flex-col">
                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Mã hàng:
                    </div>
                    <div className="product-des-text text-black-100">76645</div>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Phân loại:
                    </div>
                    <button className="product-des-text product-des-btn text-black-100">
                      Quần áo
                    </button>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Tình trạng:
                    </div>
                    <div className="product-des-text text-black-100">
                      Còn hàng
                    </div>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Thương hiệu:
                    </div>
                    <button className="product-des-text product-des-btn text-black-100">
                      AMBABY PET
                    </button>
                  </div>
                </div>

                <div className="product-variant flex-col">
                  <div className="product-var-item flex-row">
                    <div className="product-var-title text-black-100">
                      Màu sắc
                    </div>
                    <select className="product-var-dropbox bg-grey-100 bd-1-grey bd-rd-12">
                      <option value="black">Đen</option>
                      <option value="white">Trắng</option>
                    </select>
                  </div>

                  <div className="product-var-item flex-row">
                    <div className="product-var-title text-black-100">
                      Kích cỡ
                    </div>
                    <select className="product-var-dropbox bg-grey-100 bd-1-grey bd-rd-12">
                      <option value="small">S</option>
                      <option value="medium">M</option>
                      <option value="large">L</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="product-choose flex-row space-between">
                <div className="product-price flex-col">
                  <div className="product-saleprice text-pink-100">
                    196.000 đ
                  </div>
                  <div className="product-costprice text-grey-100">
                    245.000 đ
                  </div>
                </div>

                <div className="product-buy flex-row">
                  <input
                    type="number"
                    className="product-amount bg-grey-100 bd-1-grey bd-rd-12"
                    min="1"
                    placeholder="1"
                  />
                  <button className="default-btn-agree">
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              <div className="product-view flex-col">
                <div className="flex-row space-between">
                  <button className="product-tab-item">Mô tả</button>
                  <button className="product-tab-item">Đánh giá</button>
                </div>
                <Description />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductInfo;
