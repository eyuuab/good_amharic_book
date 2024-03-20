"use client";
import React, { useState } from "react";

const Navbar: React.FC = () => {
  const [isClick, setIsClick] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [isGenresVisible, setIsGenresVisible] = useState(false);

  const toggleHover = () => {
    setIsHovered(!isHovered);
  };

  const toggleNavbar = () => {
    setIsClick(!isClick);
    setIsGenresVisible(false); // Close genres when toggling navbar
  };

  const toggleGenres = () => {
    setIsGenresVisible(!isGenresVisible);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-10 p-0" style={{background:'#21242663',backdropFilter:'blur(20px)'}}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a href="/" className="text-white">
                  Good Amharic books
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <a
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  መግቢያ <br /> Home
                </a>
                <div
                  className="group relative"
                  onMouseEnter={toggleHover}
                  onMouseLeave={toggleHover}
                >
                  <a href="/book">
                    <button className="text-white hover:bg-white hover:text-black rounded-lg p-2 focus:outline-none">
                      መጽሃፍት <br /> Books
                    </button>
                  </a>
                  {isHovered && (
                    <div className="absolute z-10 left-0 mt-2 bg-white shadow-lg rounded-md w-72">
                      <div className="grid grid-cols-3 gap-4 p-4">
                        <div className="col-span-1">
                          <div className="font-bold">Fiction</div>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 1
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 2
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 3
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 4
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 5
                          </a>
                        </div>
                        <div className="col-span-1">
                          <div className="font-bold">Romance</div>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 1
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 2
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 3
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 4
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 5
                          </a>
                        </div>
                        <div className="col-span-1">
                          <div className="font-bold">Action</div>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 1
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 2
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 3
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 4
                          </a>
                          <a
                            href="/"
                            className="text-gray-800 block mt-2 hover:underline"
                          >
                            Book 5
                          </a>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <a
                  href="/about-us"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  ስለ እኛ
                  <br /> About Us
                </a>
                <a
                  href="../../contact-us"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  እኛን ያግኙ <br /> Contact Us
                </a>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center 
                                p-2 rounded-md text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={toggleNavbar}
              >
                {isClick ? (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                መግቢያ <br /> Home
              </a>
              <button
                onClick={toggleGenres}
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                መጽሃፍት <br /> Books
              </button>
              {isGenresVisible && (
                <div className="px-4">
                  <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Fiction
                  </a>
                  <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Romance
                  </a>
                  <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Action
                  </a>
                  <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Real Life Story
                  </a>
                  <a
                    href="/"
                    className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
                  >
                    Blog
                  </a>
                </div>
              )}
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                ስለ እኛ <br /> About Us
              </a>
              <a
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                እኛን ያግኙ
                <br /> Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
