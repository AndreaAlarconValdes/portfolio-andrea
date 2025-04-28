import HandwriteText from "../components/HandwriteText";
import EmailForm from "../components/EmailForm";
import Box from "../components/Box";
import "./Contact.css";
import { useColor } from "../context/ColorContext";

const Contact = () => {
  const { color } = useColor();

  return (
    <div
      id="contact"
      className="email-container"
      style={{
        backgroundColor: color,
        backgroundImage: `
        linear-gradient(to right, lightgray 1px, transparent 1px),
        linear-gradient(to bottom, lightgray 1px, transparent 1px)
      `,
        backgroundSize: "100px 100px",
      }}
    >
      <HandwriteText title={`Get in touch with me`} arrowPosition="right" />
      <Box className="email-box">
        <EmailForm />
      </Box>
    </div>
  );
};

export default Contact;
