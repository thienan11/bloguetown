import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";

export default function RegisterPage() {
  // <form action="">
  //   <input type="text" placeholder="username"/>
  //   <input type="password" placeholder="password"/>
  //   <button>Register</button>
  //   <p>Already have an account? <Link to="/login">Log in</Link> </p>
  // </form>

  // State to manage password input type
  const [passwordType, setPasswordType] = useState("password");
  const passwordRef = useRef(null);

  // Function to toggle password visibility
  const togglePasswordVisibility = () => {
    setPasswordType((prevType) => (prevType === "password" ? "text" : "password"));
  };

  // Attach event listeners
  useEffect(() => {
    const togglePassword = document.querySelector("#togglePassword");
    const form = document.querySelector("form");

    togglePassword.addEventListener("click", togglePasswordVisibility);

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      // Add your login logic here
      // You can access the username and password values using
      // usernameRef.current.value and passwordRef.current.value
    });

    // Clean up event listeners on unmount
    return () => {
      togglePassword.removeEventListener("click", togglePasswordVisibility);
      form.removeEventListener("submit", (e) => {
        e.preventDefault();
      });
    };
  }, []);

  return (
    <div className="container">
      <h1>Sign up</h1>
      <form method="post">
        <p>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" id="username" autocomplete="off"/>
        </p>
        <p>
          <label htmlFor="password">Password:</label>
          <input type={passwordType} name="password" id="password" ref={passwordRef} autocomplete="off"/>
          <i className={`bi ${passwordType === "password" ? "bi-eye-slash" : "bi-eye"}`} id="togglePassword"></i>
        </p>
        <button type="submit" id="submit" className="submit">
          Sign up
        </button>
        <p className="tag">
          Already have an account? <Link to="/login">Log in</Link>{" "}
        </p>
      </form>
    </div>
  );
}