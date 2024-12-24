import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerStyle = {
    backgroundColor: "#2D3748", // Warna latar belakang
    color: "#FFFFFF",
    padding: "40px 20px",
    fontFamily: '"Arial", sans-serif',
    textAlign: "center",
  };

  const containerStyle = {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "0 20px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "40px",
  };

  const headingStyle = {
    fontSize: "24px",
    fontWeight: "bold",
    marginBottom: "16px",
    textTransform: "uppercase",
  };

  const linkStyle = {
    color: "#A0AEC0", // Warna teks untuk tautan
    textDecoration: "none",
    transition: "color 0.3s",
  };

  const linkHoverStyle = {
    color: "#E2E8F0", // Warna saat hover
  };

  const newsletterStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  };

  const inputStyle = {
    padding: "12px",
    borderRadius: "5px",
    border: "1px solid #4A5568", // Border yang lebih halus
    backgroundColor: "#1A202C", // Warna latar belakang input
    color: "#FFFFFF",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "12px",
    backgroundColor: "#4F46E5",
    color: "#FFFFFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    transition: "background-color 0.3s",
  };

  const buttonHoverStyle = {
    backgroundColor: "#5A67D8", // Warna saat hover pada tombol
  };

  return (
    <footer style={footerStyle}>
      <div style={containerStyle}>
        {/** DevTime Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h3 style={headingStyle}>DevTime</h3>
          <p style={{ color: "#A0AEC0", marginBottom: "16px" }}>
            Creating stunning websites without the dev time. Launch faster,
            iterate quicker.
          </p>
          <div
            style={{ display: "flex", justifyContent: "center", gap: "20px" }}
          >
            {["Facebook", "Twitter", "Instagram", "Linkedin"].map((icon) => (
              <a
                key={icon}
                href="#"
                style={linkStyle}
                onMouseOver={(e) =>
                  (e.currentTarget.style.color = linkHoverStyle.color)
                }
              >
                {icon === "Facebook" && <Facebook />}
                {icon === "Twitter" && <Twitter />}
                {icon === "Instagram" && <Instagram />}
                {icon === "Linkedin" && <Linkedin />}
              </a>
            ))}
          </div>
        </motion.div>

        {/** Quick Links Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Quick Links
          </h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {["Home", "About", "Services", "Blog", "Contact"].map((link) => (
              <li key={link} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = linkHoverStyle.color)
                  }
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/** Services Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Services
          </h4>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            {[
              "Web Design",
              "Web Development",
              "E-commerce Solutions",
              "SEO Optimization",
              "Content Management",
            ].map((service) => (
              <li key={service} style={{ marginBottom: "8px" }}>
                <a
                  href="#"
                  style={linkStyle}
                  onMouseOver={(e) =>
                    (e.currentTarget.style.color = linkHoverStyle.color)
                  }
                >
                  {service}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>

        {/** Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h4
            style={{
              fontSize: "20px",
              fontWeight: "600",
              marginBottom: "16px",
            }}
          >
            Newsletter
          </h4>
          <p style={{ color: "#A0AEC0", marginBottom: "16px" }}>
            Stay updated with our latest news and offers.
          </p>
          <form style={newsletterStyle}>
            <input
              type="email"
              placeholder="Enter your email"
              style={inputStyle}
            />
            <button
              type="submit"
              style={buttonStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonHoverStyle.backgroundColor)
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor =
                  buttonStyle.backgroundColor)
              }
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>

      {/** Copyright Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          borderTop: "1px solid #4A5568", // Border yang lebih halus
          marginTop: "32px",
          paddingTop: "16px",
        }}
      >
        <p style={{ color: "#A0AEC0", margin: 0 }}>
          © {currentYear} DevTime. All rights reserved.
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
