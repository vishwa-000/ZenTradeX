import React, { useState } from "react";
import axios from "axios";

function Login() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {

    e.preventDefault();

    if (!email || !password) {

      alert("Please fill all fields");

      return;
    }

    const res = await axios.post(
      "http://localhost:3002/login",
      {
        email,
        password,
      }
    );

    localStorage.setItem(
      "token",
      res.data.token
    );

    alert("Login Successful");

    window.location.href = "http://localhost:3000";

  };

  return (

    <div className="container mt-5">

      <h1>Login</h1>

      <form onSubmit={handleLogin}>

        <input
          type="email"
          placeholder="Email"
          className="form-control mb-3"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="form-control mb-3"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Login
        </button>

      </form>

    </div>

  );
}

export default Login;