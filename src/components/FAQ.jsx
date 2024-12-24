import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

const faqs = [
  {
    question: "What is your refund policy?",
    answer:
      "Our refund policy allows for full refunds within 30 days of purchase. Please contact us for more details.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can contact our support team via email at support@yourcompany.com or call us at +1 (555) 123-4567.",
  },
  {
    question: "Do you offer international shipping?",
    answer:
      "Yes, we offer international shipping to select countries. Please check our shipping policy for more information.",
  },
  {
    question: "How do I reset my password?",
    answer:
      "You can reset your password by clicking on the 'Forgot Password' link on the login page and following the instructions.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit cards, PayPal, and bank transfers.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for AOS animations
  }, []);

  return (
    <section id="faq" className="bg-gray-50 py-24">
      <Helmet>
        <title>FAQ - DevTime</title>
        <meta
          name="description"
          content="Frequently Asked Questions about our services."
        />
      </Helmet>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-up">
          Frequently Asked Questions
        </h2>
        <div className="max-w-2xl mx-auto">
          {faqs.map((faq, index) => (
            <div key={index} className="mb-4" data-aos="fade-up">
              <div
                className="flex justify-between items-center cursor-pointer bg-white shadow-md rounded p-4"
                onClick={() => toggleFAQ(index)}
                data-aos="fade-right" // Add AOS animation for each question
                data-aos-delay={index * 100} // Stagger the animation
              >
                <h3 className="font-semibold text-lg">{faq.question}</h3>
                <span className="text-xl">
                  {openIndex === index ? "-" : "+"}
                </span>
              </div>
              {openIndex === index && (
                <div
                  className="mt-2 p-4 bg-gray-100 rounded"
                  data-aos="fade-left"
                >
                  <p className="text-gray-700">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
