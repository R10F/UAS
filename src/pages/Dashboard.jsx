import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Chart } from "react-chartjs-2";
import { FcSalesPerformance } from "react-icons/fc";
import { BsCart4 } from "react-icons/bs";
import Footer from "../components/admin/Footer";

class Dashboard extends React.Component {
  constructor() {
    super();

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
          data: Array.from({ length: 12 }, () => parseInt(Math.random() * 50000)),
        },
      ],
    };

    this.tableData = [];
  }

  logout = () => {};

  render() {
    return (
      <div class="sb-nav-fixed">
        <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark justify-content-between">
          <div className="container">
            <a class="navbar-brand ps-3" href="index.html">
              Start Bootstrap
            </a>
            <button className="btn btn-outline-danger">Logout</button>
          </div>
        </nav>

        <div id="layoutSidenav" className="container pb-5">
          <div id="layoutSidenav_content" class="ps-lg-0">
            <main>
              <div class="container-fluid px-4">
                <h1 class="text-center mt-4 mb-5">Dashboard</h1>

                <div class="card mb-4">
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
                    <table id="datatablesSimple">
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Position</th>
                          <th>Office</th>
                          <th>Age</th>
                          <th>Start date</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>Tiger Nixon</td>
                          <td>System Architect</td>
                          <td>Edinburgh</td>
                          <td>61</td>
                          <td>2011/04/25</td>
                          <td>
                            <button className="btn btn-warning">Edit</button>
                          </td>
                        </tr>
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
}

export default Dashboard;
