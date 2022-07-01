import React, { Fragment } from "react";

class Home extends React.Component {
  constructor() {
    super();
    this.items = [
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
      [require("./img/banner1.png"), "Asus Tuf Gaming", "Rp 20.000.000,-"],
    ];
  }
  render() {
    let allItems = this.items.map((item) => {
      return (
        <Fragment>
          <div className="col mb-5">
            <div className="card h-100">
              <img className="card-img-top" src={item[0]} alt="gambar1" />

              <div className="card-body p-4">
                <div className="text-center">
                  <h5 className="fw-bolder">{item[1]}</h5>
                  {item[2]}
                </div>
              </div>
              <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                <div className="text-center">
                  <a className="btn btn-outline-dark mt-auto" href="#!">
                    View options
                  </a>
                </div>
              </div>
            </div>
          </div>
        </Fragment>
      );
    });
    return (
      <Fragment>
        <header>
          <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="2000">
                <img src={require("./img/banner1.png")} className="d-block w-100" alt="banner1" />
              </div>
              <div className="carousel-item" data-bs-interval="2000">
                <img src={require("./img/banner2.png")} className="d-block w-100" alt="banner2" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" style={{ color: "blue" }}></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </header>

        <section className="py-5">
          <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">{allItems}</div>
          </div>
        </section>
      </Fragment>
    );
  }
}

export default Home;
