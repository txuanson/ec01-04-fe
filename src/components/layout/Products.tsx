import React, { useEffect } from "react";
import { useState } from "react";
import "./app.css";
import logopaws from "../../assets/EC01-04-logo-paws.png";

function ProductItem(props) {
  return (
    <>
      <a href="/product-detail" className="product-item bd-rd-12">
        <div className="product-img bg-rd-12">
          <img src={props.item.mPhotos} className="product-img"></img>
          <div className="discount-tag bg-pink-30 bd-rd-12">
            <div className="text-pink-100">{props.item.discount}</div>
          </div>
        </div>
        <div className="product-content">
          <div className="product-title text-black-100">{props.item.mName}</div>
          <div className="rating-star">
            {/* {props.item.mAvgRating} */}
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star text-yellow-100"></i>
            <i className="fa fa-star-o text-grey-100"></i>
          </div>
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
    {
      mName: "Cũi Gỗ Cho Chó Mèo",
      mPhotos:
        "https://petstoresaigon.com/wp-content/uploads/2021/05/chuong-go-2.jpg",
      discount: "",
      mAvgRating: "4",
      sale_price: "3.500.000 đ",
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
          <a
            href="/products"
            className="group-btn bg-pink-30 text-black-100 bd-rd-12"
          >
            Xem tất cả
          </a>
        </div>

        <div className="group-content">
          {Product.map((product) => (
            <ProductItem item={product} />
          ))}
        </div>
      </div>
    </>
  );
}

function GroupProducts() {
  const [bestSeller, setBestSeller] = useState({
    //Đang đợi API best seller
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
