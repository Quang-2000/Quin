import React from "react";
import CustomerManagement from "./components/CustomerManagement";
import ProductManagement from "./components/ProductManagement";
import OrderManagement from "./components/OrderManagement";

const AdminModules = () => {
  return (
    <div className="admin-page">
      <div className="admin-section">
        <h2>Quản lý khách hàng</h2>
        <CustomerManagement />
      </div>
      <div className="admin-section">
        <h2>Quản lý sản phẩm</h2>
        <ProductManagement />
      </div>
      <div className="admin-section">
        <h2>Quản lý đơn hàng</h2>
        <OrderManagement />
      </div>
    </div>
  );
};

export default AdminModules;
