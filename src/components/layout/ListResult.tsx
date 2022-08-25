import React, { useState } from "react";
import "./app.css";

function ProductItem(props) {
  return (
    <>
      <a href="/product-detail" className="product-item bd-rd-12">
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
            <i className="fa fa-star-o text-grey-100"></i>
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

function ListResult() {
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
    {
      mName: "Chuồng Sắt Cho Chó Mèo",
      mPhotos:
        "https://petstoresaigon.com/wp-content/uploads/2021/05/chuong-gap-9-510x510.jpg.webp",
      discount: "",
      mAvgRating: "3",
      sale_price: "300.000 đ",
      cost_price: "",
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="list-result flex-row space-between">
            <div className="list-filter flex-col">
              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">DANH MỤC</div>
                <div className="filter-content flex-col">
                  <button className="filter-item text-black-100 flex-row space-between">
                    Nhà, chuồng, nệm
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      5
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Nhà cho mèo
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      3
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Nhà cho chó
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      3
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Ổ nệm & Thảm đệm cho mèo
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      3
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Phụ kiện cho mèo
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      1
                    </div>
                  </button>
                </div>
              </div>

              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">THƯƠNG HIỆU</div>
                <div className="filter-content flex-col">
                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacture"
                      value="PetBag"
                      className="filter-item-checkbox"
                    />
                    PetBag
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="ABC"
                      className="filter-item-checkbox"
                    />
                    ABC
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="MyPet"
                      className="filter-item-checkbox"
                    />
                    MyPet
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="Behar"
                      className="filter-item-checkbox"
                    />
                    Behar
                  </div>
                </div>
              </div>

              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">XUẤT XỨ</div>
                <div className="filter-content flex-col">
                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="origin"
                      value="VietNam"
                      className="filter-item-checkbox"
                    />
                    Việt Nam
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="origin"
                      value="ThaiLand"
                      className="filter-item-checkbox"
                    />
                    Thái Lan
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="origin"
                      value="China"
                      className="filter-item-checkbox"
                    />
                    Trung Quốc
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="origin"
                      value="USA"
                      className="filter-item-checkbox"
                    />
                    Mỹ
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="origin"
                      value="Japan"
                      className="filter-item-checkbox"
                    />
                    Nhật Bản
                  </div>
                </div>
              </div>

              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">ĐÁNH GIÁ</div>
                <div className="filter-content flex-col">
                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="avg-rating"
                      value="5"
                      className="filter-item-checkbox"
                    />
                    <div className="rating-star">
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                    </div>
                    &nbsp;(5 sao)
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="avg-rating"
                      value="4"
                      className="filter-item-checkbox"
                    />
                    <div className="rating-star">
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                    </div>
                    &nbsp;(4 sao)
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="avg-rating"
                      value="3"
                      className="filter-item-checkbox"
                    />
                    <div className="rating-star">
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                    </div>
                    &nbsp;(3 sao)
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="avg-rating"
                      value="2"
                      className="filter-item-checkbox"
                    />
                    <div className="rating-star">
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                    </div>
                    &nbsp;(2 sao)
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="avg-rating"
                      value="1"
                      className="filter-item-checkbox"
                    />
                    <div className="rating-star">
                      <i className="fa fa-star text-yellow-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                      <i className="fa fa-star-o text-grey-100"></i>
                    </div>
                    &nbsp;(1 sao)
                  </div>
                </div>
              </div>

              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">KHOẢNG GIÁ</div>
                <div className="filter-content flex-col">
                  <div className="flex-row space-between">
                    <div className="filter-price flex-col">
                      <div className="filter-textbox-title text-black-100">
                        Từ
                      </div>
                      <div className="form-group filter-textbox bg-grey-100 bd-1-grey bd-rd-12">
                        <input
                          type="number"
                          className="form-control filter-textbox-content bg-grey-100"
                          min="1000"
                          placeholder="1000"
                        />
                      </div>
                    </div>
                    <div className="filter-price flex-col">
                      <div className="filter-textbox-title text-black-100">
                        Đến
                      </div>
                      <div className="form-group filter-textbox bg-grey-100 bd-1-grey bd-rd-12">
                        <input
                          type="number"
                          className="form-control filter-textbox-content bg-grey-100"
                          max="10000000"
                          placeholder="10000000"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="flex-row space-between">
                    <button type="submit" className="default-btn-agree">
                      Áp dụng
                    </button>
                    <button className="default-btn-disagree">Xóa tất cả</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="list-products flex-row">
              {Product.map((product) => (
                <ProductItem item={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListResult;
