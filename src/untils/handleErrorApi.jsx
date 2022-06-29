import { message } from "antd";
import { logout } from "./auth";

export default function handleErrorApi(err) {
  if (!err.response || !err.response.status) {
    console.log(err);
  } else {
    const status = err.response.status;

    if (status === 401) {
      message.error("Chưa xác thực!");
      window.location.href = '/';
    }
    if (status === 400) {
      message.error(err.response.data.message ?? "Có lỗi xảy ra!");
    } else if (status === 403) {
      message.error(err.response.data.message ?? "Tài khoản của bạn đã bị khóa!");
      if (err.response.data.message.includes("banned")) {
        logout();
      }
      setTimeout(() => {
        window.location.href = document.referrer;
      }, 3000);

      // window.location.href = "/404";
    } else if (status === 429) {
      message.warning("Thực hiện quá nhanh, hãy thử lại sau.");
    } else {
      message.error(err.response.data.message ?? "Có lỗi xảy ra!");
    }
  }
}