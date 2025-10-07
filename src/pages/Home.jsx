import React from "react";
import logo from "../img/logo.png";
import menu from "../img/menu.png";
import face1 from "../img/face1.png";
import flowers from "../img/flowers.png";
import elixir from "../img/elixir.png";
import silk from "../img/silk.png";
import heart from "../img/heart.png";
import face2 from "../img/face2.png";
import body from "../img/body.png";
import value from "../img/value.png";

function Home() {
  return (
    <>
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
          <a href="/products">PRODUCTS</a>
          <a href="/login">LOG IN</a>
        </nav>
      </header>

      {/* FIRST DIVIDER */}
      <section className="w-full bg-powder-navy text-cream text-center md:text-left md:flex md:items-center">
        <div className="relative flex justify-center w-full min-h-[180px] sm:min-h-[220px] md:w-1/2 md:min-h-[300px] xl:min-h-[400px] pt-0 lg:pt-16 xl:pt-24">
          <img
            className="absolute -bottom-5 w-32 sm:w-48 md:w-80 lg:w-96 xl:w-[500px] h-auto block max-w-full drop-shadow-[0_0_15px_white]"
            src={face1}
            alt=""
          />
        </div>

        <div className="md:w-1/2 p-6 text-center">
          <h1 className="mt-10 text-3xl md:text-5xl font-bold leading-snug tracking-[0.2em]">
            feel the glow, <br /> own the shine...
          </h1>
          <p className="mt-2 text-sm tracking-[0.88em]">
            unlock you skin's luster
          </p>
        </div>
      </section>
      {/* FIRST DIVIDER */}

      {/* MOST LOVED */}
      <div>
        <img
          src={flowers}
          className="fixed top-0 left-0 w-full h-full object-cover -z-10"
        />
        <section className="py-10 px-15">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold tracking-wide text-dark-navy">
              OUR MOST LOVED
            </h2>
            <a
              href="#"
              className="text-dark-navy text-bold underline font-extrabold tracking-widest"
            >
              SEE MORE
            </a>
          </div>

          {/* PRODUCTS */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
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
                className="absolute top-3 right-3 w-10 h-10"
                src={heart}
              ></img>
              <div className="flex justify-center items-center -mb-20">
                <img
                  className="w-120 h-70 rounded mb-4 mx-auto drop-shadow-[0_0_20px_white]"
                  src={silk}
                  alt="Radiant Silk"
                />
              </div>
              <h3 className="text-lg font-bold text-cream tracking-[0.2em]">
                RADIANT SILK
              </h3>
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
          </div>
        </section>
      </div>
      {/* MOST LOVED */}

      {/* CATEGORY */}
      <section className="py-10 px-4 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="relative w-full h-60 bg-gray-300 rounded flex items-center justify-center overflow-hidden">
          <img
            src={face2}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            alt=""
          />
          <span className="relative text-xl font-bold text-white z-10">
            face
          </span>
        </div>
        <div className="relative w-full h-60 bg-gray-300 rounded flex items-center justify-center overflow-hidden">
          <img
            src={body}
            className="absolute inset-0 w-full h-full object-cover opacity-100"
            alt=""
          />
          <span className="relative text-xl font-bold text-white z-10">
            body
          </span>
        </div>
        <div className="relative w-full h-60 bg-gray-300 rounded flex items-center justify-center overflow-hidden">
          <img
            src={value}
            className="absolute inset-x-0 bottom-0 w-full h-full object-cover object-bottom opacity-100"
            alt=""
          />
          <span className="relative text-xl font-bold text-white z-10 text-center">
            value <br /> bundles
          </span>
        </div>
      </section>
      {/* CATEGORY */}

      {/* DISCOUNT BANNER */}
      <section className="text-black text-center py-6 px-4">
        <h2 className="text-3xl font-bold tracking-[0.82em]">
          15% OFF FOR FIRST TIME BUYERS!
        </h2>
        <p className="text-large mt-2 tracking-[0.52em]">
          FREE SHIPPING WITH A MINIMUM PURCHASE OF PHP 2,000.00
        </p>
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
    </>
  );
}

export default Home;
