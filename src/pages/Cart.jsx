import React from "react";
import CartPerProduct from "../components/CartPerProduct";
import { Outlet } from "react-router-dom";
import { FiPlus, FiMinus, FiTrash2 } from "react-icons/fi";
import Swal from "sweetalert2";
class Cart extends React.Component {
  payment = () => {
    Swal.fire({
      icon: "success",
      text: "Thanks For Shopping! ",
    });
  };
  render() {
    let allcartitem = this.props.cartItems.map((cartitem) => {
      return <CartPerProduct productDetail={cartitem} key={"cart" + cartitem.id} addToCart={this.props.addToCart} deleteFromCart={this.props.deleteFromCart} />;
    });

    return (
      <>
        <section className="container h-100 py-5">
          <div className="row d-flex justify-content-center align-items-center h-100 p-2">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-normal mb-0 text-black">Shopping Cart</h3>
              {/* <div>
                <p className="mb-0"><span className="text-muted">Sort by:</span> <a href="#!" className="text-body">price <i
                      className="fas fa-angle-down mt-1"></i></a></p>
              </div> */}
            </div>

            {this.props.cartItems.length === 0 ? (
              <h2>Oops, shopping cart is empty!</h2>
            ) : (
              <>
                {allcartitem}
                <div className="card mb-4 bg-teal">
                  <form className="card-body p-4 d-flex flex-row">
                    <input type="text" id="discount" className="form-control form-control-lg" placeholder="Discount Code" />
                    <button type="submit" className="btn btn-outline-dark btn-lg ms-3">
                      Apply
                    </button>
                  </form>
                </div>
                <button type="button" className="btn btn-success btn-lg" onClick={this.payment}>
                  Proceed to Pay
                </button>
              </>
            )}
          </div>
        </section>
      </>
    );
  }
}
export default Cart;
