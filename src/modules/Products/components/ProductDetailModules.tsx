import Headerr from "../../../components/layout/Headerr";
import NavBarr from "../../../components/layout/NavBarr";
import Footerr from "../../../components/layout/Footerr";

const ProductDetailModules = () => {
  return (
    <div>
      <Headerr />
      <NavBarr />
      <div className="product-details">
        <img
          className="product-image"
          src="https://www.petmart.vn/wp-content/uploads/2020/12/sup-thuong-cho-meo-vi-ga-va-tom-iris-chicken-shrimp-soup1-400x400.jpg"
          alt="Súp thưởng cho mèo"
        />
        <div className="product-info">
          <h1 className="product-title">
            Súp thưởng cho mèo vị gà và tôm IRIS OHYAMA Chicken Shrimp Soup
          </h1>
          <p className="brand">Thương hiệu: IRIS OHYAMA</p>
          <div className="rating">
            <span>Rating: 4.5/5</span>
            <p className="price">120,000 VND</p>
          </div>
          <div className="description">
            <h3>Mô tả:</h3>
            <p>
              Súp thưởng cho mèo vị gà và tôm IRIS OHYAMA Chicken Shrimp Soup có
              thể rút ngắn khoảng cách giữa bạn và thú cưng. Các loại thảo mộc
              và ngũ cốc hỗn hợp tạo nên món ăn vừa ngon vừa bổ. Tạo sự ngon
              miệng và dễ tiêu hóa. Cân bằng dinh dưỡng, tươi ngon mỗi ngày.
            </p>
          </div>
        </div>
      </div>
      <Footerr />
    </div>
  );
};

export default ProductDetailModules;
