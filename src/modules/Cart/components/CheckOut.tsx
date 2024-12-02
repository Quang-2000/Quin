import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import NavBarr from "../../../components/layout/NavBarr";
import Footerr from "../../../components/layout/Footerr";
import { RootState } from "../../../stores/store";

const CheckOut = () => {
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );
  const [paymentMethod, setPaymentMethod] = useState("");

  return (
    <div>
      <NavBarr />
      <div className="back-to-cart">
        <Link to="/cartPage" className="btn btn-secondary">
          Quay về giỏ hàng
        </Link>
      </div>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <h3>Thông tin thanh toán</h3>
            <form>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Họ và tên
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">
                  Số điện thoại
                </label>
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  required
                />
              </div>
              <div className="mb-3">
                <label htmlFor="address" className="form-label">
                  Địa chỉ giao hàng
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="address"
                  required
                />
              </div>
            </form>
          </div>
          <div className="col-md-6">
            <h3>Đơn hàng của bạn</h3>
            <div className="order-summary">
              <ul className="list-unstyled">
                {items.map((item) => {
                  const price = Number(item.price * item.quantity);
                  const formatPrice = price.toLocaleString();
                  return (
                    <li key={item.id}>
                      <strong>Tên sản phẩm:</strong> {item.name} <br />
                      <strong>Số lượng:</strong> {item.quantity} <br />
                      <strong>Giá:</strong> {formatPrice} VND
                    </li>
                  );
                })}
              </ul>
              <h4>Tổng tiền: {totalPrice.toLocaleString()} VND</h4>
              <h5>Phương thức thanh toán</h5>
              <div className="mb-3">
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="transfer"
                    value="Chuyển khoản trước"
                    checked={paymentMethod === "Chuyển khoản trước"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="transfer">
                    Chuyển khoản trước
                  </label>
                </div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="paymentMethod"
                    id="cash"
                    value="Thanh toán khi nhận hàng"
                    checked={paymentMethod === "Thanh toán khi nhận hàng"}
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <label className="form-check-label" htmlFor="cash">
                    Thanh toán khi nhận hàng
                  </label>
                </div>
              </div>
              <button className="btn btn-black w-100">ĐẶT HÀNG</button>
            </div>
          </div>
        </div>
      </div>
      <Footerr />
    </div>
  );
};

export default CheckOut;
