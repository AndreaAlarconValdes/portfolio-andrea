import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const SERVICE_ID = "service_b81msna";
const TEMPLATE_ID = "template_9wdtcgt";
const PUBLIC_KEY = "vXfA7mUcSJZdfiLaq";

const EmailForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const templateParams = {
      name: name,
      email: email,
      to_name: "Andrea Alarcón Valdés",
      message: message,
    };

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, templateParams, {
        publicKey: PUBLIC_KEY,
      })
      .then((response) => {
        console.log("Email sent successfully", response);
        setName("");
        setEmail("");
        setMessage("");

      })
      .catch((error) => {
        console.error("error sending email", error);
      });
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="send-email-form"
        onClick={(e) => e.stopPropagation()}
      >
        <div>
          <p>Name:</p>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <p>Email:</p>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <textarea
          placeholder="Hi Andrea, we would like to contact you..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button type="submit">
          <i className="fa-solid fa-paper-plane"></i>
        </button>
      </form>
    </>
  );
};

export default EmailForm;
