"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import qs from "qs";

function EmailSection() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const clearMessages = () => {
    setSuccessMessage("");
    setErrorMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    clearMessages();

    if (!process.env.NEXT_PUBLIC_FORM_ID || !process.env.NEXT_PUBLIC_API_KEY) {
      console.error("Missing env vars.");
      setErrorMessage("Form is not configured properly.");
      setSending(false);
      return;
    }

    const data = qs.stringify({
      "submission[4]": subject,
      "submission[5]": message,
      "submission[9]": email,
    });

    try {
      const res = await axios.post(
        `https://api.jotform.com/form/251727574077061/submissions?apiKey=6076e8417de736c0116a090f7f94398c`,
        data,
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      //kook
      if (res.data.responseCode === 200) {
        setSuccessMessage(" Your message was sent successfully!");
        setEmail("");
        setSubject("");
        setMessage("");
      } else {
        setErrorMessage("Failed to send message. Please try again.");
      }
    } catch (err) {
      setErrorMessage("Submission failed. Check your network.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="w-full py-16 px-4">
      <div className="max-w-[1200px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h4 className="font-ovo text-[17px] font-thin text-gray-800 dark:text-gray-200">
            Get in Touch
          </h4>
          <h2 className="font-ovo text-[35px] mb-4 text-gray-900 dark:text-white">
            Send Me Message Directly
          </h2>
          <p className="text-[15px] text-center font-thin font-ovo max-w-[600px] mx-auto text-gray-700 dark:text-gray-300">
            I'm always interested in hearing about new projects and
            opportunities.
          </p>
        </motion.div>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          onSubmit={handleSubmit}
          className="w-full max-w-[780px] mx-auto flex flex-col"
        >
          <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            Your Email or phone number
          </label>
          <input
            type="text"
            value={email}
            onFocus={clearMessages}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="example@email.com or +1234567890"
            className="mb-6 bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            Subject
          </label>
          <input
            type="text"
            value={subject}
            onFocus={clearMessages}
            onChange={(e) => setSubject(e.target.value)}
            required
            placeholder="Let me know how I can help you"
            className="mb-6 bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />

          <label className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-100">
            Message
          </label>
          <textarea
            value={message}
            onFocus={clearMessages}
            onChange={(e) => setMessage(e.target.value)}
            required
            rows={6}
            placeholder="Leave a comment..."
            className="mb-6 bg-white border border-gray-300 text-sm rounded-lg block w-full p-2.5 dark:bg-gray-800 dark:border-gray-600 dark:text-white"
          />
          {/* ✅ Success & Error messages */}
          {successMessage && (
            <div className="text-green-600 text-center mb-6 text-[15px]">
              {successMessage}
            </div>
          )}
          {errorMessage && (
            <div className="text-red-600 text-center mb-6 text-[15px]">
              {errorMessage}
            </div>
          )}

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={sending}
            className="bg-[#202020] hover:bg-gray-800 text-white font-medium py-2.5 px-5 rounded-lg w-full dark:bg-white dark:text-gray-900 dark:hover:bg-gray-100 transition-all duration-300"
          >
            {sending ? "Sending..." : "Send Message"}
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}

export default EmailSection;
