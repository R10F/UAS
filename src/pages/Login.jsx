import React from "react";
import Footer from "../components/admin/Footer";

class Login extends React.Component {
  login = () => {
    
  }

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
                      <div class="card-header"><h3 class="text-center font-weight-light my-4">Login</h3></div>
                      <div class="card-body">
                        <form>
                          <div class="form-floating mb-3">
                            <input class="form-control" id="inputUsername" type="text" placeholder="Username" />
                            <label for="inputUsername">Username</label>
                          </div>
                          <div class="form-floating mb-3">
                            <input class="form-control" id="inputPassword" type="password" placeholder="Password" />
                            <label for="inputPassword">Password</label>
                          </div>
                          <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                            <a class="btn btn-primary" href="index.html">Login</a>
                          </div>
                        </form>
                      </div>
                      <div class="card-footer text-center py-3">
                        Only admin login is available!
                      </div>
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
}

export default Login;