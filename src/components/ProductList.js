import React from "react";
import "../css/ProductList.css";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineBed } from "react-icons/md";
import { BiBath } from "react-icons/bi";
import { BsPlusSquare } from "react-icons/bs";

const ProductList = ({ allProducts }) => {
  return (
    <div className="productList-container">
      <div className="productList-div">
        <div className="productList-div-child">
          {allProducts.map((item, index) => (
            <div className="product-item" key={index}>
              <div className="product-img">
                <img src={item.imgSrc} alt="product-img" />
              </div>
              <div className="product-content">
                <div className="product-child-div1">
                  <p className="price-p">
                    <span
                      style={{
                        fontSize: "20px",
                        fontWeight: "600",
                        color: "blueviolet",
                      }}
                    >
                      ${item.price}
                    </span>
                    <span
                      style={{
                        fontSize: "13px",
                        fontWeight: "500",
                        color: "gray",
                      }}
                    >
                      /month
                    </span>
                  </p>
                  <p className="heart-icon-p">
                    <FaRegHeart className="heart-icon" />
                  </p>
                </div>
                <h4 className="card-title">
                  <span>{item.title}</span>
                  <span>{item.type}</span>
                </h4>
                <h5
                  style={{
                    fontSize: "15px",
                    color: "gray",
                    textTransform: "capitalize",
                  }}
                >
                  {item.city}
                </h5>
                <hr style={{ color: "lightgray" }} />
                <div className="product-child-div2">
                  <p>
                    <MdOutlineBed className="all-icons" />
                    <span>3 Beds</span>
                  </p>
                  <p>
                    <BiBath className="all-icons" />
                    <span>2 Bathrooms</span>
                  </p>
                  <p>
                    <BsPlusSquare className="all-icons" />
                    <span>5x7m</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
          {allProducts && allProducts.length === 0 && (
            <div className="no-result-found">
              <h2>No Result Found!</h2>
              <p>Please enter other values.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
