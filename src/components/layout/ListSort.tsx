import React, { useState } from "react";
import "./app.css";

function ListSort() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="list-sort flex-row space-between">
            <div className="filter-sort flex-col">
              <div className="filter-list flex-row">
                <div className="filter-box flex-row bg-grey-100 bd-1-grey bd-rd-12">
                  <div className="filter-box-title text-black-100 flex-row">
                    Sắp xếp theo
                    <div className="filter-box-line bd-1-grey"></div>
                  </div>
                  <div className="filter-box-list flex-row">
                    <div className="filter-box-choose flex-row text-black-100">
                      <input
                        type="radio"
                        name="sort"
                        value="popular"
                        className="filter-checkbox"
                      />
                      Phổ biến
                    </div>
                    <div className="filter-box-choose flex-row text-black-100">
                      <input
                        type="radio"
                        name="sort"
                        value="rating"
                        className="filter-checkbox"
                      />
                      Đánh giá
                    </div>
                    <div className="filter-box-choose flex-row text-black-100">
                      <input
                        type="radio"
                        name="sort"
                        value="newest"
                        className="filter-checkbox"
                      />
                      Mới nhất
                    </div>
                  </div>
                </div>
                <div className="filter-box flex-row bg-grey-100 bd-1-grey bd-rd-12">
                  <div className="filter-box-title text-black-100 flex-row">
                    Giá
                    <div className="filter-box-line bd-1-grey"></div>
                  </div>
                  <div className="filter-box-list flex-row">
                    <div className="filter-box-choose flex-row text-black-100">
                      <input
                        type="radio"
                        name="price"
                        value="asc"
                        className="filter-checkbox"
                      />
                      Thấp đến Cao
                    </div>
                    <div className="filter-box-choose flex-row text-black-100">
                      <input
                        type="radio"
                        name="price"
                        value="desc"
                        className="filter-checkbox"
                      />
                      Cao đến Thấp
                    </div>
                  </div>
                </div>
              </div>

              <div className="sort-current flex-row">
                <div className="sorting text-grey-100">Đang lọc theo</div>
                <div className="sorting-tag flex-row text-pink-100 bg-pink-30 bd-rd-12">
                  Sắp xếp theo: Phổ biến
                  <button className="sorting-tag-close">X</button>
                </div>
                <div className="sorting-tag flex-row text-pink-100 bg-pink-30 bd-rd-12">
                  Giá: Cao đến Thấp
                  <button className="sorting-tag-close">X</button>
                </div>
              </div>
            </div>
            <div className="list-page flex-col">
              <div className="list-current flex-row text-grey-100">
                <div className="list-result-tag text-pink-100 bg-pink-30 bd-rd-12">
                  7
                </div>
                Kết quả tìm kiếm
              </div>

              <div className="page-current flex-row">
                <button className="page-move content-center">
                  <i className="fa fa-chevron-left text-white-100"></i>
                </button>
                <div className="page-number flex-row text-black-100">
                  <div>1</div>/<div>1</div>
                </div>
                <button className="page-move content-center">
                  <i className="fa fa-chevron-right text-white-100"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListSort;
