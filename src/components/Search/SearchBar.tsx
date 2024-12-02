import { SearchOutlined } from "@mui/icons-material";
import { Button, Tooltip } from "antd";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getValueSearch } from "../../stores/slices/productsPageSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const dispatch = useDispatch();
  const handleSearch = async (e: any) => {
    e.preventDefault();
    await dispatch(getValueSearch(searchTerm));
  };

  return (
    <div>
      <div className="form">
        <form
          className="d-flex justify-content-center align-items-center"
          role="search"
        >
          <input
            className="form-control me-2"
            type="search"
            placeholder="Tìm kiếm sản phẩm"
            aria-label="Search"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Tooltip title="Tìm kiếm">
            <Button
              type="primary"
              shape="circle"
              icon={<SearchOutlined />}
              htmlType="submit"
              onClick={handleSearch}
            />
          </Tooltip>
        </form>
      </div>
    </div>
  );
};

export default SearchBar;
