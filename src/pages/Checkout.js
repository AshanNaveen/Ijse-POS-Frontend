import axios from "axios";
import NavBar from "../components/navigation/NavBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
    getAllCategories();
  }, []);

  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8082/items");
      setProducts(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const getAllCategories = async () => {
    const response = await axios("http://localhost:8082/categories");
    setCategory(response.data);
  };

  const getproductsByCategory = async (event) => {
    const id = event.target.value;
    const response = await axios(
      `http://localhost:8082/categories/${id}/items`
    );
    setProducts(response.data);
  };
  return (
    <div className="bg-color">
      <NavBar />
      <div className="bottomContainer">
        <div className="detailPane">
          <div className="row">
            <ul class="nav justify-content-center">
              <li class="nav-item m-1">
                <button
                  class="btn btn-outline-info"
                  aria-current="page"
                  onClick={getProducts}
                >
                  All Products
                </button>
              </li>

              {categories &&
                categories.map((category) => (
                  <li class="nav-item m-1">
                    <button
                      class="btn btn-outline-info"
                      aria-current="page"
                      value={category.id}
                      onClick={getproductsByCategory}
                    >
                      {category.name}
                    </button>
                  </li>
                ))}
            </ul>
          </div>
          <div className="text-center">
            <div className="container ">
              <div className="row">
                {products &&
                  products.map((product) => (
                    <div class=" detail-pane-card card col-lg-2 col-md-7 col-12 m-2">
                      <div class="card-body">
                        <h5 class="card-title">{product.name}</h5>
                        <p class="card-text">
                          Price : {product.price}
                          <br />
                          Qauntity : {product.qty}
                        </p>
                        <a href="#" class="btn btn-primary">
                          Add to cart
                        </a>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="orderPane">
          <div className="text-center">
            <h3 className="m-3">Cart</h3>
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
            <div class="card">
              <div class="card-body">This is some text within a card body.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
