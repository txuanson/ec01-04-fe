import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function Product(props) {
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
  const [products, setProduct] = useState([
    {
      mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
      mPhotos: "",
      discount: "- 20 %",
      mAvgRating: "",
      sale_price: "80.000 đ",
      mPrice: "100.000 đ",
    },
    {
      mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
      mPhotos: "",
      discount: "- 20 %",
      mAvgRating: "",
      sale_price: "80.000 đ",
      mPrice: "100.000 đ",
    },
    {
      mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
      mPhotos: "",
      discount: "- 20 %",
      mAvgRating: "",
      sale_price: "80.000 đ",
      mPrice: "100.000 đ",
    },
    {
      mName: "Một cái tên sản phẩm thiệt là siêu dài để test giao diện nhe",
      mPhotos: "",
      discount: "- 20 %",
      mAvgRating: "",
      sale_price: "80.000 đ",
      mPrice: "100.000 đ",
    },
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
          <div className="section brand">
            <div className="section-header">
              <div className="section-title">Sản phẩm tương tự</div>
              <button type="button" className="section-btn bg-white-100">
                Xem thêm
              </button>
            </div>

            <div className="section-content">
              <div className="suggest-products flex-row">
                {products.map((product) => (
                  <Product item={product} />
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
