import React from "react";

export default function NavBar() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <a class="navbar-brand h1" href="/">
          Ijse Pos System
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/products">
                Products
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/categories">
                Categories
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="/checkout">
                Checkout
              </a>
            </li>
          </ul>
          <button class="btn btn-outline-success">Logout</button>
        </div>
      </div>
    </nav>
  );
}
