import React from "react";
import NavBar from "../components/navigation/NavBar";
import AddCircleIcon from "@mui/icons-material/AddCircle";

export default function Home() {
  return (
    <div>
      <NavBar />
      <div className="bg">
        <div class="topic">Welcome</div>
        <div></div>
        <div className="container fluid">
          <div className="row">
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="150"
                    height="150"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fff"
                      d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"
                    ></path>
                    <path
                      fill="#6fccdd"
                      d="M64 25A39 39 0 1 0 64 103A39 39 0 1 0 64 25Z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#444b54"
                      stroke-miterlimit="10"
                      stroke-width="6"
                      d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="6"
                      d="M64 42L64 86M42 64L86 64"
                    ></path>
                  </svg>
                  <h5 class="card-title h3">Create Product</h5>
                  <a href="/new/product" class="btn btn-primary">
                    New Product
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    width="150"
                    height="150"
                    viewBox="0 0 128 128"
                  >
                    <path
                      fill="#fff"
                      d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"
                    ></path>
                    <path
                      fill="#6fccdd"
                      d="M64 25A39 39 0 1 0 64 103A39 39 0 1 0 64 25Z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#444b54"
                      stroke-miterlimit="10"
                      stroke-width="6"
                      d="M64 16A48 48 0 1 0 64 112A48 48 0 1 0 64 16Z"
                    ></path>
                    <path
                      fill="none"
                      stroke="#fff"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="6"
                      d="M64 42L64 86M42 64L86 64"
                    ></path>
                  </svg>
                  <h5 class="card-title h3">Create Category</h5>
                  <a href="/new/category" class="btn btn-primary">
                    New Category
                  </a>
                </div>
              </div>
            </div>
            <div className="col-3">
              <div class="card">
                <div class="card-body">
                  <img
                    width="150"
                    height="150"
                    src="https://img.icons8.com/3d-fluency/94/shopping-cart-loaded.png"
                    alt="shopping-cart-loaded"
                  />
                  <h5 class="card-title h3">Checkout</h5>
                  <a href="/checkout" class="btn btn-primary">
                    Go
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
