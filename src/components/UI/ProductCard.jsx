import React, { useState } from "react";
import { motion } from "framer-motion";
import "../../styles/product-card.css";
import { Col } from "reactstrap";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlice";

const ProductCard = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item.quantity);

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id: item.id,
        productName: item.productName,
        price: item.price,
        imgUrl: item.imgUrl,
      })
    );

    setQuantity((prevQuantity) => prevQuantity - 1);

    toast.success("Product added successfully");
  };

  return (
    <Col lg="3" md="4" className="mb-4">
      <div className="product-card">
        <div className="product-card__image">
          <motion.img
            whileHover={{ scale: 1.05 }}
            src={item.imgUrl}
            alt={item.productName}
            className="product-card__image-element"
          />
        </div>
        <div className="product-card__content">
          <h3 className="product-card__name">
            <Link to={`/shop/${item.id}`}>{item.productName}</Link>
          </h3>
          <div className="product-card__bottom">
            <span className="product-card__price">${item.price}</span>
            <button className="product-card__button" onClick={addToCart}>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ProductCard;
