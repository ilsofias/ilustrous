import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../img/logo.png";
import elixir from "../img/elixir.png";
import oil from "../img/oil.png";
import silk from "../img/silk.png";
import flowers from "../img/flowers.png";

const products = [
  {
    id: 1,
    name: "Lustre Elixir",
    price: "PHP 500.00",
    img: elixir,
    size: "30 ML",
  },
  {
    id: 2,
    name: "Lustre Elixir",
    price: "PHP 1,000.00",
    img: elixir,
    size: "100 ML",
  },
  {
    id: 3,
    name: "Radiant Silk",
    price: "PHP 300.00",
    img: silk,
    size: "50 ML",
  },
  {
    id: 4,
    name: "Radiant Silk",
    price: "PHP 600.00",
    img: silk,
    size: "100 ML",
  },
  {
    id: 5,
    name: "Lux Radiance Oil",
    price: "PHP 650.00",
    img: oil,
    size: "30 ML",
  },
  {
    id: 6,
    name: "Lux Radiance Oil",
    price: "PHP 1,250.00",
    img: oil,
    size: "100 ML",
  },
];

export default function Profile() {
  const [activeTab, setActiveTab] = useState("products");
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const handleCheckout = () => {
    setCart([]);
    alert("Thank you for your purchase!");
  };

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div>
      <div className=" min-h-screen font-sans text-dark-navy bg-cream relative flex flex-col items-center">
        <img
          src={flowers}
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
          alt="flowers background"
        />
        <header className="flex items-center justify-between py-8 w-full max-w-3xl mx-auto">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="logo" className="w-12 h-12 rounded-full" />
            <div className="flex flex-col leading-tight">
              <span className="text-3xl font-bold text-dark-navy">
                ilustrous
              </span>
              <span className="text-xs text-dark-navy tracking-[0.88em]">
                SKINCARE
              </span>
            </div>
          </div>
          <button
            className="bg-red-400 text-cream font-bold px-4 py-2 rounded-full hover:bg-red-600 transition"
            onClick={handleLogout}
          >
            Log Out
          </button>
        </header>
        <div className="w-full max-w-3xl bg-white bg-opacity-90 rounded-lg shadow-lg p-8 mt-4">
          <nav className="flex justify-center gap-8 mb-8">
            <button
              className={`font-bold px-4 py-2 rounded-full ${
                activeTab === "products"
                  ? "bg-powder-denim text-cream"
                  : "bg-cream text-dark-navy"
              }`}
              onClick={() => setActiveTab("products")}
            >
              View Products
            </button>
            <button
              className={`font-bold px-4 py-2 rounded-full ${
                activeTab === "cart"
                  ? "bg-powder-denim text-cream"
                  : "bg-cream text-dark-navy"
              }`}
              onClick={() => setActiveTab("cart")}
            >
              View Cart
            </button>
            <button
              className={`font-bold px-4 py-2 rounded-full ${
                activeTab === "checkout"
                  ? "bg-powder-denim text-cream"
                  : "bg-cream text-dark-navy"
              }`}
              onClick={() => setActiveTab("checkout")}
            >
              Checkout
            </button>
          </nav>

          {activeTab === "products" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-powder-denim">
                Our Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="bg-cream rounded-lg shadow p-4 flex flex-col items-center"
                  >
                    <img
                      src={product.img}
                      alt={product.name}
                      className="w-24 h-24 object-cover rounded-full mb-2"
                    />
                    <h3 className="font-bold text-lg">{product.name}</h3>
                    <p className="text-sm text-dark-navy mb-1 font-bold">
                      {product.size}
                    </p>
                    <p className="text-powder-denim font-semibold mb-2">
                      {product.price}
                    </p>
                    <button
                      className="bg-powder-denim text-cream px-4 py-2 rounded-full font-bold hover:bg-dark-navy transition"
                      onClick={() => addToCart(product)}
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === "cart" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-powder-denim">
                Your Cart
              </h2>
              {cart.length === 0 ? (
                <p className="text-dark-navy">Your cart is empty.</p>
              ) : (
                <ul className="space-y-4">
                  {cart.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-center justify-between bg-cream rounded-lg p-4 shadow"
                    >
                      <div className="flex items-center gap-4">
                        <img
                          src={item.img}
                          alt={item.name}
                          className="w-12 h-12 object-cover rounded-full"
                        />
                        <span className="font-bold">{item.name}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-powder-denim font-semibold">
                          {item.price}
                        </span>
                        <button
                          className="bg-red-400 text-cream px-3 py-1 rounded-full font-bold hover:bg-red-600 transition"
                          onClick={() => removeFromCart(item.id)}
                        >
                          Remove
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {activeTab === "checkout" && (
            <div>
              <h2 className="text-xl font-bold mb-4 text-powder-denim">
                Checkout
              </h2>
              {cart.length === 0 ? (
                <p className="text-dark-navy">
                  Add products to your cart first.
                </p>
              ) : (
                <div className="bg-cream rounded-lg p-6 shadow flex flex-col items-center">
                  <p className="mb-4 font-semibold">
                    Total:{" "}
                    <span className="text-powder-denim">
                      {cart
                        .reduce(
                          (sum, item) =>
                            sum +
                            Number(
                              item.price
                                .replace("PHP", "")
                                .replace(",", "")
                                .replace(".00", "")
                            ),
                          0
                        )
                        .toLocaleString("en-PH", {
                          style: "currency",
                          currency: "PHP",
                          minimumFractionDigits: 2,
                        })}
                    </span>
                  </p>
                  <button
                    className="bg-powder-denim text-cream px-6 py-2 rounded-full font-bold hover:bg-dark-navy transition"
                    onClick={handleCheckout}
                  >
                    Confirm Purchase
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
      <footer className="bg-powder-denim text-cream tracking-wide px-4 py-8 text-center md:text-left md:grid md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-bold mb-2">Connect with us:</h3>
          <ul className="space-y-1 text-sm">
            <li>Instagram: @ilustrous_ph</li>
            <li>Facebook: @ilustrous_ph</li>
            <li>Twitter: @ilustrous</li>
          </ul>
        </div>

        <div className="flex justify-center items-center">
          <img className="w-30 h-30" src={logo}></img>
        </div>

        <div className="text-right">
          <h3 className="font-bold mb-2">Contact us:</h3>
          <ul className="space-y-1 text-sm">
            <li>Sofia Ilustre</li>
            <li>+63 927 114 4097</li>
            <li>sofiasimoune.ilustre@gmail.com</li>
          </ul>
        </div>
      </footer>
    </div>
  );
}
