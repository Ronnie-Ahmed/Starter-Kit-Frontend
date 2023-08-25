import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ConnectWallet } from "@thirdweb-dev/react";
import { GrTransaction } from "react-icons/gr";
import { FcMoneyTransfer } from "react-icons/fc";

import nfticon from "../assets/DaoIcon.png";
import { FcHome } from "react-icons/fc";
import "../index.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
      } else {
      }
    };
    try {
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    } catch (err) {
      console.log(err);
    }
  }, []);
  return (
    <header className="fixed top-0 left-0 z-50 text-white py-1 w-full">
      <nav className="flex items-center justify-between px-4 ">
        <Link href="/">
          <div className="flex items-center   hover:border-blue-500 rounded-md p-2 ">
            <img
              src={nfticon}
              alt="Logo"
              className="w-10 h-10 mr-2 rounded-full"
            />

            <button class="button-49 flex items-center justify-center">
              <label className="content">Book Library</label>
            </button>
          </div>
        </Link>

        <div className="hidden md:flex md:items-center md:space-x-4">
          <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>
            <button
              className="button-style"
              style={{
                backgroundImage: "linear-gradient(to right, #4ADE80, #37C7B4)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                transform: "translateY(0)",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
              }}
            >
              <FcHome className="icon-style" />
              <span className="text-base font-bold text-white">Home</span>
            </button>
          </Link>
          <Link
            to="/Dex_page"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              className="button-style"
              style={{
                backgroundImage: "linear-gradient(to right, #4ADE80, #37C7B4)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                transform: "translateY(0)",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
              }}
            >
              <GrTransaction className="icon-style" />
              <span className="text-base font-bold text-white">SWAP</span>
            </button>
          </Link>
          <Link
            to="/Uploadbook"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            <button
              className="button-style"
              style={{
                backgroundImage: "linear-gradient(to right, #4ADE80, #37C7B4)",
                boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)",
                transform: "translateY(0)",
                padding: "0.5rem 1rem",
                fontSize: "0.9rem",
              }}
            >
              <FcMoneyTransfer className="icon-style" />
              <span className="text-base font-bold text-white">
                Upload Book
              </span>
            </button>
          </Link>
          <ConnectWallet theme="dark" />
        </div>

        <div className="md:hidden">
          <button
            className="text-white hover:text-gray-300"
            onClick={toggleMenu}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-2 flex flex-col items-center">
          <Link to="/" spy={true} smooth={true} offset={-70} duration={500}>
            <button
              className="border mb-2 border-white border-opacity-50 px-2 py-1 rounded-md shadow-md hover:shadow-2xl shadow-cyan-600 hover:-translate-y-1 transition-all duration-300 m-1"
              style={{
                background: "rgba(255, 255, 255, 0.3)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                backdropFilter: "blur(10px)",
              }}
            >
              <FcHome className="inline-block mr-2 text-2xl" />
              <span className="text-l font-bold text-gray-200">Home</span>
            </button>
          </Link>

          <ConnectWallet theme="dark" />
        </div>
      )}
    </header>
  );
};
