import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function ProductInfo() {
  const [Product, setProduct] = useState({
    mId: 76645,
    mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
    mDesc:
      "MÔ TẢ\nQuần áo cho chó mèo AMBABY PET là sản phẩm dành cho cả chó và mèo.\n\nLỢI ÍCH CHÍNH\n- Quần áo cho chó mèo AMBABY PET sẽ làm cho thú cưng trở nên sành điệu và xinh xắn.\n- Sản phẩm được thiết kế với chất liệu cotton và gia công tỉ mỉ.\n- Kiểu dáng dễ mặc, dễ vận động đem đến sự thoải mái cho chó mèo.\n- Có nhiều kích cỡ cho bạn lựa chọn phù hợp như XS, S, M, L, XL.",
    mPhotos: [],
    mRatingCount: 4,
    mAvgRating: 5,
    variant: [
      {
        mVariantType: "Màu sắc",
        mVariantValue: "Đen",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Màu sắc",
        mVariantValue: "Trắng",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Kích cỡ",
        mVariantValue: "S",
        mStatus: "Hết hàng",
      },
      {
        mVariantType: "Kích cỡ",
        mVariantValue: "M",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Kích cỡ",
        mVariantValue: "L",
        mStatus: "Còn hàng",
      },
    ],
    origin: "",
    category: "Quần áo",
    manufacturer: "AMBABY PET",

    discount: "- 20 %",
    sale_price: "196.000 đ",
    mPrice: "245.000 đ",
  });

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
                <img src={Product.mPhotos[0]}></img>
                <button className="product-next">
                  <i className="fa fa-chevron-right text-white-100"></i>
                </button>
              </div>

              <div className="product-slider flex-row">
                <img
                  src={Product.mPhotos[1]}
                  className="product-small bd-1-pink bd-rd-12"
                ></img>
                <img
                  src={Product.mPhotos[2]}
                  className="product-small bd-1-grey bd-rd-12"
                ></img>
                <img
                  src={Product.mPhotos[3]}
                  className="product-small bd-1-grey bd-rd-12"
                ></img>
              </div>
            </div>

            <div className="detail-info flex-col">
              <div className="product-name text-black-100">{Product.mName}</div>

              <div className="product-rating flex-row space-between">
                <div className="rating-star">
                  {/* {Product.mAvgRating} */}
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                  <i className="fa fa-star text-yellow-100"></i>
                </div>
                <div className="rating-detail">
                  {Product.mRatingCount} đánh giá của khách hàng
                </div>
              </div>

              <div className="flex-row space-between">
                <div className="product-describe flex-col">
                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Mã hàng:
                    </div>
                    <div className="product-des-text text-black-100">
                      {Product.mId}
                    </div>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Phân loại:
                    </div>
                    <button className="product-des-text product-des-btn text-black-100">
                      {Product.category}
                    </button>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Tình trạng:
                    </div>
                    <div className="product-des-text text-black-100">
                      {Product.variant[0].mStatus}
                    </div>
                  </div>

                  <div className="flex-row">
                    <div className="product-des-text product-des-title text-grey-100">
                      Thương hiệu:
                    </div>
                    <button className="product-des-text product-des-btn text-black-100">
                      {Product.manufacturer}
                    </button>
                  </div>
                </div>

                <div className="product-variant flex-col">
                  <div className="product-var-item flex-row">
                    <div className="product-var-title text-black-100">
                      {Product.variant[0].mVariantType}
                    </div>
                    <select className="product-var-dropbox bg-grey-100 bd-1-grey bd-rd-12">
                      <option value="black">
                        {Product.variant[0].mVariantValue}
                      </option>
                      <option value="white">
                        {Product.variant[1].mVariantValue}
                      </option>
                    </select>
                  </div>

                  <div className="product-var-item flex-row">
                    <div className="product-var-title text-black-100">
                      {Product.variant[2].mVariantType}
                    </div>
                    <select className="product-var-dropbox bg-grey-100 bd-1-grey bd-rd-12">
                      <option value="small">
                        {Product.variant[2].mVariantValue}
                      </option>
                      <option value="medium">
                        {Product.variant[3].mVariantValue}
                      </option>
                      <option value="large">
                        {Product.variant[4].mVariantValue}
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="product-choose flex-row space-between">
                <div className="product-price flex-col">
                  <div className="product-saleprice text-pink-100">
                    {Product.sale_price}
                  </div>
                  <div className="product-costprice text-grey-100">
                    {Product.mPrice}
                  </div>
                </div>

                <div className="product-buy flex-row">
                  <input
                    type="number"
                    className="product-amount bg-grey-100 bd-1-grey bd-rd-12"
                    min="1"
                    placeholder="1"
                  />
                  <a
                    href="/shopping-cart"
                    type="submit"
                    className="default-btn-agree"
                  >
                    Thêm vào giỏ hàng
                  </a>
                </div>
              </div>

              <div className="product-view flex-col">
                <div className="flex-row space-between">
                  <button className="product-tab-item">Mô tả</button>
                  <button className="product-tab-item">Đánh giá</button>
                </div>
                <div className="product-content">{Product.mDesc}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductInfo;
