import React, { useState } from "react";
import "./app.css";

function BrandItem(props) {
  return (
    <>
      <div className="brand-item">
        <div className="brand-img">{props.item.img}</div>
        <div className="brand-name">{props.item.name}</div>
      </div>
    </>
  );
}

function Brand() {
  const [brands, setBrands] = useState([
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
    { name: "Brand name", img: "", describe: "" },
  ]);
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container brand col-item bg-white-100">
          <div className="section-header">
            <div className="section-title text-black-100">
              Thương hiệu đối tác
            </div>
            <button
              type="button"
              className="section-btn bg-white-100 section-btn-title text-black-100"
            >
              Xem tất cả
            </button>
          </div>

          <div className="section-content">
            <div className="brand-container">
              {brands.map((brand) => (
                <BrandItem item={brand} />
              ))}
            </div>
          </div>

          <div className="arrow">
            <div className="base-arrow"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brand;
