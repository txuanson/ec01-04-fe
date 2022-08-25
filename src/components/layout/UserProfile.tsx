import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import userdefault from "../../assets/user-default.png";

function HistoryProduct(props) {
  return (
    <>
      <div className="history-product-item flex-row space-between">
        <img
          src={props.item.mPhotos[0]}
          className="history-pd-it-img bg-grey-100 bd-1-grey bd-rd-12"
        />

        <div className="history-pd-it-detail flex-col">
          <a
            href="/product-detail"
            className="history-item-name text-black-100"
          >
            {props.item.mName}
          </a>

          <div className="history-it-text text-grey-100">
            {props.item.variant[0].mVariantValue},&nbsp;
            {props.item.variant[1].mVariantValue}
          </div>

          <div className="history-pd-total flex-row space-between">
            <div className="history-item-quantity text-red-100">
              x {props.item.mQuantity}
            </div>

            <div className="flex-row">
              <div className="history-pd-costprice text-grey-100">
                {props.item.mPrice}
              </div>
              &nbsp;
              <div className="history-pd-saleprice text-pink-100">
                {props.item.sale_price}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="history-product-line"></div>
    </>
  );
}

function HistoryOrder(props) {
  return (
    <>
      <div className="history-order flex-col bd-1-grey bd-rd-12">
        <div className="flex-row space-between">
          <div className="history-info-user flex-col">
            <div className="history-info-title">Thông tin nhận hàng</div>
            <div className="history-info-content">{`${props.item.mName}\n${props.item.mPhone}\n${props.item.mAddress}`}</div>
          </div>

          <div className="history-info-order flex-col">
            <div className="flex-col">
              <div className="history-info-title">Phương thức thanh toán</div>
              <div className="history-info-content">{props.item.payment}</div>
            </div>
            <div className="flex-col">
              <div className="history-info-title">Tình trạng vận chuyển</div>
              <div className="history-info-content text-yellow-100">
                {props.item.mStatus}
              </div>
            </div>
          </div>
        </div>

        <div className="history-product flex-col">
          {props.item.products.map((Product) => (
            <HistoryProduct item={Product} />
          ))}
        </div>

        <div className="history-total flex-row space-between">
          <div className="history-total-product flex-row">
            Tổng cộng:&nbsp;
            <div className="text-red-100">3 sản phẩm</div>
          </div>
          <div className="history-total-money flex-col">
            <div>Tổng tiền hàng: 592.000 đ</div>
            <div>Phí vận chuyển: 28.000 đ</div>
            <div className="flex-row">
              Thành tiền:&nbsp;
              <div className="text-red-100">620.000 đ</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function UserProfile() {
  const [Account, setAccount] = useState({
    mName: "username",
    mPhone: "0123456789",
    mEmail: "email@gmail.com",
    mGender: "Nữ",
    mBirth: "01/01/2020",
    mAddress: "227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP Hồ Chí Minh",
  });

  const [Order, setOrder] = useState([
    {
      mName: "receiver-name",
      mPhone: "0123456789",
      mAddress: "227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP Hồ Chí Minh",
      products: [
        {
          mName: "Quần áo cho chó mèo AMBABY PET",
          mPhotos: [],
          mPrice: "245.000 đ",
          sale_price: "196.000 đ",
          variant: [
            { mVariantType: "Màu sắc", mVariantValue: "Đen" },
            { mVariantType: "Kích cỡ", mVariantValue: "L" },
          ],
          mQuantity: 2,
        },
        {
          mName: "Túi Xách Chó Mèo Hình Dấu Chân",
          mPhotos: [],
          mPrice: "250.000 đ",
          sale_price: "200.000 đ",
          variant: [
            { mVariantType: "Màu sắc", mVariantValue: "Trắng" },
            { mVariantType: "Kích cỡ", mVariantValue: "S" },
          ],
          mQuantity: 1,
        },
      ],
      payment: "Thanh toán khi nhận hàng",
      mStatus: "Đang vận chuyển",
    },
    {
      mName: "receiver-name",
      mPhone: "0123456789",
      mAddress: "227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP Hồ Chí Minh",
      products: [
        {
          mName: "Quần áo cho chó mèo AMBABY PET",
          mPhotos: [],
          mPrice: "245.000 đ",
          sale_price: "196.000 đ",
          variant: [
            { mVariantType: "Màu sắc", mVariantValue: "Đen" },
            { mVariantType: "Kích cỡ", mVariantValue: "L" },
          ],
          mQuantity: 2,
        },
        {
          mName: "Túi Xách Chó Mèo Hình Dấu Chân",
          mPhotos: [],
          mPrice: "250.000 đ",
          sale_price: "200.000 đ",
          variant: [
            { mVariantType: "Màu sắc", mVariantValue: "Trắng" },
            { mVariantType: "Kích cỡ", mVariantValue: "S" },
          ],
          mQuantity: 1,
        },
      ],
      payment: "Thanh toán khi nhận hàng",
      mStatus: "Đang vận chuyển",
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="user-account flex-row space-between">
            <div className="user-profile flex-col bd-1-pink bd-rd-12">
              <img src={userdefault} className="profile-avatar"></img>

              <button className="edit-profile-btn">Sửa hồ sơ</button>

              <div className="profile-detail flex-col">
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Họ tên:</div>
                  <div className="profile-dt-content">{Account.mName}</div>
                </div>
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Số điện thoại:</div>
                  <div className="profile-dt-content">{Account.mPhone}</div>
                </div>
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Email:</div>
                  <div className="profile-dt-content">{Account.mEmail}</div>
                </div>
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Giới tính:</div>
                  <div className="profile-dt-content">{Account.mGender}</div>
                </div>
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Ngày sinh:</div>
                  <div className="profile-dt-content">{Account.mBirth}</div>
                </div>
                <div className="profile-dt-line flex-row space-between">
                  <div className="profile-dt-title">Địa chỉ:</div>
                  <div className="profile-dt-content">{Account.mAddress}</div>
                </div>
              </div>
            </div>

            <div className="user-history flex-col bd-1-pink bd-rd-12">
              <div className="history-tab flex-row space-between">
                <button className="history-tab-item">Chờ giao</button>
                <button className="history-tab-item">Đang giao</button>
                <button className="history-tab-item">Đánh giá</button>
                <button className="history-tab-item">Lịch sử</button>
              </div>

              <div className="history-content flex-col">
                {Order.map((History) => (
                  <HistoryOrder item={History} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default UserProfile;
