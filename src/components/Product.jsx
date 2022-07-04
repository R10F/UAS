import React from "react";
import { FaStar } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import Star from "./Star";
import Aos from "aos";

class Product extends React.Component {
  render() {
    Aos.init();
    let harga = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(this.props.productDetail.harga);

    return (
      <div className="col-md-3 my-2" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
        <div className="card mb-4 product-wap rounded-0 h-100">
          <img className="card-img rounded-0 img-fluid" src={this.props.productDetail.src} alt={this.props.productDetail.name} />
          <div className="card-body">
            <Link to={`/catalog/${this.props.productDetail.id}`}>
              <h5 className="text-decoration-none">{this.props.productDetail.nama}</h5>
            </Link>
            <div className=" d-flex justify-content-start mb-1">
              <Star rating={this.props.productDetail.rating} />
            </div>
            <p className="mb-0">{harga}</p>
          </div>
          <div className="card-footer d-flex justify-content-end">{this.props.children}</div>
        </div>
      </div>
    );
  }
}

export default Product;
