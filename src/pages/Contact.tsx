import EmailForm from "../components/EmailForm";
import Box from "../components/Box";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-page">
      <Box className="email-box">
        <EmailForm />
      </Box>
      </div>
  );
};

export default Contact;
