import { useState, useEffect } from "react";

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

  return (
    <section id="about" className="relative bg-white py-16 md:py-24 lg:py-32">
      {/* Container */}
      <div className="mx-auto max-w-7xl px-5 md:px-10">
        <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-3xl font-semibold leading-tight text-gray-900 md:text-4xl lg:text-5xl">
              Built for <span className="text-[#1353fe]">Creativity</span>,
              Designed for <span className="text-[#1353fe]">Simplicity</span>
            </h2>
            <p className="mb-6 text-lg text-gray-600 lg:mb-8">
              Our platform makes it easy to create the website you want without
              spending countless hours in development. Focus on your vision, and
              we’ll handle the rest.
            </p>
            <ul className="mb-8 space-y-4">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Fully customizable components to match your needs.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Seamless integration with tools and frameworks you love.
                </p>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="mr-3 h-6 w-6 text-green-500"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-2.293-2.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-gray-700">
                  Intuitive user interface for effortless navigation.
                </p>
              </li>
            </ul>
            <a
              href="#"
              className="inline-block rounded-xl bg-[#1353fe] px-8 py-4 text-center font-semibold text-white hover:bg-[#0f4ae2]"
            >
              Learn More
            </a>
          </div>

          {/* Image Slider Content */}
          <div className="relative w-full max-w-[800px] mx-auto">
            <img
              src={images[currentIndex]}
              alt="About Us"
              className="rounded-xl object-cover shadow-lg w-full h-auto transition-opacity duration-500"
            />
            <div className="absolute top-0 left-0 right-0 bottom-0 bg-gradient-to-b from-transparent to-transparent"></div>
            {/* Prev Button */}
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
            >
              &lt; {/* Arrow Left */}
            </button>
            {/* Next Button */}
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full shadow-lg p-2 hover:bg-gray-200"
            >
              &gt; {/* Arrow Right */}
            </button>
            <div className="absolute -bottom-4 -left-4 -z-10 h-full w-full rounded-xl bg-[#1353fe] opacity-10"></div>
          </div>
        </div>
      </div>

      {/* BG Patterns */}
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905b9f809b5c8180ce30c5_pattern-1.svg"
        alt="Pattern"
        className="absolute bottom-0 left-0 right-auto top-auto -z-10 hidden md:block"
      />
      <img
        src="https://assets.website-files.com/63904f663019b0d8edf8d57c/63905ba1538296b3f50a905e_pattern-2.svg"
        alt="Pattern"
        className="absolute bottom-auto left-auto right-0 top-0 -z-10 hidden sm:block"
      />
    </section>
  );
};

export default About;
