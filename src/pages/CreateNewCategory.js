import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/navigation/NavBar";

const CreateNewCategory = () => {
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      name: name,
    };
    try {
      const response = await axios.post(
        "http://localhost:8082/categories",
        data
      );
      alert("Category Created Succesfully");
    } catch (error) {
      console.log(error);
      if (error.response.status === 401) {
        navigate("/login");
      }
    }
  };

  return (
    <div>
      <NavBar />
      <div className="">
        <div className="h1 text-center mt-5">Enter Category Details</div>
      </div>
      <form className="container mt-5" onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="productName" class="form-label">
            Category Name
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

        <button type="submit" class="btn btn-primary mt-3">
          Create Cateogry
        </button>
      </form>
    </div>
  );
};

export default CreateNewCategory;
