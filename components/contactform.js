import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_ynm25hj",
        "template_mu5a8aq",
        form.current,
        "WAFnZKceHwWKfMgpj"
      )
      .then(
        (result) => {
          //console.log(result.text);
          document.getElementById("contact-form").reset();
          setSent(true);
          //console.log("sent status", sent);
        },
        (error) => {
          //console.log(error.text);
        }
      );
  };

  return (
    // <form ref={form} onSubmit={sendEmail}>
    //   <label>Name</label>
    //   <input type="text" name="user_name" />
    //   <label>Email</label>
    //   <input type="email" name="user_email" />
    //   <label>Message</label>
    //   <textarea name="message" />
    //   <input type="submit" value="Send" />
    // </form>
    <form id="contact-form" ref={form} onSubmit={sendEmail}>
      <div>
        {/* Message indicating that the form was submitted */}
        {sent && (
          <div className="text-white bg-green-500 p-3 rounded mb-3">
            Your message had been sent. Thank you for contacting us!
          </div>
        )}
      </div>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="firstName" className="inline-block mb-1 font-medium">
          Name
        </label>
        <input
          placeholder="John Doe"
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="firstName"
          name="name"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="lastName" className="inline-block mb-1 font-medium">
          Company
        </label>
        <input
          placeholder="Company Inc."
          required
          type="text"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="lastName"
          name="company"
        />
      </div>
      <div className="mb-1 sm:mb-2">
        <label htmlFor="email" className="inline-block mb-1 font-medium">
          E-mail
        </label>
        <input
          placeholder="john.doe@example.com"
          required
          type="email"
          className="flex-grow w-full h-12 px-4 mb-2 transition duration-200 bg-white border border-gray-300 rounded shadow-sm appearance-none focus:border-deep-purple-accent-400 focus:outline-none focus:shadow-outline"
          id="email"
          name="email"
        />
      </div>
      <div className="mt-4 mb-2 sm:mb-4">
        <button
          type="submit"
          value="Send"
          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide bg-EN-secondary text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-EN-darkblue focus:shadow-outline focus:outline-none"
        >
          Lets do it
        </button>
      </div>
      <p className="text-xs text-gray-600 sm:text-sm">
        We will get back to you right away.
      </p>
    </form>
  );
};
