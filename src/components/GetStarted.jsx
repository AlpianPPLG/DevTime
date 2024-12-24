import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import {
  PlayCircle,
  ArrowRight,
  Code,
  Paintbrush,
  Zap,
  Users,
  Monitor, // Icon for websites built
  Clock, // Icon for uptime
  Headphones, // Icon for support
} from "lucide-react";

export default function GetStartedComplex() {
  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "No-Code Solution",
      description: "Build your website without writing a single line of code",
    },
    {
      icon: <Paintbrush className="w-6 h-6" />,
      title: "Custom Design",
      description:
        "Customize every aspect of your website with our intuitive tools",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Lightning Fast",
      description: "Optimized performance for the best user experience",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Built for Teams",
      description: "Collaborate with your team in real-time",
    },
  ];

  const stats = [
    {
      number: "10K+",
      label: "Active Users",
      icon: <Users className="w-8 h-8 mx-auto text-[#4F46E5]" />,
    },
    {
      number: "50M+",
      label: "Websites Built",
      icon: <Monitor className="w-8 h-8 mx-auto text-[#4F46E5]" />,
    },
    {
      number: "99.9%",
      label: "Uptime",
      icon: <Clock className="w-8 h-8 mx-auto text-[#4F46E5]" />,
    },
    {
      number: "24/7",
      label: "Support",
      icon: <Headphones className="w-8 h-8 mx-auto text-[#4F46E5]" />,
    },
  ];

  // Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1000 }); // Set duration for AOS animations
  }, []);

  return (
    <section
      id="get-started"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4F46E510,transparent)]" />
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            viewBox="0 0 1440 320"
            className="w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#4F46E5"
              fillOpacity="0.1"
              d="M0,96L48,112C96,128,192,160,288,186.7C384,213,480,235,576,213.3C672,192,768,128,864,128C960,128,1056,192,1152,213.3C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6">
        {/* Hero Section */}
        <div data-aos="fade-up" className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
            The Website You Want{" "}
            <span className="relative">
              <span className="relative z-10 inline-block bg-[#4F46E5] text-white px-4 py-1 rounded">
                Without
              </span>
            </span>{" "}
            The{" "}
            <span className="relative">
              <span className="relative z-10 inline-block bg-[#4F46E5] text-white px-4 py-1 rounded">
                Dev Time
              </span>
            </span>
          </h2>
          <p className="text-gray-600 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Create stunning websites without coding. Launch faster, iterate
            quicker, and focus on what matters most - your business.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="bg-black text-white hover:bg-black/90 w-full sm:w-auto text-lg py-2 px-4 rounded flex items-center justify-center">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>

            <button className="border border-gray-300 w-full sm:w-auto text-lg py-2 px-4 rounded flex items-center justify-center text-[#4F46E5] hover:bg-gray-100">
              <PlayCircle className="mr-2 h-5 w-5" />
              View Showreel
            </button>
          </div>
        </div>

        {/* Features Grid */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="h-12 w-12 rounded-lg bg-[#4F46E5]/10 flex items-center justify-center text-[#4F46E5] mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div
          data-aos="fade-up"
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <h4 className="text-3xl md:text-4xl font-bold text-[#4F46E5] mb-2">
                {stat.icon}
                {stat.number}
              </h4>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
