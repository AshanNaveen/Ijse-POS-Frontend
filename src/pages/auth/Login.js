import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleUsername = (event) => {
    setUsername(event.target.value);
  };

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      username: username,
      password: password,
    };

    const response = await axios.post("http://localhost:8081/auth/login", data);

    localStorage.setItem("token", response.data);
    axios.defaults.headers.common["Authorization"] = `Bearer ${response.data}`;
    navigate("/");

  };

  return (
    <>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-center">
                <div class="mb-md-4 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">
                    Please enter your login and password!
                  </p>
                  <form onSubmit={handleLogin}>
                    <div class="form-floating form-white mb-4">
                      <input
                        type="text"
                        id="username"
                        class="form-control form-control-lg"
                        onChange={handleUsername}
                      />
                      <label class="form-label" for="username">
                        Username
                      </label>
                    </div>

                    <div class="form-floating form-white mb-4">
                      <input
                        type="password"
                        id="password"
                        class="form-control form-control-lg"
                        onChange={handlePassword}
                      />
                      <label class="form-label" for="password">
                        Password
                      </label>
                    </div>

                    <p class="small mb-5 pb-lg-2">
                      <a class="text-white-50" href="#!">
                        Forgot password?
                      </a>
                    </p>

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Login
                    </button>
                  </form>
                </div>

                <div>
                  <p class="mb-0">
                    Don't have an account?{" "}
                    <a href="#!" class="text-white-50 fw-bold">
                      Sign Up
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
