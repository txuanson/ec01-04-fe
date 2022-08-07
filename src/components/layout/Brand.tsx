import React, { useState } from "react";
import "./app.css";

function BrandItem(props) {
  return (
    <>
      <div className="brand-item bd-rd-12">
        <div className="brand-img bd-rd-12">{props.item.img}</div>
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
        <div className="container content-center bg-white-100">
          <div className="section brand">
            <div className="section-header">
              <div className="section-title">Thương hiệu đối tác</div>
              <button type="button" className="section-btn bg-white-100">
                Xem tất cả
              </button>
            </div>

            <div className="section-content">
              <div className="brand-container flex-col">
                {brands.map((brand) => (
                  <BrandItem item={brand} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Brand;
