import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { Check, X } from "lucide-react";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Ideal untuk individu atau bisnis kecil yang baru memulai.",
      monthlyPrice: 29,
      annualPrice: 290,
      features: [
        "1 website",
        "5 pages",
        "Basic analytics",
        "24/7 support",
        "Custom domain",
      ],
      notIncluded: ["Advanced integrations", "E-commerce functionality"],
    },
    {
      name: "Pro",
      description:
        "Cocok untuk bisnis menengah yang membutuhkan lebih banyak fitur.",
      monthlyPrice: 79,
      annualPrice: 790,
      features: [
        "5 websites",
        "Unlimited pages",
        "Advanced analytics",
        "24/7 priority support",
        "Custom domain",
        "Advanced integrations",
      ],
      notIncluded: ["E-commerce functionality"],
      isPopular: true,
    },
    {
      name: "Enterprise",
      description:
        "Solusi lengkap untuk perusahaan besar dengan kebutuhan khusus.",
      monthlyPrice: 199,
      annualPrice: 1990,
      features: [
        "Unlimited websites",
        "Unlimited pages",
        "Advanced analytics",
        "24/7 VIP support",
        "Custom domain",
        "Advanced integrations",
        "E-commerce functionality",
      ],
      notIncluded: [],
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for AOS animations
  }, []);

  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 data-aos="fade-up" className="text-4xl font-bold mb-2">
            Choose Your Plan
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-lg text-gray-600"
          >
            Select the perfect plan for your needs. No hidden fees.
          </p>
          <div className="flex justify-center items-center gap-4 mb-8">
            <span
              className={`cursor-pointer text-lg ${
                !isAnnual ? "text-indigo-600 font-bold" : "text-gray-600"
              }`}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              className="py-2 px-4 bg-indigo-600 text-white rounded-full transition duration-300 hover:bg-indigo-700 mt-4"
            >
              {isAnnual ? "Switch to Monthly" : "Switch to Annual"}
            </button>
            <span
              className={`cursor-pointer text-lg ${
                isAnnual ? "text-indigo-600 font-bold" : "text-gray-600"
              }`}
            >
              Annual
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`bg-white rounded-lg shadow-lg p-6 transition-transform duration-300 hover:shadow-xl relative ${
                plan.isPopular ? "border-4 border-indigo-600" : ""
              }`}
            >
              {plan.isPopular && (
                <span className="absolute top-4 right-4 bg-yellow-500 text-white text-sm font-bold py-1 px-2 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold">
                  ${isAnnual ? plan.annualPrice : plan.monthlyPrice}
                </span>
                <span className="text-gray-500">
                  /{isAnnual ? "year" : "month"}
                </span>
              </div>
              <button className="w-full py-2 bg-indigo-600 text-white rounded-md transition duration-300 hover:bg-indigo-700">
                Get Started
              </button>
              <div className="border-t border-gray-200 mt-4 pt-4">
                <ul className="list-none">
                  {plan.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center mb-2 text-gray-700"
                    >
                      <Check className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                  {plan.notIncluded.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-center text-gray-400 mb-2"
                    >
                      <X className="text-red-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
