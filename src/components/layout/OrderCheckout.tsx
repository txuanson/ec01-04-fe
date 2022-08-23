import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";

function OrderProduct(props) {
  return (
    <>
      <div className="order-product-item flex-row">
        <img
          src={props.item.mPhotos[0]}
          className="order-pd-it-img bg-grey-100 bd-1-grey bd-rd-12"
        />

        <div className="order-pd-it-detail flex-col">
          <div className="order-item-name text-black-100">
            {props.item.mName}
          </div>
          <div className="order-item-price text-black-100">
            {props.item.sale_price}
          </div>
        </div>

        <div className="order-item-quantity text-red-100">
          x {props.item.mQuantity}
        </div>
      </div>
    </>
  );
}

function OrderCheckout() {
  const [Order, setOrder] = useState([
    {
      mName: "Quần áo cho chó mèo AMBABY PET",
      mPhotos: [],
      sale_price: "196.000 đ",
      mQuantity: 2,
    },
    {
      mName: "Túi Xách Chó Mèo Hình Dấu Chân",
      mPhotos: [],
      sale_price: "200.000 đ",
      mQuantity: 1,
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="order-checkout flex-row space-between">
            <div className="order-info flex-col">
              <div className="order-section flex-col">
                <div className="order-section-title text-black-100">
                  Thông tin khách hàng
                </div>

                <div className="order-section-content flex-col">
                  <div className="billing-info flex-col">
                    <div className="billing-info-title text-black-100">
                      Họ tên người đặt hàng
                      <text className="text-red-100"> *</text>
                    </div>
                    <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                      <input
                        type="text"
                        className="form-control billing-info-text bg-grey-100"
                        placeholder="Họ và tên"
                      />
                    </div>
                  </div>

                  <div className="billing-info flex-col">
                    <div className="billing-info-title text-black-100">
                      Địa chỉ nhận hàng
                      <text className="text-red-100"> *</text>
                    </div>
                    <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                      <input
                        type="text"
                        className="form-control billing-info-text bg-grey-100"
                        placeholder="Địa chỉ"
                      />
                    </div>
                  </div>

                  <div className="billing-info flex-col">
                    <div className="billing-info-title text-black-100">
                      Số điện thoại liên hệ
                      <text className="text-red-100"> *</text>
                    </div>
                    <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                      <input
                        type="tel"
                        className="form-control billing-info-text bg-grey-100"
                        placeholder="Số điện thoại  "
                      />
                    </div>
                  </div>

                  <div className="billing-info flex-col">
                    <div className="billing-info-title text-black-100">
                      Email liên hệ
                    </div>
                    <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                      <input
                        type="email"
                        className="form-control billing-info-text bg-grey-100"
                        placeholder="Email"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="order-section flex-col">
                <div className="order-section-title text-black-100">
                  Phương thức thanh toán
                </div>
                <div className="order-section-content flex-col">
                  <div className="billing-method flex-col bd-1-grey bd-rd-12">
                    <div className="billing-method-payment flex-row">
                      <input
                        type="radio"
                        name="payment-method"
                        value="cod"
                        className="billing-mt-pm-btn"
                      />
                      <div className="billing-mt-pm-content text-black-100">
                        Thanh toán khi nhận hàng
                      </div>
                    </div>

                    <div className="billing-method-info flex-col">
                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Họ tên người nhận hàng
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="text"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Họ và tên"
                          />
                        </div>
                      </div>

                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Số điện thoại người nhận
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="tel"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Số điện thoại  "
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="billing-method flex-col bd-1-grey bd-rd-12">
                    <div className="billing-method-payment flex-row">
                      <input
                        type="radio"
                        name="payment-method"
                        value="banking"
                        className="billing-mt-pm-btn"
                      />
                      <div className="billing-mt-pm-content text-black-100">
                        Thanh toán bằng chuyển khoản
                      </div>
                    </div>

                    <div className="billing-method-info flex-col">
                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Tên ngân hàng
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="text"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Tên ngân hàng"
                          />
                        </div>
                      </div>

                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Số thẻ
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="text"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Số thẻ"
                          />
                        </div>
                      </div>

                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Họ tên chủ thẻ
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="text"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Họ và tên"
                          />
                        </div>
                      </div>

                      <div className="billing-info flex-col">
                        <div className="billing-info-title text-black-100">
                          Ngày phát hành thẻ
                          <text className="text-red-100"> *</text>
                        </div>
                        <div className="form-group billing-info-textbox bg-grey-100 bd-1-grey bd-rd-12">
                          <input
                            type="date"
                            className="form-control billing-info-text bg-grey-100"
                            placeholder="Ngày phát hành"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="billing-method flex-col bd-1-grey bd-rd-12">
                    <div className="billing-method-payment flex-row">
                      <input
                        type="radio"
                        name="payment-method"
                        value="zalopay"
                        className="billing-mt-pm-btn"
                      />
                      <div className="billing-mt-pm-content text-black-100">
                        Thanh toán bằng ZaloPay
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="order-summary flex-col bg-pink-05 bd-rd-12">
              <div className="order-section flex-col">
                <div className="order-section-title">Xác nhận đơn hàng</div>

                <div className="order-section-content flex-col">
                  <div className="order-detail flex-col">
                    {Order.map((product) => (
                      <OrderProduct item={product} />
                    ))}
                  </div>

                  <div className="total-summary flex-col">
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
                      <div className="product-saleprice text-pink-100">
                        28.000 đ
                      </div>
                    </div>

                    <div className="cart-summary-item flex-row space-between">
                      <div className="cart-sm-it-title text-black-100">
                        Tổng cộng
                      </div>
                      <div className="product-saleprice text-pink-100">
                        620.000 đ
                      </div>
                    </div>
                  </div>

                  <div className="order-summary-line"></div>

                  <div className="order-agree flex-col">
                    <div className="agree-policy text-grey-100 flex-row">
                      <input type="checkbox" value="agree" />
                      <text>
                        Tôi đồng ý với
                        <button className="text-black-100">
                          &nbsp;các điều khoản của Huimitu
                        </button>
                      </text>
                    </div>

                    <button type="submit" className="default-btn-agree">
                      HOÀN TẤT ĐẶT HÀNG
                    </button>

                    <div className="confirm-safety text-grey-100">
                      Chúng tôi sẽ gọi điện lại để xác nhận đơn hàng của quý
                      khách trước khi giao. Thông tin của quý khách sẽ được sử
                      dụng để xử lý đơn hàng này theo
                      <button className="text-black-100">
                        &nbsp;chính sách riêng tư&nbsp;
                      </button>
                      của Huimitu.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderCheckout;
