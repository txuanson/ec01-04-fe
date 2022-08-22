import React, { useEffect, useState } from "react";
import "./app.css";

function Title(props) {
  return (
    <>
      <button type="button" className="category-btn bd-rd-12">
        {props.item.mName}
      </button>
    </>
  );
}

function SubCategory(props) {
  return (
    <>
      <div className="pet-category flex-col content-center">
        <button type="button" className="pet-btn content-center bd-rd-12">
          {props.item.mName}
        </button>

        <div className="pet-sub-category flex-col">
          {props.item.childCategories.map((child) => (
            <div className="pet-sub-container">
              <Title item={child} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

function Category() {
  const [Category, setCategory] = useState([
    {
      mName: "Thức ăn, dinh dưỡng",
      mDesc: "",
      childCategories: [
        {
          mName: "Thức ăn cho chó",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
        {
          mName: "Thức ăn cho mèo",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
      ],
    },
    {
      mName: "Vệ sinh, chăm sóc",
      mDesc: "",
      childCategories: [
        {
          mName: "Chăm sóc cho chó",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
        {
          mName: "Chăm sóc cho mèo",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
      ],
    },
    {
      mName: "Đồ dùng, phụ kiện",
      mDesc: "",
      childCategories: [
        {
          mName: "Phụ kiện cho chó",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
        {
          mName: "Phụ kiện cho mèo",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Trang sức", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Túi xách mèo", mDesc: "" },
            { mName: "Balo đựng mèo", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
      ],
    },
    {
      mName: "Nhà, chuồng, nệm",
      mDesc: "",
      childCategories: [
        {
          mName: "Nhà cho chó",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
        {
          mName: "Nhà cho mèo",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
      ],
    },
    {
      mName: "Thuốc thú y",
      mDesc: "",
      childCategories: [
        {
          mName: "Thuốc cho chó",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
        {
          mName: "Thuốc cho mèo",
          mDesc: "",
          childCategories: [
            { mName: "Quần áo & Mũ nón", mDesc: "" },
            { mName: "Vòng cổ & Dây dắt", mDesc: "" },
            { mName: "Rọ mõm", mDesc: "" },
            { mName: "Đồ chơi & Huấn luyện", mDesc: "" },
            { mName: "Địu chó", mDesc: "" },
            { mName: "Túi xách chó", mDesc: "" },
            { mName: "Balo đựng chó", mDesc: "" },
            { mName: "Lồng vận chuyển", mDesc: "" },
          ],
        },
      ],
    },
  ]);

  // const getCategory = async () => {
  //   const res = await fetch("https://ec01-04-be.herokuapp.com/category");
  //   const data = await res.json();
  //   setCategory(data);
  // };
  // useEffect(() => {
  //   getCategory();
  // }, []);

  return (
    <>
      <div className="body bg-grey-100">
        <div className="container category flex-row content-center bg-white-100">
          <div className="section heading-category">
            <div className="section-header">
              <div className="section-title">Danh mục sản phẩm</div>
            </div>

            <div className="section-content heading-category flex-col">
              {Category.map((cate) => (
                <Title item={cate} />
              ))}
            </div>
          </div>

          <div className="sub-category flex-row content-center bg-pink-25 bd-rd-12">
            {Category[0].childCategories.map((child) => (
              <SubCategory item={child} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Category;
