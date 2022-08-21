import React, { useEffect, useState } from "react";
import "./app.css";

function Title(props) {
  return (
    <>
      <button type="button" className="category-btn bd-rd-12">
        {props.cate.Name}
      </button>
    </>
  );
}

function SubCategory(props) {
  return (
    <>
      <div className="pet-category flex-col content-center">
        <button type="button" className="pet-btn content-center bd-rd-12">
          {props.pet.Name}
        </button>

        <div className="pet-sub-category flex-col">
          {props.pet.Child.map((SubCate) => (
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
      Name: "Thức ăn, dinh dưỡng",
      Desc: "",
      Child: [],
    },
    {
      Name: "Vệ sinh, chăm sóc",
      Desc: "",
      Child: [],
    },
    {
      Name: "Đồ dùng, phụ kiện",
      Desc: "",
      Child: [
        {
          Name: "Phụ kiện cho chó",
          Desc: "",
          Child: [
            { Name: "Quần áo & Mũ nón", Desc: "" },
            { Name: "Vòng cổ & Dây dắt", Desc: "" },
            { Name: "Rọ mõm", Desc: "" },
            { Name: "Đồ chơi & Huấn luyện", Desc: "" },
            { Name: "Địu chó", Desc: "" },
            { Name: "Túi xách chó", Desc: "" },
            { Name: "Balo đựng chó", Desc: "" },
            { Name: "Lồng vận chuyển", Desc: "" },
          ],
        },
        {
          Name: "Phụ kiện cho mèo",
          Desc: "",
          Child: [
            { Name: "Quần áo & Trang sức", Desc: "" },
            { Name: "Vòng cổ & Dây dắt", Desc: "" },
            { Name: "Đồ chơi & Huấn luyện", Desc: "" },
            { Name: "Túi xách mèo", Desc: "" },
            { Name: "Balo đựng mèo", Desc: "" },
            { Name: "Lồng vận chuyển", Desc: "" },
          ],
        },
      ],
    },
    {
      Name: "Nhà, chuồng, nệm",
      Desc: "",
      Child: [],
    },
    {
      Name: "Thuốc thú y",
      Desc: "",
      Child: [],
    },
  ]);
  // const getCategories = async () => {
  //   const res = await fetch("https://ec01-04-be.herokuapp.com/category");
  //   const data = await res.json();
  //   //setCategories(data);
  //   console.log(data);
  // }
  // useEffect(() => {
  //   getCategories();
  // } , []);
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
            {categories[2].Child.map((Accessory) => (
              <SubCategory pet={Accessory} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
