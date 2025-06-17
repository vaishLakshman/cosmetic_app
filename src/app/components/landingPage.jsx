"use client";
import Image from "next/image";
import title from "../../../public/assets/project-logo-wordmark-orangeHi-Res.png";
import CustomButton from "./Button/customButton";
import { useState } from "react";
import "../globals.css";

const LandingPage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleSearch = () => {
    console.log("Search button clicked!");
  };

  const handleCart = () => {
    console.log("Cart clicked!");
  };

  return (
    <div className="container h-full w-screen px-8 mb-12">
      <div className="bg-[url('/assets/girl.webp')] bg-center bg-cover relative min-h-[30rem] lg:min-h-[45rem]  border-2 border-primary rounded-2xl py-5 px-3">
        <div className="sub-heading bg-primary rounded-3xl py-1 text-center mb-5">
          <h1 className="font-semibold text-white text-sm lg:text-xl font-oswald">
            FREE UK SHIPPING ON ORDERS ABOVE $40
          </h1>
        </div>
        <div className="block lg:hidden mobile-nav-container text-primary flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="33"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="cursor-pointer duration-200 ease-in-out"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <>
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </>
            ) : (
              <>
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </>
            )}
          </svg>

          {menuOpen && (
            <div className="menu-container w-full bg-white p-3 text-center text-xl font-bold border-2 border-primary rounded-xl ease-in-out duration-100 shadow-xl font-oswald z-10">
              <ul>
                <li className="border-b-1 py-1 border-primary/20">
                  <a href="/">SHOP</a>
                </li>
                <li className="border-b-1 py-1 border-primary/20">
                  <a href="/">ABOUT</a>
                </li>
                <li className="border-b-1 py-1 border-primary/20">
                  <a href="/">LEARN</a>
                </li>
                <li className="border-b-1 py-1 border-primary/20">
                  <a href="/">SEARCH</a>
                </li>
                <li>
                  <a href="/">CART</a>
                </li>
              </ul>
            </div>
          )}
        </div>
        <div className="hidden lg:block desktop-nav-container lg:flex justify-between mx-1 font-oswald">
          <div className="nav-options flex gap-5 rounded-3xl border-2 border-primary py-2 px-5 font-bold">
            <a href="/">SHOP</a>
            <a href="/">ABOUT</a>
            <a href="/">LEARN</a>
          </div>
          <div className="title-cotainer">
            <Image src={title} alt="ptoject title" width={200} />
          </div>
          <div className="user-actions-container flex gap-5">
            <CustomButton text={"SEARCH"} onClick={handleSearch} />
            <CustomButton text={"CART"} onClick={handleCart} isCart />
          </div>
        </div>
        <div className="write-up-container w-2/3 lg:w-2/7 absolute bottom-5 lg:bottom-10 lg:ml-5 z-5">
          <h1 className="font-bold text-primary font-oswald lg:text-6xl">
            BIG LIPS,
          </h1>
          <h1 className="font-bold text-primary mb-3 font-oswald lg:text-6xl">
            BIGGER ENERGY
          </h1>
          <h3 className="font-light mb-3 text-sm lg:text-base font-lexend ">
            Our famous lip liner lines, fills and plumps so you can cheat your
            way to instant lip lift.
          </h3>
          <CustomButton text={"SHOP PLUMP & FILL"} textColor={"primary"} />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
