import React, { useState, Fragment } from "react";
import "./Search.css";
import { useNavigate } from "react-router-dom";
import Metadata from "../layout/Metadata";

const Search = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      navigate(`/products/${keyword}`);
    } else {
      navigate("/products");
    }
  };
  return (
    <Fragment>
      <Metadata title="SEARCH --- TRADE-E-TIONAL" />

      <form className="searchBox" onSubmit={searchSubmitHandler}>
        <input
          placeholder="Search a Product..."
          type="text"
          onChange={(e) => setKeyword(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </Fragment>
  );
};

export default Search;
