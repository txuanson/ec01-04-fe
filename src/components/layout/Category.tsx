import React, { useState } from "react";
import "./app.css";

function Title(props) {
  return (
    <>
      <button type="button" className="category-item category-item-title">
        {props.cate.title}
      </button>
    </>
  );
}

function SubCategory(props) {
  return (
    <>
      <div className="sub-category">
        <button type="button" className="sub-title">
          {props.pet.title}
        </button>

        <div className="sub-category-row">
          {props.pet.sub.map((SubCate) => (
            <div className="sub-category-container">
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
        <div className="container row-item category bg-white-100">
          <div className="heading">
            <div className="section-title text-black-100">
              Danh mục sản phẩm
            </div>

            <div className="heading-category">
              {categories.map((Cate) => (
                <Title cate={Cate} />
              ))}
            </div>
          </div>

          <div className="sub bg-pink-25">
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
