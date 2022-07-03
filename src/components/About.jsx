import React, { Fragment } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Swal from "sweetalert2";

class About extends React.Component {
  kumpul = () => {
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission
    Array.from(forms).forEach((form) => {
      if (form.checkValidity() === true) {
        Swal.fire({
          icon: "success",
          text: "Message Sent!",
        });
      } else {
        Swal.fire({
          icon: "warning",
          text: "Complete Your Form",
        });
      }
    });
  };

  render() {
    Aos.init();

    return (
      <Fragment>
        <header>
          <div className="container">
            <div className="row">
              <h1 className="text-center my-3 text-primary judul" data-aos="fade-down">
                ABOUT US
              </h1>

              <div className="col teks" data-aos="zoom-in-down" data-aos-duration="1000">
                <p>
                  <strong className="text-danger">Laptopu </strong> merupakan salah satu toko e-commerce terbesar terutama dalam penjualan laptop gaming dimana penjualan setiap tahun meningkat semenjak tahun 2020. berdiri sejak tahun 2000
                  awalnya laptopu menjual segala peralatan komputer seperti monitor,mouse,keyboard namun semenjak adanya era digital seperti ini dan laptopu melihat bahwa anak-anak zaman sekarang hobi bermain game maka laptopu beralih dari
                  yang menjual peralatan komputer menjadi menjual laptop gaming. peralihan penjualan ini pun tentu tidak mudah seperti membalikkan telapak tangan ada rintangan-rintangan yang dihadapi oleh laptopu dalam mencoba menjual
                  laptop gaming ini namun karena semangat kami yang tidak menyerah akhirnya laptopu berhasil menduduki posisi sebagai toko e-commerce terbesar di indonesia
                  <br />
                  <br />
                  ingin mengenal lebih dekat dengan kami ? silahkan menghubungi kami dengan mengisi form dibawah
                </p>
              </div>
            </div>
            <div className="row">
              <h1 className="text-center mt-3 mb-2 text-warning judul" data-aos="fade-down">
                CONTACT US
              </h1>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-6">
                <form className="needs-validation" data-aos="zoom-out-down" data-aos-duration="1500">
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Input Your Name" required />
                    <label htmlFor="floatingInput">Name </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                    <label htmlFor="floatingInput">Email </label>
                  </div>
                  <div className="form-floating mb-3">
                    <input type="text" className="form-control" id="floatingInput" placeholder="Subject" required />
                    <label htmlFor="floatingInput">Subject </label>
                  </div>
                  <div className="form-floating">
                    <textarea className="form-control" placeholder="Leave a Message here" id="floatingTextarea" required></textarea>
                    <label htmlFor="floatingTextarea">Message</label>
                  </div>

                  <div className="d-grid gap-2 mb-lg-4 mt-lg-4">
                    <button className="btn btn-primary" type="button" onClick={this.kumpul}>
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>
      </Fragment>
    );
  }
}

export default About;
