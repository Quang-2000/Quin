import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../stores/store";
import {
  fetchProductsPage,
  fetchProductsPageName,
} from "../../../stores/slices/productsPageSlice";
import { fetchProductCategory } from "../../../stores/slices/productsListSlice";
import { addToCart } from "../../../stores/slices/cartSlice";
import { message } from "antd";
import { axiosClient } from "../../../api/axiosClient";

const ProductsPageModules = () => {
  const dispatch: any = useDispatch();
  const [product, setProduct] = useState([]);
  const { valueSearch } = useSelector(
    (state: RootState) => state.productsPageSlice
  );
  const { idCategory } = useSelector(
    (state: RootState) => state.productsListSlice
  );

  useEffect(() => {
    const fetchData = async () => {
      const res: any = await dispatch(fetchProductCategory(idCategory));
      console.log(res);
      setProduct(res?.payload);
    };
    fetchData();
  }, [dispatch, idCategory]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(fetchProductsPageName({ name: valueSearch }));
      setProduct(res?.payload?.data);
    };
    fetchData();
  }, [valueSearch, dispatch]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await dispatch(fetchProductsPage());
      setProduct(res?.payload?.data);
    };
    fetchData();
  }, []);

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
    let stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<i key={`full-${i}`} className="fas fa-star"></i>);
    }

    for (let i = 0; i < halfStars; i++) {
      stars.push(<i key={`half-${i}`} className="fas fa-star-half-alt"></i>);
    }

    for (let i = 0; i < emptyStars; i++) {
      stars.push(<i key={`empty-${i}`} className="far fa-star"></i>);
    }

    return stars;
  };

  const handleAddToCart = async (product: any) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity: 1,
      img: product.img,
    };

    dispatch(addToCart(item));

    try {
      await axiosClient.post("/cart", item);
      message.success("Sản phẩm đã được thêm vào giỏ hàng !", 2);
    } catch (error) {
      console.log("Lỗi khi thêm sản phẩm vào giỏ hàng", error);
      message.error("sản phẩm này đã có trong giỏ hàng", 2);
    }
  };

  return (
    <div className="products-page">
      <div className="product-grid">
        {product?.map((product: any) => {
          const prices = product?.price;
          const formatPrice = prices?.toLocaleString();
          const rating = product?.rating || 0;
          return (
            <div key={product.id} className="product-item">
              <img src={product.img} alt={product.name} />
              <h2>{product.name}</h2>
              <div className="rating">{renderStars(rating)}</div>
              <h2>{formatPrice} VNĐ</h2>
              <div className="cart-icon">
                <button
                  className="btn btn-primary"
                  onClick={() => handleAddToCart(product)}
                >
                  <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductsPageModules;
