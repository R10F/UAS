import React from "react";
import Product from "../components/Product";

class Catalog extends React.Component{
    constructor(props){
        super(props);
        this.products = this.props.products;
        // this.products = getAllProducts();
    }
    
    render(){
        let allproduct = this.products.map((product) => {
            return (
                <Product productDetail={product} key={product.id} >
                    <button className="btn btn-outline-dark">Add to Cart</button>
                </Product>
            )
        })
        return(
            <div className="container py-5">
                <div className="row">
                    <h1>Catalog</h1>
                    <div className="row">
                        {allproduct}
                    </div>
                </div>
            </div>
        )
    }
}
export default Catalog;
