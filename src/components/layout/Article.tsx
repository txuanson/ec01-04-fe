import React from "react";
import { useState } from "react";
import "./app.css";

function Article() {
  const [Article, setArticle] = useState([
    {
      title: "Hướng dẫn mua hàng",
      content:
        "Quý khách hàng có thể đặt hàng tại HuiMiTu Pet Accessories bằng một trong các cách dưới đây:\n\n1. GỌI ĐIỆN THOẠI\n- Gọi đến tổng đài 0123.456.789 (miễn phí cước gọi) để được tư vấn và mua hàng nhanh nhất.\n\n\n2.ĐẶT HÀNG TRỰC TUYẾN TRÊN WEBSITE\n- Quý khách đăng nhập bằng email và mật khẩu để đặt hàng. Nếu Quý khách lần đầu đặt hàng tại HuiMitu, xin vui lòng đăng ký tài khoản.\n- Đăng ký tài khoản tại HuiMiTu giúp quý khách xem lại các đơn hàng đã đặt và lưu giữ các sản phẩm đã cho vào giỏ hàng.\n\n\n3. HỆ THỐNG CHUỖI CỬA HÀNG HUIMITU TOÀN QUỐC\n- Bạn có thể tìm thấy cửa hàng HuiMiTu tại mục HỆ THỐNG CỬA HÀNG. Bạn chọn tỉnh/thành phố để xem vị trí siêu thị gần nơi bạn và có thể trực tiếp đến mua hàng. Hiện HuiMiTu không có đại lý và chi nhánh mà là 1 chuỗi cửa hàng Phụ kiện thú cưng toàn quốc có địa chỉ trung tâm điều hành là 227 Nguyễn Văn Cừ, Phường 4, Quận 5, TP Hồ Chí Minh.\n\n\nSau khi nhận được đơn đặt hàng của quý khách, HuiMiTu sẽ liên lạc với quý khách để xác nhận và giao hàng. ",
    },

    {
      title: "Chính sách Thanh toán",
      content:
        "Tại HuiMiTu Pet accessories, chúng tôi chấp nhận thanh toán qua 2 hình thức:\n\n- Thanh toán tiền mặt trực tiếp:\nKhách hàng sẽ tới cửa hàng mua trực tiếp hoặc đặt mua đến lấy và thanh toán tiền mặt cho nhân viên bán hàng.\n\n- Thanh toán COD (Thanh toán khi nhận hàng):\nHình thức này chỉ áp dụng cho khách hàng tại Sài Gòn. Khách hàng tại tỉnh vui lòng thanh toán online 100%.",
    },
    {
      title: "Chính sách Giao nhận hàng",
      content:
        "Là cửa hàng phụ kiện vật nuôi uy tín, chuyên nghiệp, chúng tôi luôn đảm bảo hỗ trợ vận chuyển sản phẩm đến được tay khách hàng trên khắp 63 tỉnh thành trên toàn quốc. Để hiểu rõ hơn về quy trình giao & nhận hàng tại HuiMiTu Pet accessories, quý khách vui lòng xem chi tiết tại phần bên dưới.\n\nPHƯƠNG THỨC GIAO HÀNG\n- Đối với khách hàng mua trực tiếp:\nSau khi thanh toán hoàn tất sẽ được nhận hàng ngay.\n\n- Đối với khách hàng mua hàng trực tuyến:\nSau khi thanh toán hoàn tất, nhân viên HuiMiTu Pet accessories sẽ tiến hành đóng gói và giao cho đơn vị vận chuyển.\n\n\nTHỜI GIAN GIAO HÀNG\n- Đối với đơn hàng nội thành HCM:\nThời gian nhận hàng sẽ từ 1 – 3 ngày tùy vào vị trí của khách hàng.\n\n- Đối với đơn hàng ngoại tỉnh:\nThời gian nhận hàng sẽ từ 2 – 7 ngày, tùy vào thời gian giao nhận của đối tác vận chuyển.\n\n\nCHI PHÍ GIAO HÀNG\nHuiMiTu Pet accessories sẽ tính phí theo quy định của các đối tác vận chuyển.",
    },
    {
      title: "Chính sách Đổi trả hàng",
      content:
        "HuiMiTu Pet accessories khuyến khích khách hàng nên kiểm tra sản phẩm (thú cưng, phụ kiện) trước khi tiến hành thanh toán để tránh trường hợp sản phẩm giao không đúng với yêu cầu.\n\nCHÍNH SÁCH ĐỔI TRẢ ĐỐI VỚI LOẠI HÌNH SẢN PHẨM:\n- Khách hàng sẽ được đổi trong vòng 7 ngày kể từ ngày nhận hàng và chỉ được đổi 1 lần duy nhất. Không áp dụng đối với các sản phẩm mua trong thời gian khuyến mãi.\n- Đối với phụ kiện, khi đổi phải là sản phẩm chưa qua sử dụng, còn nguyên seal / tem / nhãn / mác, không bị dơ bẩn.\n- Sản phẩm mới phải có giá tương đương hoặc cao hơn sản phẩm cũ. Khách hàng sẽ không được hoàn lại tiền thừa trong trường hợp sản phẩm mới có giá thấp hơn sản phẩm cũ.\n\n\nCHÍNH SÁCH ĐỔI TRẢ ĐỐI VỚI HÌNH THỨC MUA SẮM:\nĐối với khách hàng mua online:\n- Khách hàng vui lòng liên hệ với bộ phận chăm sóc khách hàng để được hỗ trợ đổi trả trong vòng 7 ngày kể từ ngày nhận sản phẩm bằng cách inbox fanpage hoặc gọi hotline.\n- Khách hàng vui lòng chịu phí vận chuyển.\n\nĐối với khách hàng mua trực tiếp:\n- Sản phẩm sẽ được thực hiện đổi trả trực tiếp tại cửa hàng của HuiMiTu Pet accessories trong vòng 7 ngày kể từ khi khách hàng mua sản phẩm. Quý khách vui lòng xuất trình hóa đơn với nhân viên cửa hàng.\n\n\nHuiMiTu Pet accessories chưa hỗ trợ các yêu cầu trả hàng / hoàn tiền thuộc về cảm quan như không ưng ý hoặc thay đổi quyết định mua hàng.\nTrong mọi trường hợp khiếu nại, quyết định của HuiMiTu Pet accessories sẽ là quyết định cuối cùng.",
    },
    {
      title: "Chính sách Bảo mật thông tin",
      content:
        "Hiểu được thắc mắc cũng như mối quan tâm của quý khách đến việc HuiMiTu Pet accessories sẽ sử dụng và quản lý thông tin cá nhân như thế nào, chúng tôi đã thiết lập nên “Chính sách bảo mật thông tin”. Chúng tôi cam kết bảo mật và tôn trọng tất cả thông tin cá nhân của khách hàng.\nĐể hiểu rõ hơn về “Chính sách bảo mật thông tin”, khách hàng vui lòng xem chi tiết tại các mục bên dưới. Bằng việc truy cập, để lại thông tin đặt hàng trên website, bạn đã đồng ý và chấp nhận với các phương pháp, yêu cầu, và/hoặc ràng buộc bởi các điều khoản, quy định bảo mật của HuiMiTu Pet accessories.\n\nKHI NÀO HUIMITU PET ACCESSORIES SẼ THU THẬP THÔNG TIN CÁ NHÂN?\n- Chúng tôi chỉ thu thập thông tin cá nhân của khách hàng trong trường hợp khách hàng đã đặt mua sản phẩm để dùng cho việc liên lạc và giao hàng.\n\n\nHUIMITU PET ACCESSORIES SẼ THU THẬP NHỮNG THÔNG TIN NÀO?\nHuiMiTu Pet Accessories chỉ thu thập các thông tin cơ bản sau:\n- Họ tên khách hàng\n- Số điện thoại\n- Email\n- Địa chỉ (dùng để giao hàng)\n\n\nMỤC ĐÍCH VÀ PHẠM VI THU THẬP THÔNG TIN\nHuiMiTu Pet Accessories cam kết mục đích thu thập những thông tin trên đều chủ yếu phục vụ cho việc chăm sóc khách hàng trước và sau khi mua. Cụ thể, đối với những thông tin khách hàng tự nguyện cung cấp, chúng tôi cam kết chỉ sử dụng trong các phạm vi sau:\n- Xử lý quy trình giao hàng: Bao gồm từ bước đầu xác nhận đơn đặt hàng đến khi đơn hàng được giao thành công.\n- Cung cấp cho các bên đối tác vận chuyển theo đúng quy định của việc vận chuyển hàng hóa.\n- Thông báo chương trình khuyến mãi, gửi thư cảm ơn & tri ân,..\n\n\nTất cả đều nhằm đến mục đích chăm sóc khách hàng, mang đến cho khách hàng những trải nghiệm tốt nhất, giúp gia tăng sự gắn bó giữa khách hàng và HuiMiTu Pet Accessories. Chúng tôi cam kết không sử dụng thông tin khách hàng cho những mục đích thương mại, mua bán thông tin.",
    },
  ]);
  return (
    <>
      <div className="body bg-grey-100">
        <div className="container bg-white-100">
          <div className="article flex-col text-black-100">
            <div className="article-title">{Article[0].title}</div>
            <div className="article-content">{Article[0].content}</div>
            <div className="article-footer text-pink-100">
              Trân trọng cảm ơn quý khách!
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Article;
