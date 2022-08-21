import React from "react";
import "./app.css";
import logo from "../../assets/EC01-04-logo.png";

function ListDesc() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="list-describe flex-col text-black-100">
            <div className="list-title">Đồ dùng, phụ kiện</div>
            <div className="list-subtitle">
              {`Đồ dùng, phụ kiện cho thú cưng tại Huimitu nổi bật với sự đa dạng về sản phẩm. Bao gồm tất cả những vật dụng cần thiết cho sự sinh hoạt và phát triển của thú cưng. Phụ kiện chó mèo ngày trở nên quan trọng với đời sống của thú cưng. Tại Huimitu, bạn có thể mua sắm thả ga mà không lo về giá. Sản phẩm có đủ các size, mẫu mã phù hợp với mọi giống chó mèo và lứa tuổi.\nCòn gì hạnh phúc hơn khi thấy người bạn bốn chân được sống trong môi trường thân thiện với đầy đủ các tiện nghi. Khi trời lạnh chúng được khoác trên mình những chiếc áo lông ấm áp. Và khi chúng trở về nhà có một không gian riêng để nghỉ ngơi. Không chỉ khiến chúng trở nên xinh xắn hơn, phụ kiện còn giúp cún cưng cảm thấy được yêu thương và hạnh phúc.`}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ListDesc;
