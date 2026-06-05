import React, { useState } from "react";
import axios from "axios";

function Signup() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

 const handleSignup = async (e) => {

  e.preventDefault();

  if (!name || !email || !password) {

    alert("Please fill all fields");

    return;
  }

  console.log(name, email, password);

  await axios.post(
    "http://localhost:3002/signup",
    {
      name,
      email,
      password,
    }
  );

  alert("Signup Successful");

  window.location.href = "http://localhost:3001/login";

};

  return (

    <div className="container mt-5">

      <h1>Signup</h1>

      <form onSubmit={handleSignup}>

        <input
          type="text"
          placeholder="Name"
          className="form-control mb-3"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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
          Signup
        </button>

      </form>

    </div>
  );
}

export default Signup;