import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  return (
    <nav className="bg-white text-black px-4 py-3 sticky top-0 w-full z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <div
            className="text-2xl font-bold text-purple-500 cursor-pointer mr-6"
            onClick={refreshPage}
          >
            DevTime
          </div>
        </div>

        {/* Menu Items */}
        <div className="hidden md:flex space-x-8 items-center flex-grow justify-center">
          <a href="#about" className="hover:text-purple-500">
            About
          </a>
          <a href="#blog" className="hover:text-purple-500">
            Blog
          </a>
          <a href="#get-started" className="hover:text-purple-500">
            Get started
          </a>
          <a href="#testimony" className="hover:text-purple-500">
            Testimonials
          </a>
          <a href="#contact" className="hover:text-purple-500">
            Contact Us
          </a>
        </div>

        {/* Login and Sign Up */}
        <div className="hidden md:flex space-x-4 items-center">
          <a href="#login" className="hover:text-purple-500">
            Login
          </a>
          <a
            href="#signup"
            className="bg-purple-500 text-white px-4 py-2 rounded-full hover:bg-purple-600"
          >
            Sign Up
          </a>
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-purple-500 focus:outline-none"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white text-black mt-3">
          <a href="#about" className="block px-4 py-2 hover:bg-gray-200">
            About
          </a>
          <a href="#blog" className="block px-4 py-2 hover:bg-gray-200">
            Blog
          </a>
          <a href="#get-started" className="block px-4 py-2 hover:bg-gray-200">
            Get Started
          </a>
          <a href="#testimony" className="block px-4 py-2 hover:bg-gray-200">
            Testimonials
          </a>
          <a href="#contact" className="block px-4 py-2 hover:bg-gray-200">
            Contact Us
          </a>
          <a href="#login" className="block px-4 py-2 hover:bg-gray-200">
            Login
          </a>
          <a
            href="#signup"
            className="block bg-purple-500 text-white px-4 py-2 rounded-full mx-4 mt-2 hover:bg-purple-600"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
