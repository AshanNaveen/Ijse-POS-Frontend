import axios from "axios";
import { useEffect, useState } from "react";
import NavBar from "../components/navigation/NavBar";

const Product = () => {
  const [categories, setCategory] = useState([]);
  const [products, setProduct] = useState([]);

  useEffect(() => {
    getAllCategories();
    getAllProducts();
  }, []);

  const getAllCategories = async () => {
    const response = await axios("http://localhost:8082/categories");
    setCategory(response.data);
  };

  const getproductsByCategory = async (event) => {
    const id = event.target.value;
    const response = await axios(
      `http://localhost:8082/categories/${id}/items`
    );
    setProduct(response.data);
  };

  const getAllProducts = async (event) => {
    const response = await axios(`http://localhost:8082/items`);
    setProduct(response.data);
  };

  return (
    <div className="bg-color" >
    <NavBar/>
    <div className="container ">
      <div className="row mb-4">
        <h1>Products</h1>
      </div>
      <div className="d-flex">
        <div className="col-3 side-panel">
          <ul class="list-group list-group">
            <li
              class="list-group-item d-flex justify-content-between align-items-start btn btn-dark mb-2"
              onClick={getAllProducts}
            >
              <div class="ms-2 me-auto">
                <div class="fw-bold p-1">All Products</div>
              </div>
            </li>

            {categories &&
              categories.map((category) => (
                <li
                  class="list-group-item d-flex justify-content-between align-items-start btn btn-dark mb-2"
                  value={category.id}
                  onClick={getproductsByCategory}
                >
                  <div class="ms-2 me-auto">
                    <div class="fw-bold p-1">{category.name}</div>
                  </div>
                </li>
              ))}
          </ul>
        </div>

        <div className="container product-panel">
          <div className="row d-flex justify-content-start">
            {products &&
              products.map((product) => (
                <div class="card col-lg-3 col-md-6 col-12 m-2">
                  <div class="card-body">
                    <h5 class="card-title">{product.name}</h5>
                    <p class="card-text">
                      Price :{product.price}
                      <br />
                      Qauntity :{product.qty}
                    </p>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#staticBackdrop"
                    >
                      Launch demo modal
                    </button>

                    <div
                      class="modal fade"
                      id="staticBackdrop"
                      data-bs-backdrop="static"
                      data-bs-keyboard="false"
                      tabindex="-1"
                      aria-labelledby="staticBackdropLabel"
                      aria-hidden="true"
                    >
                      <div class="modal-dialog">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h1
                              class="modal-title fs-5"
                              id="staticBackdropLabel"
                            >
                              Modal title
                            </h1>
                            <button
                              type="button"
                              class="btn-close"
                              data-bs-dismiss="modal"
                              aria-label="Close"
                            ></button>
                          </div>
                          <div class="modal-body">...</div>
                          <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="button" class="btn btn-primary">
                              Understood
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Product;
