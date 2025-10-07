import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import logo from "../img/logo.png";
import flowers from "../img/flowers.png";

export default function LogIn() {
  const [isLogin, setIsLogin] = useState(true);
  const [showPopup, setShowPopup] = useState(false);
  const [loginError, setLoginError] = useState("");
  const form = useRef();
  const navigate = useNavigate();

  const sendEmail = (e) => {
    e.preventDefault();

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const password = form.current.user_password.value;

    localStorage.setItem(
      "ilustrousUser",
      JSON.stringify({ name, email, password })
    );

    emailjs
      .sendForm("service_0vu2yok", "template_r0evs1d", form.current, {
        publicKey: "Lh4oQYRbJcBstOAdL",
      })
      .then(
        () => {
          form.current.reset();
          setShowPopup(true);
        },
        (error) => {
          setLoginError("Please enter a valid email...");
        }
      );
  };

  const handleLogin = (e) => {
    e.preventDefault();
    const email = form.current.user_email.value;
    const password = form.current.user_password.value;

    const user = JSON.parse(localStorage.getItem("ilustrousUser"));
    if (user && user.email === email && user.password === password) {
      setLoginError("");
      navigate("/profile");
    } else {
      setLoginError("Invalid email or password.");
    }
  };

  return (
    <div className="min-h-screen font-sans text-dark-navy relative flex flex-col justify-center items-center bg-cream">
      <img
        src={flowers}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        alt="flowers background"
      />

      <header className="flex items-center justify-center py-8">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-bold text-dark-navy">ilustrous</span>
            <span className="text-xs text-dark-navy tracking-[0.88em]">
              SKINCARE
            </span>
          </div>
        </div>
      </header>

      <button
        className="absolute top-6 left-6 bg-powder-denim text-cream font-bold px-4 py-2 rounded-full hover:bg-dark-navy transition"
        onClick={() => navigate("/")}
      >
        GO BACK
      </button>

      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        <form
          ref={form}
          className="flex flex-col gap-4"
          onSubmit={isLogin ? handleLogin : sendEmail}
        >
          {!isLogin && (
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
              required
            />
          )}
          <input
            type="email"
            name="user_email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
            required
          />
          <input
            type="password"
            name="user_password"
            placeholder="Password"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
            required
          />
          <button
            type="submit"
            className="bg-powder-denim text-cream font-bold py-2 rounded-full hover:bg-dark-navy transition"
          >
            {isLogin ? "Log In" : "Sign Up"}
          </button>
        </form>
        {loginError && (
          <div className="text-red-600 text-center mt-2">{loginError}</div>
        )}
        <div className="text-center mt-2">
          {isLogin ? (
            <>
              <span>Don't have an account? </span>
              <button
                className="text-powder-denim font-bold underline"
                onClick={() => {
                  setIsLogin(false);
                  setLoginError("");
                }}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <button
                className="text-powder-denim font-bold underline"
                onClick={() => {
                  setIsLogin(true);
                  setLoginError("");
                }}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>

      {!isLogin && showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-powder-denim">
              Account Created Successfully!
            </h3>
            <button
              className="bg-powder-denim text-cream font-bold py-2 px-6 rounded-full hover:bg-dark-navy transition"
              onClick={() => setShowPopup(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
