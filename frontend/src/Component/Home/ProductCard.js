import React from "react";
import { Link } from "react-router-dom";
import ReactStars from "react-rating-stars-component";

const ProductCard = (props) => {
  const options = {
    edit: false,
    color: "rgba(20,20,20,0.1)",
    activeColor: "#ffd700",
    size: window.innerWidth < 600 ? 20 : 25,
    value: props.product.ratings,
    isHalf: true,
  };
  return (
    <Link className="productCard" to={`/product/${props.product._id}`}>
      <img src={props.product.images[0].url} alt={props.product.name} />
      <p>{props.product.name}</p>
      <div>
        <ReactStars {...options} />
        <span>{props.product.numOfReviews} Reviews</span>
      </div>
      <span>₹{props.product.price}</span>
    </Link>
  );
};

export default ProductCard;
