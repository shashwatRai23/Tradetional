import React, { Fragment } from "react";
import { CgMouse } from "react-icons/cg";
import ProductCard from "./ProductCard";
import Metadata from "../layout/Metadata";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import { getProduct } from "../../actions/productAction";
import Loader from "../layout/Loader/Loader";

// const product = {
//   name: "Blue t-shirt",
//   images: [{ url: "https://i.ibb.co/DRST11n/1.webp" }],
//   price: "$30",
//   _id: "_Shashwat",
// };

const Home = () => {
  const dispatch = useDispatch();
  const { loading, products } = useSelector(
    (state) => state.products
  );

  React.useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <Metadata title="Trad-E-tional" />
          <div className="banner">
            <div>
              <p>Welcome to Tradetional</p>
              <h1>Find Amazing products below</h1>
              <a href="#home_container" className="bannerBtn">
                <button>
                  Scroll
                  <CgMouse className="btnIcon" />
                </button>
              </a>
            </div>
          </div>
          <h2 className="home_heading">Featured Products</h2>
          <div className="home_container" id="home_container">
            {products &&
              products.map((product) => {
                return <ProductCard product={product} key={product._id} />;
              })}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

export default Home;
