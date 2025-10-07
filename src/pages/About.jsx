import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import logo from "../img/logo.png";
import menu from "../img/menu.png";
import flowers from "../img/flowers.png";
import group1 from "../img/group1.png";
import cream from "../img/cream.png";

export default function AboutPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_0vu2yok", "template_g2vo1bj", form.current, {
        publicKey: "Lh4oQYRbJcBstOAdL",
      })
      .then(
        () => {
          form.current.reset();
          console.log("Email sent Successfully!");
        },
        (error) => {
          console.log("Please enter a valid email...", error.text);
        }
      );
  };

  return (
    <div className="font-sans text-dark-navy">
      <img
        src={flowers}
        className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      />

      <header className="flex items-center justify-between px-4 py-4 bg-cream">
        <div className="flex items-center space-x-2">
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

      <section className=" text-center py-10 px-4">
        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
          nurture your <br className="hidden md:block" /> natural brilliance
        </h1>
        <p className="max-w-3xl mx-auto mt-4 text-sm md:text-base text-dark-navy font-semibold">
          Ilustrous is a premium skincare brand dedicated to revealing your
          skin's natural radiance. Using carefully selected ingredients,
          Ilustrous combines luxury and science to deliver glowing, healthy, and
          youthful skin. Our products are crafted to nourish, hydrate, and
          illuminate, giving you effortless beauty and timeless brilliance. At
          Ilustrous, we believe in the power of luminous skin—because when you
          glow, you shine.
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-0">
        <div className="w-full">
          <img
            className="w-full h-64 md:h-full object-cover object-center"
            src={group1}
            alt="group1"
          />
        </div>
        <div className="flex flex-col justify-center px-6 py-10 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 tracking-wide text-center">
            our mission
          </h2>
          <p className="text-base md:text-lg text-dark-navy font-semibold leading-relaxed text-center">
            Ilustrous is dedicated to transforming skincare through innovative
            ethically sourced products that celebrate natural beauty' and
            radiance We strive to empower individuals to feel confident in their
            own skin by providing high-quality', sustainable solutions that
            nourish and enhance their natural glow. To be a leading skincare
            brand that redefines beauty standards by promoting inclusivity,
            sustainability, and transparency. We envision a world where everyone
            embraces their unique radiance, and skincare is synonymous with
            self-care and environmental responsibility.
          </p>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2">
        <div className="flex flex-col justify-center order-2 md:order-1 px-6 py-10 text-center md:text-left">
          <h2 className="text-3xl md:text-3xl font-bold mb-4 tracking-wide text-center">
            beauty refined by nature
          </h2>
          <p className="text-base md:text-lg text-dark-navy font-semibold leading-relaxed text-center">
            Our formulations are meticulously created with clean, high-quality
            ingredients, free from harsh chemicals, parabens, and sulfates,
            ensuring they are gentle yet effective for all skin types. Our
            process begins with extensive research and development, focusing on
            effective and gentle formulations that cater to diverse skin needs.
            We take pride in being cruelty-free and vegan, committed to beauty
            that's kind to your skin and the planet. Each product is infused
            with potent botanical extracts and advanced active ingredients that
            work synergistically to illuminate, hydrate, and rejuvenate your
            skin, giving you a natural, radiant glow. At Ilustrous, we don't
            just promise beauty — we deliver brilliance.
          </p>
        </div>

        <div className=" bg-gray-100 order-1 md:order-2 flex items-center justify-center">
          <img
            src={cream}
            alt="cream"
            className="w-full h-full  object-cover"
          />
        </div>
      </section>

      <form
        ref={form}
        onSubmit={(e) => {
          e.preventDefault();
          emailjs
            .sendForm("service_0vu2yok", "template_g2vo1bj", form.current, {
              publicKey: "Lh4oQYRbJcBstOAdL",
            })
            .then(
              () => {
                form.current.reset();
                console.log("Email sent Successfully!");
              },
              (error) => {
                console.log("Please enter a valid email...", error.text);
              }
            );
        }}
        className="max-w-lg mx-auto my-12 bg-white bg-opacity-80 rounded-lg shadow-lg p-6 flex flex-col gap-4"
      >
        <h2 className="text-2xl font-bold text-dark-navy mb-2 text-center">
          ✨ Get exclusive updates and offers! ✨
        </h2>
        <div className="flex flex-col gap-1">
          <label
            className="text-dark-navy font-semibold text-left"
            htmlFor="user_name"
          >
            Name
          </label>
          <input
            type="text"
            name="user_name"
            id="user_name"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
            required
          />
        </div>
        <div className="flex flex-col gap-1">
          <label
            className="text-dark-navy font-semibold text-left"
            htmlFor="user_email"
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            id="user_email"
            className="border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-powder-denim"
            required
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-powder-denim text-cream font-bold py-2 rounded-full hover:bg-dark-navy transition"
        >
          Send
        </button>
      </form>

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
