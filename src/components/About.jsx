import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const About = () => {
  const images = ["/img/office1.jpg", "/img/office2.jpg", "/img/office3.jpg"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  // Auto slide image every 5 seconds
  useEffect(() => {
    const interval = setInterval(nextImage, 5000);
    return () => clearInterval(interval);
  }, []);

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="about" className="relative bg-white py-10 sm:py-14 md:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
          {/* Text Content */}
          <div data-aos="fade-up">
            <h2 className="mb-4 text-2xl font-semibold leading-tight text-gray-900 sm:text-3xl md:text-4xl">
              Built for <span className="text-[#1353fe]">Creativity</span>,
              Designed for <span className="text-[#1353fe]">Simplicity</span>
            </h2>
            <p className="mb-6 text-gray-600 sm:text-lg">
              Our platform makes it easy to create the website you want without
              spending countless hours in development. Focus on your vision, and
              we’ll handle the rest.
            </p>
            <ul className="mb-6 space-y-4 text-gray-700">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5 text-green-500 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Fully customizable components to match your needs.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5 text-green-500 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Seamless integration with tools and frameworks you love.
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-5 w-5 text-green-500 sm:h-6 sm:w-6"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                Intuitive user interface for effortless navigation.
              </li>
            </ul>
            <a
              href="#"
              className="inline-block rounded-lg bg-[#1353fe] px-6 py-3 text-white hover:bg-[#0f4ae2] sm:px-8 sm:py-4"
            >
              Learn More
            </a>
          </div>

          {/* Image Slider */}
          <div
            className="relative flex items-center justify-center"
            data-aos="fade-left"
          >
            <img
              src={images[currentIndex]}
              alt="About Us"
              className="rounded-lg object-cover shadow-lg w-full sm:w-[90%] h-auto transition-transform duration-500"
            />
            <button
              onClick={prevImage}
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 sm:left-4"
            >
              &lt;
            </button>
            <button
              onClick={nextImage}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow hover:bg-gray-200 sm:right-4"
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
