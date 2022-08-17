import React from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function Product(props) {
  return (
    <>
      <a href="" className="product-item bd-rd-12">
        <div className="product-img bd-rd-12">
          <div className="discount-tag bg-pink-30 bd-rd-12">
            <div className="discount text-pink-100">{props.item.discount}</div>
          </div>
        </div>
        <div className="product-content">
          <div className="product-title text-black-100">{props.item.title}</div>
          <div className="rating">{props.item.rating}</div>
          <div className="sale-price text-black-100">
            {props.item.sale_price}
          </div>
          <div className="cost-price text-black-100">
            {props.item.cost_price}
          </div>
        </div>
      </a>
    </>
  );
}

function ListProduct(props) {
  const [products, setProduct] = useState([
    {
      title:
        "Một cái tên sản phẩm thiệt là siêu dài to bự khổng lồ để test giao diện nhe",
      img: "",
      discount: "",
      rating: "",
      sale_price: "95.000 đ",
      cost_price: "",
    },
    {
      title: "Product Title",
      img: "",
      discount: "- 20 %",
      rating: "",
      sale_price: "80.000 đ",
      cost_price: "100.000 đ",
    },
    {
      title: "Product Title",
      img: "",
      discount: "",
      rating: "",
      sale_price: "95.000 đ",
      cost_price: "",
    },
    {
      title: "Product Title",
      img: "",
      discount: "",
      rating: "",
      sale_price: "95.000 đ",
      cost_price: "",
    },
    {
      title: "Product Title",
      img: "",
      discount: "",
      rating: "",
      sale_price: "95.000 đ",
      cost_price: "",
    },
    {
      title: "Product Title",
      img: "",
      discount: "",
      rating: "",
      sale_price: "95.000 đ",
      cost_price: "",
    },
  ]);

  return (
    <>
      <div className="section brand">
        <div className="group-header">
          <div className="group-title text-pink-100">{props.group.title}</div>
          <div className="group-subtitle text-pink-100">
            {props.group.subtitle}
          </div>
          <div className="group-line">
            <div className="line" />
            <img src={logopaws} alt="logo" className="logo-paws" />
            <div className="line" />
          </div>
          <button
            type="button"
            className="group-btn bg-pink-30 text-black-100 bd-rd-12"
          >
            Xem tất cả
          </button>
        </div>
        <div className="group-content">
          {products.map((product) => (
            <Product item={product} />
          ))}
        </div>
      </div>
    </>
  );
}

function GroupProducts() {
  const [bestSeller, setBestSeller] = useState({
    title: "SẢN PHẨM BÁN CHẠY",
    subtitle: "",
  });

  const [groupProduct, setGroupProduct] = useState([
    {
      title: "BOSS ĂN NGON",
      subtitle: "Các loại hạt, pate, bánh thưởng thơm ngon, bổ dưỡng cho Boss",
    },
    {
      title: "BOSS XINH ĐẸP",
      subtitle:
        "Những sản phẩm chăm sóc da lông, vệ sinh thơm tho giúp Boss xinh đẹp hơn",
    },
    {
      title: "BOSS THỜI THƯỢNG",
      subtitle:
        "Các loại quần áo cute phô mai que giúp Boss trở nên thời thượng hơn",
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container content-center bg-pink-30">
          <ListProduct group={bestSeller} />
        </div>

        {groupProduct.map((product) => (
          <div className="container content-center bg-white-100">
            <ListProduct group={product} />
          </div>
        ))}
      </div>
    </>
  );
}
export default GroupProducts;
