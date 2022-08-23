import React, { useState } from "react";
import "./app.css";

function ProductItem(props) {
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

function ListResult() {
  const [Product, setProduct] = useState([
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
        <div className="container bg-white-100">
          <div className="list-result flex-row space-between">
            <div className="list-filter flex-col">
              <div className="filter-section flex-col">
                <div className="filter-title text-black-100">DANH MỤC</div>
                <div className="filter-content flex-col">
                  <button className="filter-item text-black-100 flex-row space-between">
                    Quần áo & Mũ nón
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      320
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Vòng cổ & Dây dắt
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      112
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Lồng vận chuyển
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      48
                    </div>
                  </button>

                  <button className="filter-item text-black-100 flex-row space-between">
                    Đồ chơi & Huấn luyện
                    <div className="filter-item-tag text-pink-100 bg-pink-30 bd-rd-12">
                      32
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
                      value="Ikea"
                      className="filter-item-checkbox"
                    />
                    IKEA
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="Codos"
                      className="filter-item-checkbox"
                    />
                    CODOS
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="Xpower"
                      className="filter-item-checkbox"
                    />
                    XPOWER
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="Xinding"
                      className="filter-item-checkbox"
                    />
                    XINDING
                  </div>

                  <div className="filter-item text-black-100 flex-row">
                    <input
                      type="checkbox"
                      name="manufacturer"
                      value="Richell"
                      className="filter-item-checkbox"
                    />
                    RICHELL
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
                      value="China"
                      className="filter-item-checkbox"
                    />
                    Trung Quốc
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
                      value="Korea"
                      className="filter-item-checkbox"
                    />
                    Hàn Quốc
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
