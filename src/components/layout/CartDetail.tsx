import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function CartItem(props) {
  return (
    <>
      <div className="cart-product-item flex-row">
        <button className="cart-pd-it-delete">
          <i className="fa fa-times-circle-o fa-2x text-pink-100"></i>
        </button>

        <img src="" className="cart-pd-it-img bg-grey-100 bd-1-grey bd-rd-12" />

        <div className="cart-pd-it-detail flex-col">
          <button className="cart-item-name text-black-100">
            {props.item.mName}
          </button>

          <div className="rating-star">
            {/* {props.item.mAvgRating} */}
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
          </div>

          <div className="flex-row space-between">
            <div className="flex-col">
              <div className="flex-row">
                <div className="cart-it-text cart-it-title text-grey-100">
                  Thương hiệu:
                </div>
                <button className="cart-it-text product-des-btn text-black-100">
                  {props.item.mManu}
                </button>
              </div>

              <div className="flex-row">
                <div className="cart-it-text cart-it-title text-grey-100">
                  Xuất xứ:
                </div>
                <div className="cart-it-text text-black-100">
                  {props.item.mOrigin}
                </div>
              </div>
            </div>

            <div className="flex-col">
              <div className="flex-row">
                <div className="cart-it-text cart-it-title text-grey-100">
                  {props.item.variant[0].mVariantType}:
                </div>
                <div className="cart-it-text text-black-100">
                  {props.item.variant[0].mVariantValue}
                </div>
              </div>

              <div className="flex-row">
                <div className="cart-it-text cart-it-title text-grey-100">
                  {props.item.variant[1].mVariantType}:
                </div>
                <div className="cart-it-text text-black-100">
                  {props.item.variant[1].mVariantValue}
                </div>
              </div>
            </div>
          </div>

          <div className="product-choose flex-row space-between">
            <div className="product-price flex-col">
              <div className="product-saleprice text-pink-100">
                {props.item.sale_price}
              </div>
              <div className="product-costprice text-grey-100">
                {props.item.mPrice}
              </div>
            </div>

            <div className="product-buy flex-row">
              <input
                type="number"
                className="product-amount bg-grey-100 bd-1-grey bd-rd-12"
                min="1"
                placeholder={props.item.mQuantity}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="cart-product-line"></div>
    </>
  );
}

function CartDetail() {
  const [ShoppingCart, setShoppingCart] = useState([
    {
      mName:
        "Quần áo cho chó mèo AMBABY PET mà viết thêm cái tên sản phẩm cho nó siêu dài để test cái giao diện đồ đó nhe",
      mManu: "HAND IN HAND",
      mOrigin: "VietNam",
      mPrice: "245.000 đ",
      sale_price: "196.000 đ",
      variant: [
        { mVariantType: "Màu sắc", mVariantValue: "Đen" },
        { mVariantType: "Kích cỡ", mVariantValue: "L" },
      ],
      mAvgRating: 5,
      mQuantity: 2,
    },
    {
      mName: "Túi Xách Chó Mèo Hình Dấu Chân",
      mManu: "PetBag",
      mOrigin: "VietNam",
      mPrice: "250.000 đ",
      sale_price: "200.000 đ",
      variant: [
        { mVariantType: "Màu sắc", mVariantValue: "Trắng" },
        { mVariantType: "Kích cỡ", mVariantValue: "S" },
      ],
      mAvgRating: 4,
      mQuantity: 1,
    },
  ]);
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="cart-detail flex-row space-between">
            <div className="cart-products flex-col">
              {ShoppingCart.map((product) => (
                <CartItem item={product} />
              ))}
            </div>
            <div className="cart-summary flex-col">
              <div className="cart-summary-detail flex-col">
                <div className="cart-summary-item flex-row space-between">
                  <div className="cart-sm-it-title text-black-100">
                    Tạm tính
                  </div>
                  <div className="product-saleprice text-pink-100">
                    592.000 đ
                  </div>
                </div>

                <div className="cart-summary-item flex-row space-between">
                  <div className="cart-sm-it-title text-black-100">
                    Phí giao hàng
                  </div>
                  <div className="cart-sm-it-content text-black-100">
                    Được cập nhật trong quá trình thanh toán
                  </div>
                </div>

                <div className="cart-summary-item flex-row space-between">
                  <div className="cart-sm-it-title text-black-100">
                    Tổng cộng
                  </div>
                  <div className="product-saleprice text-pink-100">
                    592.000 đ
                  </div>
                </div>
              </div>

              <div className="cart-summary-line"></div>

              <div className="flex-row space-between">
                <button className="default-btn-disagree">
                  Xem sản phẩm khác
                </button>
                <button className="default-btn-agree">THANH TOÁN</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CartDetail;
