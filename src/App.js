import "./App.css";
import React from "react";
import Layout from "./layout/Layout";
import Home from "./page/Home";
import Catalog from "./page/Catalog";
import SingleCatalog from "./components/SingleCatalog";
import Cart from "./page/Cart";
import About from "./page/About";
import { Routes, Route } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      // --------routing msh blm pasti ya ges. nnti klo perlu, sesuaiin ajaa -er
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":productId" element={<SingleCatalog />} />
          </Route>
          <Route path="/about-us" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
      </Routes>
    );
  }
}

export default App;
