import { useState, useContext, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./EmailService.css";
import { ModeContext } from "../Context/ModeContext";
import toast from "react-hot-toast";

export const EmailService = () => {
  const serviceId = process.env.REACT_APP_SERVICE_ID;
  const templateId = process.env.REACT_APP_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_PUBLIC_KEY;

  let ModeInfo = useContext(ModeContext);
  const [isLoading, setIsLoading] = useState(false);
  const [focusedField, setFocusedField] = useState(null);

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading("Sending email...", { id: "loading" });

    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      () => {
        console.log("SUCCESS!");
        toast.dismiss("loading");
        toast.success("Email sent successfully!", { duration: 4000 });
        e.target.reset();
        setIsLoading(false);
      },
      (error) => {
        console.log("FAILED...", error.text);
        toast.dismiss("loading");
        toast.error("Failed to send email. Please try again.", {
          duration: 4000,
        });
        setIsLoading(false);
      }
    );
  };

  return (
    <div
      style={{ backgroundColor: ModeInfo.isDark ? "#202020" : "#f3f3f3" }}
      className="email-maindiv"
    >
      <div className="email-header">
        <h2 className="email-title">Send me Mail</h2>
        <p
          className="email-subtitle"
          style={{ color: ModeInfo.isDark ? "#aaa" : "#666" }}
        >
          I'd love to hear from you. Drop me a message!
        </p>
      </div>

      <form className="email-form" ref={form} onSubmit={sendEmail}>
        <div
          className={`form-group ${focusedField === "name" ? "focused" : ""}`}
        >
          <label
            className="form-label"
            style={{ color: ModeInfo.isDark ? "#e0e0e0" : "#333" }}
          >
            Name
          </label>
          <input
            type="text"
            name="from_name"
            placeholder="John Doe"
            className="form-input"
            style={{
              backgroundColor: ModeInfo.isDark ? "#2a2a2a" : "#ffffff",
              color: ModeInfo.isDark ? "#e0e0e0" : "#333",
              borderColor: ModeInfo.isDark ? "#404040" : "#ddd",
            }}
            onFocus={() => setFocusedField("name")}
            onBlur={() => setFocusedField(null)}
            required
          />
        </div>

        <div
          className={`form-group ${focusedField === "email" ? "focused" : ""}`}
        >
          <label
            className="form-label"
            style={{ color: ModeInfo.isDark ? "#e0e0e0" : "#333" }}
          >
            Email
          </label>
          <input
            type="email"
            name="user_email"
            placeholder="john@example.com"
            className="form-input"
            style={{
              backgroundColor: ModeInfo.isDark ? "#2a2a2a" : "#ffffff",
              color: ModeInfo.isDark ? "#e0e0e0" : "#333",
              borderColor: ModeInfo.isDark ? "#404040" : "#ddd",
            }}
            onFocus={() => setFocusedField("email")}
            onBlur={() => setFocusedField(null)}
            required
          />
        </div>

        <div
          className={`form-group ${
            focusedField === "message" ? "focused" : ""
          }`}
        >
          <label
            className="form-label"
            style={{ color: ModeInfo.isDark ? "#e0e0e0" : "#333" }}
          >
            Message
          </label>
          <textarea
            name="message"
            placeholder="Write your message here..."
            className="form-textarea"
            style={{
              backgroundColor: ModeInfo.isDark ? "#2a2a2a" : "#ffffff",
              color: ModeInfo.isDark ? "#e0e0e0" : "#333",
              borderColor: ModeInfo.isDark ? "#404040" : "#ddd",
            }}
            onFocus={() => setFocusedField("message")}
            onBlur={() => setFocusedField(null)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className={`submit-btn ${isLoading ? "loading" : ""}`}
        >
          {isLoading ? (
            <>
              <span className="spinner"></span>
              Sending...
            </>
          ) : (
            <>
              <span className="send-icon">✉</span>
              Send Message
            </>
          )}
        </button>
      </form>
    </div>
  );
};

export default EmailService;
