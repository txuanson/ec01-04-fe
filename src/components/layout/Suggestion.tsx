import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function ProductItem(props) {
  return (
    <>
      <a href="" className="product-item bd-rd-12">
        <div className="product-img bd-rd-12">
          <img src={props.item.mPhotos}></img>
          <div className="discount-tag bg-pink-30 bd-rd-12">
            <div className="text-pink-100">{props.item.discount}</div>
          </div>
        </div>
        <div className="product-content">
          <div className="product-title text-black-100">{props.item.mName}</div>
          <div className="rating-star">
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
          </div>
          <div className="price-btn flex-row space-between">
            <div className="flex-col">
              <div className="sale-price text-black-100">
                {props.item.sale_price}
              </div>
              <div className="cost-price text-black-100">
                {props.item.mPrice}
              </div>
            </div>
            <div className="flex-col">
              <button className="btn-buynow">Mua ngay</button>
            </div>
          </div>
        </div>
      </a>
    </>
  );
}

function Suggestion() {
  const [Product, setProduct] = useState([
    {
      mName: "Túi Xách Chó Mèo Hình Dấu Chân",
      mPhotos:
        "https://poodlestoresaigon.com/wp-content/uploads/2022/05/tui-dung-cho-hinh-dau-chan1-1.jpg",
      discount: "- 22 %",
      mAvgRating: "4",
      sale_price: "390.000 đ",
      cost_price: "500.000 đ",
    },
    {
      mName: "Nệm Tai Thỏ Cho Chó Mèo",
      mPhotos:
        "https://petstoresaigon.com/wp-content/uploads/2021/05/O1CN01O1AcOm1FDySZVBsx7_6000000000454-0-cib.jpg",
      discount: "",
      mAvgRating: "3",
      sale_price: "100.000 đ",
      cost_price: "",
    },
    {
      mName: "Nệm Chấm Bi Cho Chó Mèo",
      mPhotos:
        "https://petstoresaigon.com/wp-content/uploads/2021/05/4971963373_1693295712.jpg",
      discount: "- 28 %",
      mAvgRating: "2",
      sale_price: "315.000 đ",
      cost_price: "440.000 đ",
    },
    {
      mName: "Nệm Giường 3D Cho Chó Mèo",
      mPhotos:
        "https://poodlestoresaigon.com/wp-content/uploads/2021/06/9195985792_916446139.jpg",
      discount: "",
      mAvgRating: "4",
      sale_price: "350.000 đ",
      cost_price: "",
    },
    {
      mName: "Chuồng Nhựa Láp Ráp Cho Chó Mèo",
      mPhotos:
        "https://petstoresaigon.com/wp-content/uploads/2021/05/chuong-nhua-7.jpg",
      discount: "",
      mAvgRating: "3",
      sale_price: "1.800.000 đ",
      cost_price: "",
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container content-center bg-white-100">
          <div className="section brand">
            <div className="section-header">
              <div className="section-title">Sản phẩm tương tự</div>
              <button type="button" className="section-btn bg-white-100">
                Xem thêm
              </button>
            </div>

            <div className="section-content">
              <div className="suggest-products flex-row">
                {Product.map((product) => (
                  <ProductItem item={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Suggestion;
