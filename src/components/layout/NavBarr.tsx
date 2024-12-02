import React from "react";
import { Link } from "react-router-dom";

const NavBarr = () => {
  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/">Trang chủ</Link>
      </div>
      <div className="nav-item">
        <Link to="/productsList">Sản phẩm</Link>
      </div>
      <div className="nav-item">
        <Link to="/news">Tin tức</Link>
      </div>
      <div className="nav-item">
        <Link to="/introduce">Giới thiệu</Link>
      </div>
      <div className="nav-item">
        <Link to="/salesPolicy">Chính sách bán hàng</Link>
      </div>
      <div className="nav-item">
        <Link to="/contact">Liên hệ</Link>
      </div>
    </div>
  );
};

export default NavBarr;
