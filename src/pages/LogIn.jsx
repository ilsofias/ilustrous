import React, { useState } from "react";
import logo from "../img/logo.png";
import flowers from "../img/flowers.png";

export default function LogIn() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="min-h-screen font-sans text-dark-navy relative flex flex-col justify-center items-center bg-cream">
      {/* Background flowers */}
      <img
        src={flowers}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        alt="flowers background"
      />
      {/* Header */}
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
      {/* Auth Card */}
      <div className="w-full max-w-md bg-white bg-opacity-90 rounded-lg shadow-lg p-8 flex flex-col gap-4">
        <h2 className="text-2xl font-bold text-center mb-2">
          {isLogin ? "Log In" : "Sign Up"}
        </h2>
        <form className="flex flex-col gap-4">
          {!isLogin && (
            <input
              type="text"
              placeholder="Name"
              className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
              required
            />
          )}
          <input
            type="email"
            placeholder="Email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
            required
          />
          <input
            type="password"
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
        <div className="text-center mt-2">
          {isLogin ? (
            <>
              <span>Don't have an account? </span>
              <button
                className="text-powder-denim font-bold underline"
                onClick={() => setIsLogin(false)}
              >
                Sign Up
              </button>
            </>
          ) : (
            <>
              <span>Already have an account? </span>
              <button
                className="text-powder-denim font-bold underline"
                onClick={() => setIsLogin(true)}
              >
                Log In
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
