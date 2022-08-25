import React, { useEffect, useState } from "react";
import api from "../../api";
import "./app.css";

function BrandItem(props) {
  return (
    <>
      <a href="" className="brand-item bd-rd-12">
        <img className="brand-img bd-rd-12" src={props.item.mLogo}></img>
        <div className="brand-name">{props.item.mName}</div>
      </a>
    </>
  );
}

function Brand() {
  const [Manufacturer, setManufacturer] = useState([]);
  // ======================đã cố giấu API :(
  // const manuApi = new api();
  // const getManufacturer = async () => {
  //   const res = await manuApi.get("/manufacturer");
  //   console.log(res.data);
  // }
  // useEffect(() => {
  //   getManufacturer();
  // } , []);

  const getManufacturer = async () => {
    const res = await fetch("https://ec01-04-be.herokuapp.com/manufacturer");
    const data = await res.json();
    setManufacturer(data);
  };
  useEffect(() => {
    getManufacturer();
  }, []);

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
              <div className="brand-container flex-row">
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
