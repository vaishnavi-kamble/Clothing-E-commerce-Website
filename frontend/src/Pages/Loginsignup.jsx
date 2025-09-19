import React, { useState } from "react";
import "./CSS/Loginsignup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Loginsignup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/signup", { name, email, password })
      .then((res) => {
        console.log(res);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Sign Up</h1>

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
            <input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
            <input
              type="email"
              placeholder="Enter Email Address"
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
              name="password"
            />
          </div>
          <button type="submit">Continue</button>
          <p className="loginsignup-login">
            Already have an Account?{" "}
            <Link to="/login">
              <button type="button" id="loginbtn">
                Login Here
              </button>
            </Link>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Loginsignup;
