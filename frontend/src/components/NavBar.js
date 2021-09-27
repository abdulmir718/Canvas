import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./NavBar.css";

const NavBar = ({ click }) => {
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((qty) => qty + 1, 0);
  };
  return (
    <nav className="navbar">
      <div className="leftBar">
        <Link to="/">
          <i className="icons fab fa-instagram"></i>
        </Link>

        <Link to="/">
          <i className="icons fab fa-facebook"></i>
        </Link>

        <Link to="/">
          <i className="icons fab fa-pinterest"></i>
        </Link>

        <Link to="/">
          <i className="icons fab fa-twitter"></i>
        </Link>
      </div>

      <div className="centerBar">
        <div className="centerBarText">
          <Link to="/">
            Home
            <span className="centerLinks homeLink"></span>
          </Link>

          <Link to="/about">
            Meet the Artist
            <span className="centerLinks aboutLink"></span>
          </Link>

          <Link to="/contact">
            Contact
            <span className=" centerLinks contactLink"></span>
          </Link>
        </div>
      </div>
      <div className="rightBar">
        <Link to="/cart">
          <div className="cartContainer">
            <i className=" cartIcon fas fa-shopping-bag"></i>
            <span className=" rightLinks cartLink"></span>
            <p className="cartCount"> {getCartCount()}</p>
          </div>
        </Link>

        <Link to="/login">
          Login
          <span className="rightLinks loginLink"></span>
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
