import React from "react";

class SalesProduct extends React.Component {
  constructor(props) {
    super(props);
  }

  addToCart = () => {
    this.props.addToCart(this.props.product.id, 1);
  }

  render() {
    return (
      <div className="col mb-5">
        <div className="card h-100">
          <div className="badge bg-dark text-white position-absolute" style={{ top: "0.5rem", right: "0.5rem" }}>
            Sale
          </div>

          <img className="card-img-top" src={this.props.product.src} alt="card" />

          <div className="card-body p-4">
            <div className="text-center">
              <h5 className="fw-bolder">{this.props.product.nama}</h5>
              <span className="fs-5 text-danger">{this.props.product.harga}</span>
              <br />
              <span className="text-muted text-decoration-line-through">
                <small>{this.props.product.harga}</small>
              </span>
            </div>
          </div>

          <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
            <div className="text-center">
              <button className="btn btn-outline-dark mt-auto add" onClick={this.addToCart}>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SalesProduct