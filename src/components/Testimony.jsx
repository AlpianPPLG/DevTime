import React, { useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechCorp",
    quote:
      "This platform has revolutionized how we build and manage our website. The no-code solution is intuitive, and the results are professional-grade. It's saved us countless hours and resources.",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Startup Founder",
    company: "InnovateTech",
    quote:
      "As a non-technical founder, this tool has been a game-changer. I was able to create a stunning website for my startup in just a few days. The customer support is also top-notch!",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    role: "E-commerce Manager",
    company: "StyleHub",
    quote:
      "The e-commerce features are robust and easy to implement. We've seen a significant increase in conversions since switching to this platform. It's been a fantastic investment for our business.",
    rating: 4,
  },
  {
    id: 4,
    name: "David Smith",
    role: "Product Manager",
    company: "GlobalTech",
    quote:
      "This tool has simplified our workflow significantly. I can't imagine going back to the old way of managing projects.",
    rating: 5,
  },
  {
    id: 5,
    name: "Laura Brown",
    role: "UX Designer",
    company: "DesignCo",
    quote:
      "The design flexibility offered by this platform is amazing. I can create exactly what I envision without limitations.",
    rating: 5,
  },
  {
    id: 6,
    name: "James Lee",
    role: "Data Scientist",
    company: "DataCorp",
    quote:
      "The insights we've gained using this platform have been invaluable. It helps us make data-driven decisions efficiently.",
    rating: 5,
  },
];

const TestimonialCard = ({ testimonial }) => (
  <div
    className="bg-white shadow-lg rounded-lg overflow-hidden"
    data-aos="fade-up"
  >
    <div className="p-6">
      <div className="flex items-center mb-4">
        <div className="h-12 w-12 rounded-full bg-gray-300 flex items-center justify-center mr-4">
          <span className="text-xl font-bold text-gray-700">
            {testimonial.name.charAt(0)}
          </span>
        </div>
        <div>
          <h3 className="font-semibold text-lg">{testimonial.name}</h3>
          <p className="text-sm text-gray-600">
            {testimonial.role} at {testimonial.company}
          </p>
        </div>
      </div>
      <p className="text-gray-700 mb-4">"{testimonial.quote}"</p>
      <div className="flex items-center">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < testimonial.rating
                ? "text-yellow-400 fill-current"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  </div>
);

// Menambahkan propTypes untuk validasi props
TestimonialCard.propTypes = {
  testimonial: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    quote: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

const TestimonialSection = () => {
  const [currentPage, setCurrentPage] = React.useState(0);
  const testimonialsPerPage = 3;

  // Menghitung total halaman
  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  // Mendapatkan testimonial untuk halaman saat ini
  const currentTestimonials = testimonials.slice(
    currentPage * testimonialsPerPage,
    (currentPage + 1) * testimonialsPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      setCurrentPage((prevPage) => prevPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage((prevPage) => prevPage - 1);
    }
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for AOS animations
  }, []);

  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div data-aos="fade-up" className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what some of our satisfied
            customers have to say about their experience.
          </p>
        </div>

        <div className="relative">
          {currentTestimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}

          <div className="flex justify-center mt-8 space-x-4">
            <button
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition"
              onClick={prevPage}
              disabled={currentPage === 0}
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              className="border border-gray-300 rounded-full p-2 hover:bg-gray-200 transition"
              onClick={nextPage}
              disabled={currentPage === totalPages - 1}
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full mx-1 ${
                index === currentPage ? "bg-[#4F46E5]" : "bg-gray-300"
              }`}
              onClick={() => setCurrentPage(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
