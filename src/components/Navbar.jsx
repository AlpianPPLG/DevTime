import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const refreshPage = () => {
    window.location.reload();
  };

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleSignUpClick = () => {
    navigate("/signin");
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolling(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`bg-white text-black px-4 py-3 sticky top-0 w-full z-50 shadow-lg transition duration-500 ease-in-out ${
        isScrolling ? "bg-opacity-50" : "bg-opacity-100"
      }`}
    >
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
            Get Started
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
          <button
            onClick={handleLoginClick}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Login
          </button>
          <button
            onClick={handleSignUpClick}
            className="bg-purple-500 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded"
          >
            Sign Up
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div
          className="md:hidden bg-white text-black mt-3 transition-opacity duration-500 ease-in-out"
          style={{
            transition: "height 0.5s ease-in-out",
            height: isOpen ? "300px" : "0",
          }}
        >
          <div className="flex flex-col">
            <a
              href="#about"
              className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              About
            </a>
            <a
              href="#blog"
              className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Blog
            </a>
            <a
              href="#get-started"
              className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Get Started
            </a>
            <a
              href="#testimony"
              className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="block px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Contact Us
            </a>
            <button
              onClick={handleLoginClick}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition duration-300 ease-in-out"
            >
              Sign Up
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
