import React from "react";
import logo from "../img/logo.png";
import menu from "../img/menu.png";
import flowers from "../img/flowers.png";
import elixir from "../img/elixir.png";
import silk from "../img/silk.png";
import heart from "../img/heart.png";
import oil from "../img/oil.png";
import scrub from "../img/scrub.png";
import vegan from "../img/vegan.png";
import sulfate from "../img/sulfate.png";
import natural from "../img/natural.png";
import derma from "../img/derma.png";
import cruelty from "../img/cruelty-free.png";

export default function ProductsPage() {
  return (
    <div>
      {/* NAVBAR */}
      <header className="flex items-center justify-between px-4 py-4 bg-cream">
        <div className="flex items-center space-x-2">
          {/* Logo placeholder */}
          <div className="w-10 h-10 rounded-full ">
            <img src={logo} alt="logo"></img>
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-3xl font-bold text-dark-navy">ilustrous</span>
            <span className="text-xs text-dark-navy tracking-[0.88em]">
              SKINCARE
            </span>
          </div>
        </div>
        <div className="w-10 h-10  md:hidden rounded-sm justify-center items-center flex">
          <img src={menu} alt="menu logo" />
        </div>
        <nav className="hidden md:flex space-x-6 text-dark-navy font-bold">
          <a href="/">HOME</a>
          <a href="/about">ABOUT US</a>
          <a href="#">PRODUCTS</a>
          <a href="/login">LOG IN</a>
        </nav>
      </header>

      {/* FIRST DIVIDER */}
      <section className="grid grid-cols-1 md:grid-cols-2 bg-dark-navy text-cream ">
        <div className="flex flex-col justify-center px-6 py-10">
          <h1 className="text-2xl md:text-4xl font-bold mb-4 tracking-[0.1em]">
            find your perfect match
          </h1>
          <p className="text-sm md:text-base leading-relaxed tracking-[0.3em]">
            Whether you're looking to hydrate, brighten, or rejuvenate, our
            curated range offers solutions for all skin types and concerns.
            Discover your personalized skincare routine ard experience the
            transformative power of Ilustrous. Your journey to radiant healthy
            skin starts here.
          </p>
        </div>

        <img src={scrub} className="w-full object-cover block"></img>
      </section>

      {/* SIDE BAR??*/}
      <section className="relative px-6 py-10 ">
        <img
          src={flowers}
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="flex flex-col space-y-4 md:col-span-1 justify-evenly items-center bg-cream text-dark-navy p-4">
            <h2 className="font-bold text-lg">Our products are…</h2>
            <img className="w-20 h-20" src={vegan}></img>
            <img className="w-20 h-20" src={sulfate}></img>
            <img className="w-20 h-20" src={natural}></img>
            <img className="w-20 h-20" src={derma}></img>
          </div>

          {/* FACE CARE*/}
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold text-center md:text-left mb-6 text-dark-navy">
              face care
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">
              <div className="bg-powder-denim p-4 shadow text-center relative flex flex-col items-center">
                <img
                  className="absolute top-3 right-3 w-10 h-10"
                  src={heart}
                ></img>
                <img
                  className="w-80 h-50 rounded mb-4 mx-auto drop-shadow-[0_0_20px_white]"
                  src={elixir}
                  alt="Lustre Elixir"
                />
                <h3 className="text-lg font-bold text-cream tracking-[0.2em]">
                  LUSTRE ELIXIR
                </h3>
                <p className="text-sm text-cream tracking-[0.1em] font-bold">
                  30 ml Serum
                </p>
                <p className="font-bold mt-1 text-cream tracking-[0.2em]">
                  PHP 500.00
                </p>
                <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
                  ADD TO CART
                </button>
              </div>

              <div className="bg-powder-denim p-4 shadow text-center relative flex flex-col items-center">
                <img
                  className="absolute top-3 right-3 w-10 h-10 "
                  src={heart}
                ></img>
                <img
                  className="w-80 h-50 rounded mb-4 mx-auto drop-shadow-[0_0_20px_white]"
                  src={oil}
                  alt="Lustre Elixir"
                />
                <h3 className="text-lg font-bold text-cream tracking-[0.2em]">
                  LUX RADIANCE OIL
                </h3>
                <p className="text-sm text-cream tracking-[0.1em] font-bold">
                  30 ml Serum
                </p>
                <p className="font-bold mt-1 text-cream tracking-[0.2em]">
                  PHP 650.00
                </p>
                <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
                  ADD TO CART
                </button>
              </div>

              <div className="bg-powder-denim p-4 shadow text-center relative flex flex-col items-center">
                <img
                  className="absolute top-3 right-3 w-10 h-10"
                  src={heart}
                ></img>
                <img
                  className="w-80 h-50 rounded mb-4 mx-auto drop-shadow-[0_0_20px_white]"
                  src={oil}
                  alt="Lustre Elixir"
                />
                <h3 className="text-lg font-bold text-cream tracking-[0.2em]">
                  LUX RADIANCE OIL
                </h3>
                <p className="text-sm text-cream tracking-[0.1em] font-bold">
                  100 ml Serum
                </p>
                <p className="font-bold mt-1 text-cream tracking-[0.2em]">
                  PHP 1,250.00
                </p>
                <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
                  ADD TO CART
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BODY CARE */}
      <section className="px-6 py-10">
        <h2 className="text-3xl font-bold text-center md:text-left mb-6 text-dark-navy">
          body care
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <div className="bg-powder-navy text-white p-4 flex flex-col items-center">
            <img
              className="w-120 h-70 rounded-lg mb-4 mx-auto drop-shadow-[0_0_20px_white]"
              src={silk}
              alt="Radiant Silk"
            />{" "}
            <h3 className="font-bold mb-2">RADIANT SILK</h3>
            <p className="text-sm text-cream tracking-[0.1em] font-bold">
              50 ml Moisturizer
            </p>
            <p className="font-bold mt-1 text-cream tracking-[0.2em]">
              PHP 300.00
            </p>
            <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
              ADD TO CART
            </button>
          </div>

          <div className="bg-powder-navy text-white p-4 flex flex-col items-center">
            <img
              className="w-120 h-70 rounded-lg  mb-4 mx-auto drop-shadow-[0_0_20px_white]"
              src={oil}
              alt="Radiant Silk"
            />{" "}
            <h3 className="font-bold mb-2">RADIANT SILK</h3>
            <p className="text-sm text-cream tracking-[0.1em] font-bold">
              30 ml Body Oil
            </p>
            <p className="font-bold mt-1 text-cream tracking-[0.2em]">
              PHP 650.00
            </p>
            <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
              ADD TO CART
            </button>
          </div>
          <div className="bg-powder-navy text-white p-4 flex flex-col items-center">
            <img
              className="w-120 h-70 rounded-lg mb-4 mx-auto drop-shadow-[0_0_20px_white]"
              src={silk}
              alt="Radiant Silk"
            />{" "}
            <h3 className="font-bold mb-2">RADIANT SILK</h3>
            <p className="text-sm text-cream tracking-[0.1em] font-bold">
              100 ml Moisturizer
            </p>
            <p className="font-bold mt-1 text-cream tracking-[0.2em]">
              PHP 750.00
            </p>
            <button className="mt-3 bg-white text-dark-navy font-bold px-4 py-2 rounded-full">
              ADD TO CART
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
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

        <div>
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
