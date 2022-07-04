import React from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";
import Footer from "../components/admin/Footer";
import ProductItem from "../components/admin/ProductItem";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);

    this.chartData = {
      labels: ["Jul 1", "Jul 2", "Jul 3", "Jul 4", "Jul 5", "Jul 6", "Jul 7", "Jul 8", "Jul 9", "Jul 10", "Jul 11", "Jul 12"],
      datasets: [
        {
          label: "Revenue",
          lineTension: 0.3,
          backgroundColor: "rgba(2,117,216,0.2)",
          borderColor: "rgba(2,117,216,1)",
          pointRadius: 5,
          pointBackgroundColor: "rgba(2,117,216,1)",
          pointBorderColor: "rgba(255,255,255,0.8)",
          pointHoverRadius: 5,
          pointHoverBackgroundColor: "rgba(2,117,216,1)",
          pointHitRadius: 50,
          pointBorderWidth: 2,
          data: Array.from({ length: 12 }, () => parseInt(Math.random() * 50000))
        },
      ],
    };
  }

  logout = () => {
    Swal.fire({
      title: "Are you sure want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, logout!",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.setItem("laptopuLogin", false);
        window.location.replace('/');
      }
    });
  }

  render() {
    return (
      <div class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark justify-content-between">
          <div className="container">
            <Link to="/" className="navbar-brand ps-3">Apple Tech</Link>
            <button className="btn btn-outline-danger" onClick={this.logout}>Logout</button>
          </div>
        </nav>

        <div id="layoutSidenav" className="container pb-5">
          <div id="layoutSidenav_content" class="ps-lg-0">
            <main>
              <div class="container-fluid px-4">
                <h1 class="text-center mt-4 mb-5">Dashboard</h1>

                <div class="card mb-5">
                  <div class="card-header text-center">
                    <FcSalesPerformance className="me-1" />
                    Sales Chart
                  </div>
                  <div class="card-body">
                    <Chart type="line" data={this.chartData} width={600} height={200} />
                  </div>
                  <div class="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                </div>

                <div class="card mb-4">
                  <div class="card-header text-center">
                    <BsCart4 className="me-1" />
                    Product List
                  </div>
                  <div class="card-body">
                    <table className="table text-center align-middle">
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Name</th>
                          <th>Price</th>
                          <th>Rating</th>
                          <th>Color</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          this.props.products.map(product => {
                            return (
                              <ProductItem product={product} editProduct={this.props.editProduct} />
                            );
                          })
                        }
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        <div className="mt-5">
          <Footer />
        </div>
      </div>
    );
  }

  componentWillMount() {
    const isLogin = localStorage.getItem("laptopuLogin");
    if (isLogin === null || isLogin === 'false') {
      window.location.replace('/admin');
    }
  }
}

export default Dashboard;
