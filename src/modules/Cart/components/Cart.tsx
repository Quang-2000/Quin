import NavBarr from "../../../components/layout/NavBarr";
import Footerr from "../../../components/layout/Footerr";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import {
  addToCart,
  removeFromCart,
  updateQuantity,
} from "../../../stores/slices/cartSlice";
import { useEffect } from "react";
import { axiosClient } from "../../../api/axiosClient";
import { message } from "antd";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, totalPrice } = useSelector(
    (state: RootState) => state.cartSlice
  );

  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const response = await axiosClient.get("/cart");
        response.data.forEach((item: any) => {
          dispatch(addToCart(item));
        });
      } catch (error) {
        console.error("Lỗi khi lấy giỏ hàng từ Api:", error);
        message.error("Có lỗi xảy ra khi tải giỏ hàng.");
      }
    };
    fetchCartData();
  }, [dispatch]);

  const handleRemove = async (id: number) => {
    const confirmDelete = window.confirm(
      "Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?"
    );
    if (confirmDelete) {
      try {
        const response = await axiosClient.delete(`/cart/${id}`);
        if (response.status === 200) {
          dispatch(removeFromCart(id));
          message.success("Xóa sản phẩm thành công.", 2);
        } else {
          message.error("Có lỗi xảy ra khi xóa sản phẩm.");
        }
      } catch (err) {
        console.error("Lỗi khi xóa sản phẩm khỏi giỏ hàng:", err);
        message.error("Có lỗi xảy ra khi xóa sản phẩm.");
      }
    }
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };

  const handleCheckout = () => {
    navigate("/checkout");
  };
  let formatTotalAmount;
  return (
    <div>
      <NavBarr />
      <div className="container cart-table">
        <h2 className="text-center mb-4">Giỏ Hàng</h2>
        {items.length === 0 ? (
          <div className="text-center">
            Chưa có sản phẩm nào trong giỏ hàng.
          </div>
        ) : (
          <div>
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th>Sản phẩm</th>
                  <th>Giá</th>
                  <th>Số lượng</th>
                  <th>Tạm tính</th>
                  <th>Thao tác</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => {
                  const price = Number(item.price);
                  const formatPrice = price.toLocaleString();
                  const total = Number(item.price * item.quantity);
                  const formatTotal = total.toLocaleString();
                  const totalAmount = Number(totalPrice);
                  formatTotalAmount = totalAmount.toLocaleString();
                  return (
                    <tr key={item.id}>
                      <td>
                        <img
                          src={item.img}
                          alt={item.name}
                          className="product-img"
                        />
                        {item.name}
                      </td>
                      <td>{formatPrice} VND</td>
                      <td>
                        <div className="form-c">
                          <input
                            type="number"
                            className="form-control"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleUpdateQuantity(item.id, +e.target.value)
                            }
                          />
                        </div>
                      </td>
                      <td>{formatTotal} VND</td>
                      <td>
                        <button
                          className="btn btn-warning btn-update"
                          onClick={() =>
                            handleUpdateQuantity(item.id, item.quantity)
                          }
                        >
                          Cập nhật
                        </button>
                        <button
                          className="btn btn-danger btn-remove"
                          onClick={() => handleRemove(item.id)}
                        >
                          Xóa
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>

            <div className="d-flex justify-content-end">
              <div className="total-price">Tổng: {formatTotalAmount} VND</div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                className="btn btn-success btn-payment"
                onClick={handleCheckout}
              >
                Thanh toán
              </button>
            </div>
          </div>
        )}
      </div>

      <div className="back">
        <button className="btn btn-secondary btn-lg">
          <Link to="/productsList">Quay lại mua sắm</Link>
        </button>
      </div>

      <Footerr />
    </div>
  );
};

export default Cart;
