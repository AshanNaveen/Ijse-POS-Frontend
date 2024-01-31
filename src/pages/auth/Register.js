import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleUsername = (event) => {
      setUsername(event.target.value);
    };

    const handleEmail = (event) => {
      setEmail(event.target.value);
    };

    const handlePassword = (event) => {
      setPassword(event.target.value);
    };

    const handleRegister = async (event) => {
      event.preventDefault();
      const data = {
        username: username,
        password: password
      };
      try {
        const response = await axios.post(
          "http://localhost:8082/auth/register",
          data
        );
        if (response.status === 200) {
          navigate("/login");
        } else {
          alert(response);
        }
      } catch (error) {
        alert(error);
      }
    };
  return (
    <div>
      <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-12 col-md-8 col-lg-6 col-xl-5">
            <div class="card bg-dark text-white">
              <div class="card-body p-5 text-center">
                <div class="mb-md-4 mt-md-4 pb-5">
                  <h2 class="fw-bold mb-2 text-uppercase">Login</h2>
                  <p class="text-white-50 mb-5">
                    Create Account
                  </p>
                  <form onSubmit={handleRegister}>
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

                  

                    <button
                      class="btn btn-outline-light btn-lg px-5"
                      type="submit"
                    >
                      Register
                    </button>
                  </form>
                </div>

                <div>
                  <p class="mb-0">
                    <a href="/login" class="text-white-50 fw-bold">
                      Sign In
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
