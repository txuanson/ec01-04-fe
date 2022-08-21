import React, { useState } from "react";
import "./app.css";

function Pagination() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100 content-center">
          <div className="pagination flex-row">
            <button className="page-btn">
              <i className="fa fa-chevron-left"></i>
            </button>
            <button className="page-btn">1</button>
            <button className="page-btn">2</button>
            <button className="page-btn">
              <i className="fa fa-ellipsis-h"></i>
            </button>
            <button className="page-btn">16</button>
            <button className="page-btn">17</button>
            <button className="page-btn">
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default Pagination;
