import React from "react";
import { useParams } from "react-router-dom";
import Star from "../components/Star";

export default function SingleCatalog(props) {
    let params = useParams();
    // let product = getProduct(parseInt(params.productId, 10));
    let product = props.getProduct(parseInt(params.productId, 10));
    return (
        <section className="container-fluid p-5">
            <div className="row  ">
                <div className="col-lg-5">
                    <div className="card">
                        <img className="card-img img-fluid" src={product.src} alt={product.nama} />
                    </div>
                </div>
                <div className="col-lg-7">
                    <h1>{product.nama}</h1>
                    <h2>{'Rp ' + product.harga}</h2>
                    <p className="my-2 lh-lg">

                        <Star rating={product.rating} />
                        <br />
                        <b>Merk: </b> ASUS <br />
                        <b>Deskripsi: </b> <br />
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet tenetur aliquid assumenda obcaecati doloribus dolorem praesentium beatae libero at! Natus dolor vitae veritatis nobis asperiores assumenda. Voluptatem, quibusdam. Laudantium, cupiditate.
                        <br />

                        <b>Pilihan Warna: </b> {product.color} <br />

                        <b>Spesifikasi:</b> <br />
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita ipsam magnam ea quas ipsum assumenda, nemo sit, eaque non placeat sunt aliquid quaerat debitis architecto. Deserunt ipsum nam officiis unde.
                    </p>
                    <div className="d-flex justify-content-end">
                        <button className="btn btn-outline-dark text-right" onClick={() => { props.addToCart(product.id, 1) }}>Add to Cart</button>
                    </div>

                </div>
            </div>
        </section>
    );
}
