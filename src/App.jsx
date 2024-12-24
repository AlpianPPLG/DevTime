import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./pages/Login"; // Import halaman Login
import SignIn from "./pages/SignIn"; // Import halaman SignIn

function App() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > window.innerHeight) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        {/* Rute dengan Navbar */}
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Navbar />
                <Hero />
                <About />
                <Blog />
                <GetStarted />
                <Pricing />
                <Testimony />
                <FAQ />
                <Contact />
                <Footer />
              </>
            }
          />
          {/* Rute tanpa Navbar */}
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </div>
      {scrolling && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-5 bg-blue-600 text-white rounded-full p-3 shadow-lg transition-transform transform hover:scale-110"
        >
          ↑
        </button>
      )}
    </Router>
  );
}

export default App;
