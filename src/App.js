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
  render() {
    return (
      // --------routing msh blm pasti ya ges. nnti klo perlu, sesuaiin ajaa -er
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/catalog" element={<Catalog />}>
            <Route path=":productId" element={<SingleCatalog />} />
          </Route>
        </Route>
        <Route path="/cart" element={<Cart />} />

        <Route path="/admin" element={<Login />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
      </Routes>
    );
  }
}

export default App;
