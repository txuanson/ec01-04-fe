import React from "react";
import { useState } from "react";
import "./app.css";
import introduce from "../../assets/introduce.png";

function Introduce() {
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container introduce bg-grey-100">
          <div className="container introduce-img bg-grey-100 bd-rd-12">
            <div className="introduce-img-mask">
              <div className="article flex-col text-white-100">
                <div className="article-title">GIỚI THIỆU VỀ HUIMITU</div>
                <div className="article-content">{`Đó là câu chuyện mà rất nhiều người đã nói về chúng tôi là ai và chúng tôi làm gì. Lịch sử của HuiMiTu là một câu chuyện thành công khi chúng tôi là tập hợp những người yêu động vật biết nắm lấy cơ hội đúng lúc cùng với tầm nhìn xa phát triển nâng tầm thành một doanh nghiệp. Bắt đầu từ cửa hàng nhỏ đầu tiên tại Sài Gòn năm 2022, chúng tôi đã chứng kiến và tạo ra nhiều thay đổi thú vị trong ngành công nghiệp và dịch vụ chăm sóc thú cưng tại Việt Nam.`}</div>
              </div>
            </div>
          </div>
        </div>

        <div className="container introduce bg-grey-100">
          <div className="container introduce-border bg-white-100 bd-rd-12">
            <div className="article flex-col text-black-100">
              <div className="article-title text-pink-100">
                CAM KẾT CỦA CHÚNG TÔI
              </div>
              <div className="article-content">{`- HuiMiTu cung cấp những sản phẩm và dịch vụ chất lượng tốt nhất dành cho thú cưng.\n- Phát triển nhiều loại dịch vụ phong phú để giúp cho cuộc sống của thú cưng đầy đủ và hạnh phúc hơn.\n- Xây dựng và mở rộng hệ thống các cửa hàng với những tiện ích tốt nhất cho thú cưng.\n- Làm việc không mệt mỏi để cải thiện cuộc sống của thú cưng nói riêng. Và các loài động vật khác tại Việt Nam nói chung.\n- Không ngừng sáng tạo để đáp ứng tốt hơn nữa nhu cầu của vật nuôi và mong muốn của khách hàng.`}</div>

              <div className="article-title text-pink-100">
                TẦM NHÌN CỦA CHÚNG TÔI
              </div>
              <div className="article-content">{`- Chúng tôi tin rằng đây là nhiệm vụ của chúng tôi để đảm bảo sức khỏe và hạnh phúc cho thú cưng, giúp chúng hiểu rằng chúng đang được yêu thương.\n- Chúng tôi tin rằng thú cưng sẽ làm cho con người tốt đẹp hơn, làm phong phú thêm cho cuộc sống của chúng ta và xây dựng xã hội văn minh, phát triển.\n- Chúng tôi tin tưởng vào những gì chúng tôi đang làm dựa trên giá trị tiêu chuẩn trong việc chăm sóc động vật, chất lượng sản phẩm và chăm sóc khách hàng.`}</div>

              <div className="article-title text-pink-100">
                ĐỊNH HƯỚNG CỦA CHÚNG TÔI
              </div>
              <div className="article-content">{`Chúng tôi tin rằng với khả năng tư vấn, giao tiếp và cung cấp dịch vụ tốt nhất cho khách hàng sẽ dẫn đến kết quả tài chính vững mạnh và phát triển lâu dài. HuiMiTu đánh giá những yếu tố góp phần phát triển cho công ty ở 4 cấp độ:\n\n- HIỆU QUẢ QUẢN LÝ LÃNH ĐẠO: Tạo ra một môi trường làm việc theo nhóm chuyên nghiệp. Không ngừng tái cơ cấu quản lý, chia sẻ tích lũy kinh nghiệm. Hoạt động ngoại khóa để tạo ra hiệu quả giá trị cho công việc.\n- TÂM HUYẾT VỚI NGHỀ: Coi trọng, đánh giá và khen thưởng những người có đóng góp tuyệt vời cho công ty. Xây dựng những chính sách đãi ngộ tốt nhất cho nhân sự gắn bó lâu dài.\n- GIÁ TRỊ CỦA KHÁCH HÀNG: Hãy giữ cho khách hàng quay trở lại và đem lại những giá trị thiết thực nhất.\n- ĐIỀU HÀNH TĂNG TRƯỞNG LỢI NHUẬN: Là yếu tố quyết định sự phát triển của doanh nghiệp trong tương lai.`}</div>

              <div className="article-footer text-pink-100">
                Trân trọng cảm ơn quý khách!
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Introduce;
