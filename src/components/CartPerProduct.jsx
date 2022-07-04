import React from "react";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
class CartPerProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      qty: this.props.productDetail.qty,
    };
  }
  handlechange = () => {
    this.setState({ qty: this.props.productDetail.qty });
  };
  handleinput = (e) => {
    let newQty = e.target.value;
    this.setState({ qty: e.target.value });
    this.props.addToCart(this.props.productDetail.id, newQty - this.props.productDetail.qty);
  };

  deleteFromCart = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire("Deleted!", "Your file has been deleted.", "success");

        this.props.deleteFromCart(this.props.productDetail.id);
      }
    });
  };
  render() {
    let harga = new Intl.NumberFormat("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0 }).format(this.props.productDetail.harga * this.props.productDetail.qty);
    return (
      <div className="card rounded-3 mb-4">
        <div className="card-body p-4">
          <div className="row d-flex justify-content-between align-items-center">
            <div className="col-md-2 col-lg-2 col-xl-2">
              <img src={this.props.productDetail.src} className="img-fluid rounded-3" alt={this.props.productDetail.nama} />
            </div>
            <div className="col-md-3">
              <p className="lead fw-normal mb-2">{this.props.productDetail.nama}</p>
            </div>

            <div className="col-md-3 col-xl-2 d-flex align-items-center my-2">
              <button
                className="btn btn-link px-2"
                onClick={() => {
                  this.props.addToCart(this.props.productDetail.id, -1);
                  this.handlechange();
                }}
              >
                <FiMinus />
              </button>

              <input name="quantity" min="0" value={this.state.qty} type="number" className="form-control form-control-sm" onChange={this.handleinput} />

              <button
                className="btn btn-link px-2"
                onClick={() => {
                  console.log(this.props.productDetail);
                  this.props.addToCart(this.props.productDetail.id, 1);
                  this.handlechange();
                }}
              >
                <FiPlus />
              </button>
            </div>

            <div className="col-md-3 col-lg-2 offset-lg-1">
              <h5 className="mb-0">{harga}</h5>
            </div>
            <div className="text-end col-md-1">
              <button className="btn text-danger fs-5" onClick={this.deleteFromCart}>
                <FiTrash2 />
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default CartPerProduct;
