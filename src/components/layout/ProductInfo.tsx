import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function ProductInfo() {
  const addCart = () => {
    alert("Đã thêm vào giỏ hàng");
  };

  const [Product, setProduct] = useState({
    mId: 76645,
    mName: "Túi Xách Chó Mèo Hình Dấu Chân",
    mDesc:
      "MÔ TẢ\nTúi vận chuyển chó mèo hình dấu chân cao cấp\n- Được làm bằng chất liệu mút xốp EVA, nhẹ, mềm và có độ bền cao.\n- Thiết kế khóa kéo dễ dàng tháo rời và gấp gọn, tiết kiệm diện tích\n- Cấu trúc túi đứng và cứng thoải mái cho chó mèo vận động bên trong\n- Kiểu dáng hiện đại, màu sắc bắt mắt\n- Tiện dụng khi đưa thú cưng đi du lịch, dã ngoại,…\n- Có nhiều lỗ thông thoáng để thú cưng luôn cảm thấy dễ chịu và có thể thoải mái ngắm nhìn thế giới bên ngoài\n\nLỢI ÍCH CHÍNH\n- Có dây tay cầm và dây đeo vai\n- Có tấm lót dưới đáy túi để bé nằm không làm bẩn túi\n- Kiểu dáng và màu sắc đẹp, hấp dẫn thú cưng nhà bạn, chất liệu bền\n- Thiết kế chắc chắn, hiện đại mang phong cách thời trang\n- Giúp bạn đi đâu cũng có thể mang thú cưng đi bên cạnh mình một cách thoải mái nhất, tiện lợi nhất\n- Giúp thú cưng thoai mái, không kích ứng da",
    mPhotos: [
      "https://poodlestoresaigon.com/wp-content/uploads/2022/05/tui-dung-cho-hinh-dau-chan1-1.jpg",
      "https://poodlestoresaigon.com/wp-content/uploads/2022/05/tui-dung-cho-hinh-dau-chan1.jpg",
      "https://poodlestoresaigon.com/wp-content/uploads/2022/05/tui-dung-cho-hinh-dau-chan2.jpg",
      "https://poodlestoresaigon.com/wp-content/uploads/2022/05/tui-dung-cho-hinh-dau-chan3.jpg",
    ],
    mRatingCount: 4,
    mAvgRating: 4,
    variant: [
      {
        mVariantType: "Màu sắc",
        mVariantValue: "Hồng",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Màu sắc",
        mVariantValue: "Xanh",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Màu sắc",
        mVariantValue: "Be",
        mStatus: "Còn hàng",
      },
      {
        mVariantType: "Kích cỡ",
        mVariantValue: "Nhỏ",
        mStatus: "Hết hàng",
      },
      {
        mVariantType: "Kích cỡ",
        mVariantValue: "Lớn",
        mStatus: "Còn hàng",
      },
    ],
    origin: "VietNam",
    category: "Đồ dùng, phụ kiện",
    manufacturer: "PetBag",

    discount: "- 22 %",
    sale_price: "390.000 đ",
    mPrice: "500.000 đ",
  });

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container content-center bg-white-100">
          <div className="product-info flex-row space-between">
            <div className="product-gallery flex-col">
              <img
                src={Product.mPhotos[0]}
                className="product-thumbnail bd-rd-12"
              />

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
                      <option value="pink">
                        {Product.variant[0].mVariantValue}
                      </option>
                      <option value="blue">
                        {Product.variant[1].mVariantValue}
                      </option>
                      <option value="beige">
                        {Product.variant[2].mVariantValue}
                      </option>
                    </select>
                  </div>

                  <div className="product-var-item flex-row">
                    <div className="product-var-title text-black-100">
                      {Product.variant[3].mVariantType}
                    </div>
                    <select className="product-var-dropbox bg-grey-100 bd-1-grey bd-rd-12">
                      <option value="small">
                        {Product.variant[3].mVariantValue}
                      </option>
                      <option value="big">
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
                  <button
                    onClick={addCart}
                    type="submit"
                    className="default-btn-agree"
                  >
                    Thêm vào giỏ hàng
                  </button>
                </div>
              </div>

              <div className="product-view flex-col">
                <div className="flex-row space-between">
                  <button className="product-tab-item product-tab-current">
                    Mô tả
                  </button>
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
