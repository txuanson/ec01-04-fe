import React, { useState } from "react";
import "./app.css";

function Title(props) {
  return (
    <>
      <button type="button" className="category-btn bd-rd-12">
        {props.cate.title}
      </button>
    </>
  );
}

function SubCategory(props) {
  return (
    <>
      <div className="pet-category flex-col content-center">
        <button type="button" className="pet-btn content-center bd-rd-12">
          {props.pet.title}
        </button>

        <div className="pet-sub-category flex-col">
          {props.pet.sub.map((SubCate) => (
            <div className="pet-sub-container">
              <Title cate={SubCate} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Category() {
  const [categories, setCategories] = useState([
    {
      title: "Thức ăn, dinh dưỡng",
      describe: "",
      sub: [],
    },
    {
      title: "Vệ sinh, chăm sóc",
      describe: "",
      sub: [],
    },
    {
      title: "Đồ dùng, phụ kiện",
      describe: "",
      sub: [
        {
          title: "Phụ kiện cho chó",
          describe: "",
          sub: [
            { title: "Quần áo & Mũ nón", describe: "" },
            { title: "Vòng cổ & Dây dắt", describe: "" },
            { title: "Rọ mõm", describe: "" },
            { title: "Đồ chơi & Huấn luyện", describe: "" },
            { title: "Địu chó", describe: "" },
            { title: "Túi xách chó", describe: "" },
            { title: "Balo đựng chó", describe: "" },
            { title: "Lồng vận chuyển", describe: "" },
          ],
        },
        {
          title: "Phụ kiện cho mèo",
          describe: "",
          sub: [
            { title: "Quần áo & Trang sức", describe: "" },
            { title: "Vòng cổ & Dây dắt", describe: "" },
            { title: "Đồ chơi & Huấn luyện", describe: "" },
            { title: "Túi xách mèo", describe: "" },
            { title: "Balo đựng mèo", describe: "" },
            { title: "Lồng vận chuyển", describe: "" },
          ],
        },
      ],
    },
    {
      title: "Nhà, chuồng, nệm",
      describe: "",
      sub: [],
    },
    {
      title: "Thuốc thú y",
      describe: "",
      sub: [],
    },
  ]);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container category flex-row content-center bg-white-100">
          <div className="section heading-category">
            <div className="section-header">
              <div className="section-title">Danh mục sản phẩm</div>
            </div>

            <div className="section-content heading-category flex-col">
              {categories.map((Cate) => (
                <Title cate={Cate} />
              ))}
            </div>
          </div>

          <div className="sub-category flex-row content-center bg-pink-25 bd-rd-12">
            {categories[2].sub.map((Accessory) => (
              <SubCategory pet={Accessory} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
