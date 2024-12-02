import React from "react";
import { Link } from "react-router-dom";

const Footerr = () => {
  return (
    <div>
      <div className="footer">
        <div>
          <div>GIAO HÀNG MIỄN PHÍ</div>
          <div>Với đơn trên 500.000d</div>
        </div>

        <div>
          <div>HỖ TRỢ 24/7</div>
          <div>Nhiệt tình chu đáo</div>
        </div>

        <div>
          <div>ĐỔI TRẢ TRONG NGÀY</div>
          <div>Nhanh chóng thuận tiện</div>
        </div>

        <div>GIÁ TIÊU CHUẨN</div>
      </div>

      <div className="footer-center">
        <div className="box1">
          <img
            className="img-logo"
            src="https://c8.alamy.com/comp/2B5YGHB/vector-cat-logo-design-template-abstract-animal-icon-label-for-store-veterinary-clinic-shelter-business-services-flat-illustration-background-wit-2B5YGHB.jpg"
            alt=""
          />
          <div>
            <div className="name-shop">Catto Shop</div>
          </div>

          <div>
            <span className="red-text">Trụ sở chính:</span> 20 Xô Viết Nghệ
            Tĩnh, phường Hòa Cường Nam, quận Hải Châu, TP Đà Nẵng, Việt Nam
          </div>
          <div>
            <span className="red-text">Hotline:</span> 0385686633 - 0987475837
          </div>
          <div>
            <span className="red-text">Email:</span> catshop@catto.vn
          </div>
        </div>

        <div className="box2">
          <div>VỀ CHÚNG TÔI</div>
          <div>
            <Link to="/">Trang chủ</Link>
          </div>
          <div>
            <Link to="/productsList">Sản phẩm</Link>
          </div>
          <div>
            <Link to="/news">Tin tức</Link>
          </div>
          <div>
            <Link to="/introduce">Giới thiệu</Link>
          </div>
          <div>
            <Link to="/salesPolicy">Chính sách bán hàng</Link>
          </div>
          <div>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </div>

        <div className="box3">
          <div>TIN KHUYẾN MÃI</div>
          <div>
            <Link to="/">Trang chủ</Link>
          </div>
          <div>
            <Link to="/productsList">Sản phẩm</Link>
          </div>
          <div>
            <Link to="/news">Tin tức</Link>
          </div>
          <div>
            <Link to="/introduce">Giới thiệu</Link>
          </div>
          <div>
            <Link to="/salesPolicy">Chính sách bán hàng</Link>
          </div>
          <div>
            <Link to="/contact">Liên hệ</Link>
          </div>
        </div>

        <div className="box4">
          <div>TỔNG ĐÀI HỖ TRỢ</div>
          <div>
            <Link to="">0385686633</Link>
          </div>
          <div>
            <Link to="">0987475837</Link>
          </div>
        </div>
      </div>

      <div className="footer-end">
        © Bản quyền thuộc về Cafein Team | Cung cấp bởi Sapo
      </div>
    </div>
  );
};

export default Footerr;
