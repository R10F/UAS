import "./App.css";
import "./assets/css/admin.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Catalog from "./page/Catalog";
import SingleCatalog from "./components/SingleCatalog";
import Cart from "./page/Cart";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products : [
        {
            id: 1,
            src: `${require("./assets/img/card1.png")}`, 
            nama: "ROG Zephyrus Duo (2022)", 
            harga: "Rp 59.999.000",
            rating: 4,
            color: "Hitam, Putih"
        },
        {
            id: 2,
            src: `${require("./assets/img/card2.png")}`, 
            nama: "ROG Strix Scar 17 (2022)", 
            harga: "Rp 46.408.000",
            rating: 5,
            color: "Hitam, Putih, Biru"
        },
        {
          id: 3,
          src: `${require("./assets/img/card3.png")}`, 
          nama: "ROG Zephyrus M16 (2022)", 
          harga: "Rp 44.389.900",
          rating: null,
          color: "Hitam, Putih"
        },
        {
          id: 4,
          src: `${require("./assets/img/card2.png")}`, 
          nama: "ROG Strix Scar 15 (2022)", 
          harga: "Rp 34.298.991",
          rating: 3,
          color: "Hitam, Merah"
        },
        {
          id: 5,
          src: `${require("./assets/img/card4.png")}`, 
          nama: "ASUS TUF Gaming F15 (2022)", 
          harga: "Rp 23.499.000",
          rating: 4,
          color: "Hitam, Silver"
        },
        {
          id: 6,
          src: `${require("./assets/img/card5.png")}`, 
          nama: "2021 ASUS TUF Dash F15", 
          harga: "Rp 18.999.000 ",
          rating: 5,
          color: "Hitam, Putih"
        }
      ],
      cartItems : [],
      cartQty : 0
    }
    
  }
  addToCart = (id, increment) => {
    const index = this.state.cartItems.findIndex((cartitem) => cartitem.id === id)
    if (index === -1){
      let product = this.getProduct(parseInt(id, 10));
      let addedProduct = {
        id: product.id,
        src: product.src,
        nama: product.nama,
        harga: product.harga,
        qty: 1
      }
      this.setState({ cartItems: [...this.state.cartItems, addedProduct] });
    }
    else{
      let updatedCart = this.state.cartItems;
      updatedCart[index].qty += 1;
      this.setState({ cartItems: updatedCart });
    }
    const inc = parseInt(increment, 10);
    this.setState({cartQty : this.state.cartQty + inc})
    console.log(this.state.cartItems);
    return(
        console.log("added", id)
    );
  }
  getProduct = (id) => {
    return this.state.products.find(
        (product) => product.id === id
    );
  }
  render() {
    return (
      // --------routing msh blm pasti ya ges. nnti klo perlu, sesuaiin ajaa -er
      <Routes>
        <Route path="/" element={<Layout inCart={this.state.cartQty}/>}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog products={this.state.products} addToCart={this.addToCart}/>} />
          <Route path="/catalog/:productId" element={<SingleCatalog getProduct={this.getProduct} addToCart={this.addToCart}/>} />
        </Route>
        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default App;
