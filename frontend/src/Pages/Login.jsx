import React, { useState, useContext } from "react";
import "./CSS/Loginsignup.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { ShopContext } from "../Context/ShopContext";

const Login = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, all_products, cartItems, removeFromCart } =
    useContext(ShopContext);
  const [loginStatus, setLoginStatus] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((res) => {
        console.log(res);
        if (res.data === "Success") {
          navigate("/");
        } else {
          setLoginStatus("Incorrect Username or Password!");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="loginsignup">
      <div className="loginsignup-container">
        <h1>Login</h1>

        <form onSubmit={handleSubmit}>
          <div className="loginsignup-fields">
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
          <button type="submit">Login</button>
          <p className="loginsignup-login">
            No Account?{" "}
            <Link to="/signup">
              <button type="button" id="loginbtn">
                Signup Here
              </button>
            </Link>
          </p>
          <div className="loginsignup-agree">
            <input type="checkbox" />
            <p>By continuing, I agree to the terms of use & privacy policy</p>
          </div>
          <p className="error-message">{loginStatus}</p>
        </form>
      </div>
    </div>
  );
};

export default Login;
