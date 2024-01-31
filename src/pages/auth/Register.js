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
        password: password,
        email: email,
      };
      try {
        const response = await axios.post(
          "http://localhost:8081/auth/register",
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
    <div>Register</div>
  )
}
