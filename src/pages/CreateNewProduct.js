import { Category } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";

export default function CreateNewProduct() {
  const [categories, setCategories] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [qty, setQty] = useState("");
  const [category, setCategory] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    getAllCategories();
  }, []);

  const getAllCategories = async () => {
    try {
      const response = await axios.get("http://localhost:8082/categories");
      setCategories(response.data);
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: name,
      price: price,
      qty: qty,
      categoryId: category,
    };

    try {
      const response = await axios.post("http://localhost:8082/items", data);
      alert("Product Created Succesfully");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div>
        <NavBar/>
      <div className="">
        <div className="h1 text-center mt-5">Enter Product Details</div>
      </div>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Product Name
          </label>
          <input
            type="text"
            class="form-control"
            id="productName"
            aria-describedby="emailHelp"
            required
            onChange={(event) => {
              setName(event.target.value);
            }}
          />
        </div>
        <div class="mb-3">
          <label for="productPrice" class="form-label">
            Price
          </label>
          <input
            type="text"
            class="form-control"
            id="productPrice"
            required
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="productQty" class="form-label">
            Quantity
          </label>
          <input
            type="text"
            class="form-control"
            id="productQty"
            required
            onChange={(event) => {
              setQty(event.target.value);
            }}
          />
        </div>

        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Category
          </label>
          <select
            class="form-select"
            aria-label="Default select example"
            onChange={(event) => {
              setCategory(event.target.value);
            }}
          >
            <option selected>Select Category</option>

            {categories &&
              categories.map((category) => (
                <option value={category.id}>{category.name}</option>
              ))}
          </select>
        </div>

        <button type="submit" class="btn btn-primary mt-3">
          Create Product
        </button>
      </form>
    </div>
  );
}
