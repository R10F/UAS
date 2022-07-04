import React from "react";
import Footer from "../components/admin/Footer";

class Login extends React.Component {
  constructor() {
    super();
    this.state = { showAlert: false };
  }

  login = (e) => {
    e.preventDefault();

    const username = e.target.querySelector("#inputUsername").value;
    const password = e.target.querySelector("#inputPassword").value;

    if (username === "admin" && password === "admin") {
      localStorage.setItem("laptopuLogin", true);
      window.location.replace("/admin/dashboard");
    } else {
      this.setState({ showAlert: true });
    }
  };

  render() {
    return (
      <div class="bg-primary">
        <div id="layoutAuthentication">
          <div id="layoutAuthentication_content">
            <main>
              <div class="container">
                <div class="row justify-content-center">
                  <div class="col-lg-5">
                    <div class="card shadow-lg border-0 rounded-lg mt-5">
                      <div class="card-header">
                        <h3 class="text-center font-weight-light my-4">Login</h3>
                      </div>
                      <div class="card-body">
                        <div class={"alert alert-danger " + (this.state.showAlert ? "" : "d-none")} role="alert">
                          Incorrect username or password, you're not admin!
                        </div>

                        <form onSubmit={this.login}>
                          <div class="form-floating mb-3">
                            <input class="form-control" id="inputUsername" type="text" placeholder="Username" />
                            <label for="inputUsername">Username</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                            <label for="inputPassword">Password</label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <button type="submit" class="btn btn-primary">
                              Login
                            </button>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">Only admin login is available!</div>
                    </div>
                  </div>
                </div>
              </div>
            </main>
          </div>

          <div id="layoutAuthentication_footer">
            <Footer />
          </div>
        </div>
      </div>
    );
  }

  componentWillMount() {
    if (localStorage.getItem("laptopuLogin") === "true") {
      window.location.replace("/admin/dashboard");
    }
  }
}

export default Login;
