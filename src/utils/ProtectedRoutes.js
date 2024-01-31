import axios from "axios";
import { Outlet, useNavigate } from "react-router-dom";

const ProtectedRouts = () => {
  const token = localStorage.getItem("token");

  const navigate = useNavigate();
  if (!token) {
    return navigate("/login");
  }

  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

  return <Outlet />;
};

export default ProtectedRouts;
