import React from "react";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";

class Catalog extends React.Component {
  constructor() {
    super();
    this.products = [
      [require("../assets/img/card/card1.png"), "ROG Zephyrus Duo (2022) ", "Rp 59.999.000", 4],
      [require("../assets/img/card/card1.png"), "ROG Strix Scar 17 (2022)", "Rp 46.408.000", 5],
      [require("../assets/img/card/card1.png"), "ROG Zephyrus M16 (2022) ", "Rp44.389.900", 5],
      [require("../assets/img/card/card1.png"), "ROG Strix Scar 15 (2022) ", "Rp34.298.991", 3],
      [require("../assets/img/card/card1.png"), "ASUS TUF Gaming F15 (2022) ", "Rp23.499.000", 4],
      [require("../assets/img/card/card1.png"), "2021 ASUS TUF Dash F15 ", "Rp18.999.000", 5],
    ];
  }

  render() {
    let allproduct = this.products.map((product) => {
      return (
        <div className="col-md-3">
          <div className="card mb-4 product-wap rounded-0 h-100">
            <img className="card-img rounded-0 img-fluid" src={product[0]} alt="product" />
            <div className="card-body">
              <h5>{product[1]}</h5>
              {/* <Link to={product.name} /> */}
              <div className=" d-flex justify-content-start mb-1">
                {[...Array(product[3])].map((star) => {
                  return <FaStar className="text-warning" />;
                })}
                {[...Array(5 - product[3])].map((star) => {
                  return <FaStar className="text-muted" />;
                })}
                <i className="text-warning fa fa-star"></i>
                <i className="text-warning fa fa-star"></i>
                <i className="text-warning fa fa-star"></i>
                <i className="text-muted fa fa-star"></i>
                <i className="text-muted fa fa-star"></i>
              </div>
              <p className="mb-0">{product[2]}</p>
            </div>
            <div className="card-footer justify-content-end d-flex">
              <button className="btn btn-outline-dark">Add to Cart</button>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="container py-5">
        <div className="row">
          <h1>Catalog</h1>
          <div className="row">{allproduct}</div>
        </div>
      </div>
    );
  }
}
export default Catalog;
