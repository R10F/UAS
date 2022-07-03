import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import productList from "./productList";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import SingleCatalog from "./components/SingleCatalog";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      products: productList,
      cartItems: [],
      cartQty: 0,
    };
  }

  addToCart = (id, increment) => {
    const index = this.state.cartItems.findIndex((cartitem) => cartitem.id === id);
    if (index === -1) {
      let product = this.getProduct(parseInt(id, 10));
      let addedProduct = {
        id: product.id,
        src: product.src,
        nama: product.nama,
        harga: product.harga,
        qty: 1,
      };
      this.setState({ cartItems: [...this.state.cartItems, addedProduct] });
    } else {
      let updatedCart = this.state.cartItems;
      updatedCart[index].qty += 1;
      this.setState({ cartItems: updatedCart });
    }
    const inc = parseInt(increment, 10);
    this.setState({ cartQty: this.state.cartQty + inc });
    console.log(this.state.cartItems);
    return console.log("added", id);
  };

  getProduct = (id) => {
    return this.state.products.find((product) => product.id === id);
  };

  editProduct = (id, updatedProduct) => {
    let productList = this.state.products;
    const index = productList.findIndex((product) => product.id === id);

    productList[index]["nama"] = updatedProduct["name"];
    productList[index]["harga"] = updatedProduct["price"];
    productList[index]["color"] = updatedProduct["color"];

    this.setState({ products: productList });
  };

  componentWillMount() {
    localStorage.getItem("laptop") &&
      this.setState({
        cartItems: JSON.parse(localStorage.getItem("laptop")),
      });
  }

  componentWillUpdate(nextProps, nextState) {
    localStorage.setItem("laptop", JSON.stringify(nextState.cartItems));
  }

  render() {
    console.warn("render method");
    return (
      // --------routing msh blm pasti ya ges. nnti klo perlu, sesuaiin ajaa -er
      <Routes>
        <Route path="/" element={<Layout inCart={this.state.cartQty} />}>
          <Route index element={<Home products={this.state.products} addToCart={this.addToCart} />} />
          <Route path="/catalog" element={<Catalog products={this.state.products} addToCart={this.addToCart} />} />
          <Route path="/catalog/:productId" element={<SingleCatalog getProduct={this.getProduct} addToCart={this.addToCart} />} />
          <Route path="/cart" element={<Cart />} />
        </Route>

        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard products={this.state.products} editProduct={this.editProduct} />} />
      </Routes>
    );
  }
}

export default App;
