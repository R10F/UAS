import React, { Fragment } from "react";
import About from "../components/About";
import SalesProduct from "../components/SalesProduct";

class Home extends React.Component {
  constructor() {
    super();
    // this.items = [
    //   [require("../assets/img/card1.png"), "ROG Zephyrus Duo (2022) ", "Rp 59.999.000", "Rp 58.999.000"],
    //   [require("../assets/img/card1.png"), "ROG Strix Scar 17 (2022)", "Rp 46.408.000", "Rp 45.408.082"],
    //   [require("../assets/img/card1.png"), "ROG Zephyrus M16 (2022) ", "Rp44.389.900", "Rp43.389.900"],
    //   [require("../assets/img/card1.png"), "ROG Strix Scar 15 (2022) ", "Rp34.298.991", "Rp33.298.991"],
    //   [require("../assets/img/card1.png"), "ASUS TUF Gaming F15 (2022) ", "Rp23.499.000", "Rp22.499.000"],
    //   [require("../assets/img/card1.png"), "2021 ASUS TUF Dash F15 ", "Rp18.999.000", "Rp17.999.000"],
    // ];
  }
  render() {
    let countDownDate = new Date("Aug 1, 2022 23:59:00").getTime();

    let x = setInterval(function () {
      let now = new Date().getTime();

      let distance = countDownDate - now;

      let days = Math.floor(distance / (1000 * 60 * 60 * 24));
      let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      let seconds = Math.floor((distance % (1000 * 60)) / 1000);

      const demo = document.getElementById("demo");
      if (demo) {
        demo.innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";
      }

      if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "Maaf Promo Sudah Berakhir <br/> Silahkan Tunggu Info Selanjutnya...";
        document.querySelector("div.item").style.display = "none";
      }
    }, 1000);

    return (
      <Fragment>
        <header>
          <div id="carouselExampleIndicators" className="carousel slide carousel-fade my-auto" data-bs-ride="true">
            <div className="carousel-indicators">
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
              <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={require("../assets/img/banner/banner1.png")} className="d-block w-100 img-fluid" alt="banner1" />
              </div>
              <div className="carousel-item">
                <img src={require("../assets/img/banner/banner2.png")} className="d-block w-100 img-fluid" alt="banner2" />
              </div>
              <div className="carousel-item">
                <img src={require("../assets/img/banner/banner3.png")} className="d-block w-100 img-fluid" alt="banner3" />
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
          <div className="container px-4 px-lg-5 mt-5 ">
            <h2 className="text-center mb-2 sale text-danger">FLASH SALE</h2>
            <p id="demo" className="text-center text-info"></p>
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center item">
              {
                this.props.products.map((product) => {
                  if (product.isSales) {
                    return (
                      <SalesProduct product={product} addToCart={this.props.addToCart} />
                    );
                  }
                })
              }
            </div>
          </div>
        </section>

        <About />
      </Fragment>
    );
  }
}

export default Home;
