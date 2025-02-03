import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   const serviceID = "service_6o8hrl4";
  //   const templateID = "template_nh54k35";
  //   const publicKEY = "BC7hBODDPN6bxE0xO";

  //   try {
  //     const response = await emailjs.send(
  //       serviceID,
  //       templateID,
  //       formData,
  //       publicKEY
  //     );
  //     console.log("success", response.status, response.text);

  //     setStatus("Message send successfully");
  //     setFormData({ name: "", email: "", message: "" });
  //   } catch (error) {
  //     console.error("failed", error);
  //     setStatus("Failed to send message, Please try again later");
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceID = "service_6o8hrl4";
    const templateID = "template_nh54k35";
    const publicKEY = "BC7hBODDPN6bxE0xO";

    emailjs
      .send(serviceID, templateID, formData, publicKEY)
      .then((response) => {
        console.log("success", response.status, response.text);

        setStatus("Message send successfully");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("failed", err);
        setStatus("Failed to send message, Please try again later");
      });
  };

  return (
    <>
      <section className="bg-gray-100 py-16 sm:px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-extrabold text-gray-900 texy-center">
            Contact Us
          </h2>

          <p className="mt-4 text-lg text-gray-600 text-center">
            Have questions or need help? Fill out the form below, and we'll get
            back to you as soon as possible
          </p>

          <div className="mt-8 bg-white p-6 rounded-lg shadoe-md">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  placeholder="Your name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  placeholder="Your email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  type="text"
                  name="message"
                  id="message"
                  rows="4"
                  value={formData.message}
                  placeholder="Your message"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                  onChange={handleChange}
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
              {status && (
                <p
                  className={`text-center mt-4 text-sm ${
                    status.includes("successfully")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactSection;
