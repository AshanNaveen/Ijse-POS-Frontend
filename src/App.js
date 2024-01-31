import logo from './logo.svg';
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Product from "./pages/Product";
import SingleProduct from "./pages/SingleProduct";
import Category from "./pages/Category";
import Checkout from "./pages/Checkout";
import Login from "./pages/auth/Login";
import ProtectedRouts from "./utils/ProtectedRoutes";
import CreateNewProduct from './pages/CreateNewProduct';
import CreateNewCategory from './pages/CreateNewCategory';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRouts />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<SingleProduct />} />
          <Route path="/categories" element={<Category />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/new/product" element={<CreateNewProduct />} />
          <Route path="/new/category" element={<CreateNewCategory />} />
        </Route>

        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
