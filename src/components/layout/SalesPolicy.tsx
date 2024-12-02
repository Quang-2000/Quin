import React from "react";
import Headerr from "./Headerr";
import NavBarr from "./NavBarr";
import Footerr from "./Footerr";

const SalesPolicy = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <section>
        <h2>Chính sách bán hàng</h2>

        <div className="policy-section">
          <h3>Chính sách giao hàng</h3>
          <ul>
            <li>Miễn phí giao hàng với đơn hàng từ 500,000 VND.</li>
            <li>Thời gian giao hàng: 1-3 ngày làm việc, tùy vào khu vực.</li>
            <li>
              Chúng tôi giao hàng đến tất cả các tỉnh thành trên toàn quốc.
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Chính sách đổi trả</h3>
          <ul>
            <li>
              Chúng tôi hỗ trợ đổi trả sản phẩm trong vòng 7 ngày kể từ ngày
              nhận hàng.
            </li>
            <li>
              Sản phẩm cần còn nguyên vẹn bao bì, không bị hư hỏng, hoặc sử
              dụng.
            </li>
            <li>
              Quý khách vui lòng giữ lại hóa đơn mua hàng và liên hệ với chúng
              tôi để tiến hành đổi trả.
            </li>
          </ul>
        </div>

        <div className="policy-section">
          <h3>Chính sách bảo hành</h3>
          <ul>
            <li>
              Chúng tôi cam kết sản phẩm luôn trong tình trạng tốt nhất trước
              khi giao hàng.
            </li>
            <li>
              Đối với các sản phẩm bị lỗi do nhà sản xuất, chúng tôi sẽ hỗ trợ
              đổi hoặc bảo hành sản phẩm theo quy định.
            </li>
          </ul>
        </div>
      </section>
      <Footerr />
    </div>
  );
};

export default SalesPolicy;
