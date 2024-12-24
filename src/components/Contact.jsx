import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { Helmet } from "react-helmet";
import "react-toastify/dist/ReactToastify.css";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validasi input
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("All fields are required."); // Tampilkan pesan error
      setIsSubmitting(false);
      return;
    }

    const mailtoLink = `mailto:nova07pplg@gmail.com?subject=Contact from ${
      formData.name
    }&body=${encodeURIComponent(formData.message)}%0D%0A%0D%0AFrom: ${
      formData.email
    }`;

    // Membuka aplikasi email default
    window.location.href = mailtoLink;

    // Menampilkan toast notification
    toast.success("Message sent successfully!");

    // Mengosongkan kolom input
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <>
      <Helmet>
        <title>Home - DevTime</title>
        <meta
          name="description"
          content="Get in touch with us for any inquiries or feedback."
        />
        <meta name="keywords" content="contact, feedback, inquiries, support" />
        <meta name="robots" content="index, follow" />
      </Helmet>
      <ToastContainer />
      <section
        id="contact"
        style={{ backgroundColor: "#f9f9f9", padding: "60px 20px" }}
      >
        <div
          style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Get in Touch
            </h2>
            <p
              style={{ fontSize: "20px", color: "#555", marginBottom: "40px" }}
            >
              Have questions or feedback? Wed love to hear from you!
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <form
              onSubmit={handleSubmit}
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  fontSize: "16px",
                }}
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                style={{
                  padding: "10px",
                  borderRadius: "4px",
                  border: "1px solid #ccc",
                  minHeight: "150px",
                  fontSize: "16px",
                }}
              />
              <button
                type="submit"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "10px",
                  backgroundColor: "#4F46E5",
                  color: "#fff",
                  border: "none",
                  borderRadius: "4px",
                  cursor: "pointer",
                  fontSize: "16px",
                  width: "100%",
                }}
                disabled={isSubmitting}
              >
                <span style={{ marginRight: "8px" }}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </span>
                <Send style={{ verticalAlign: "middle" }} />
              </button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              width: "100%",
              backgroundColor: "#fff",
              padding: "20px",
              borderRadius: "8px",
              boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
            }}
          >
            <h3
              style={{
                fontSize: "24px",
                fontWeight: "bold",
                marginBottom: "16px",
              }}
            >
              Contact Information
            </h3>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "16px" }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Phone
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#4F46E5",
                    marginRight: "8px",
                  }}
                />
                <span>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Mail
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#4F46E5",
                    marginRight: "8px",
                  }}
                />
                <span>info@yourcompany.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <MapPin
                  style={{
                    height: "24px",
                    width: "24px",
                    color: "#4F46E5",
                    marginRight: "8px",
                  }}
                />
                <span>123 Web Dev Street, Internet City, 12345</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
