import React from "react";
import { Outlet, NavLink } from "react-router-dom";

class Layout extends React.Component {
  render() {
    return (
      <main>
        <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
          <div className="container px-2 px-lg-3">
            <img src={require("../assets/img/laptopu2.png")} width="300px" alt="LaptopU Logo" />
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link" aria-current="page" href="#!">
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/about" className="nav-link">
                    About
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/catalog" className="dropdown-item nav-link">
                    All Products
                  </NavLink>
                </li>
              </ul>
              <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                  <i className="bi-cart-fill me-1"></i>
                  Cart
                  <span className="badge bg-dark text-white ms-1 rounded-pill">{this.props.inCart}</span>
                </button>
              </form>
            </div>
          </div>
        </nav>
        <Outlet />

        <footer className="py-5 bg-dark">
          <div className="container">
            <p className="m-0 text-center text-white">Copyright &copy; Team Apple 2022</p>
          </div>
        </footer>
      </main>
    );
  }
}

export default Layout;
