import React, { useState } from "react";
import "./app.css";

function BrandItem(props) {
  return (
    <>
      <a href="" className="brand-item bd-rd-12">
        <div className="brand-img bd-rd-12">{props.item.Logo}</div>
        <div className="brand-name">{props.item.Name}</div>
      </a>
    </>
  );
}

function Brand() {
  const [Manufacturer, setManufacturer] = useState([
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
    { Name: "Brand name", Logo: "" },
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
                {Manufacturer.map((brand) => (
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
