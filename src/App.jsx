import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Blog from "./components/Blog";
import GetStarted from "./components/GetStarted";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Blog />
        <GetStarted />
        <Pricing />
        <Testimony />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
