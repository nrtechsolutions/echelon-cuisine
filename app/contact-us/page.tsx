"use client";

import { useState } from "react";

// Get the Google Maps API key from environment variables
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

// Default coordinates for "6755 Mira Mesa Blvd 113, San Diego, CA 92121"
const defaultLocation = { lat: 32.9072, lng: -117.1910 };

export default function ContactUs() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Submit the form data to Google Form
    const form = document.createElement("form");
    form.action = "https://docs.google.com/forms/d/e/your-form-id/formResponse"; // Replace with your form action URL
    form.method = "POST";
    form.target = "_self";

    // Append input elements to form
    Object.keys(formData).forEach((key) => {
      const input = document.createElement("input");
      input.type = "text";
      input.name = key;
      input.value = formData[key as keyof typeof formData];
      form.appendChild(input);
    });

    document.body.appendChild(form);
    form.submit();
    form.remove(); // Clean up the form after submission
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen">
      {/* Google Maps Background */}
      <div className="absolute inset-0 w-full h-full">
        <iframe
          width="100%"
          height="100%"
          frameBorder="0"
          style={{ border: 0 }}
          src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${defaultLocation.lat},${defaultLocation.lng}&zoom=14`}
          allowFullScreen
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay */}

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl p-8 bg-black mt-12 bg-opacity-80 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-gold text-center mb-4">Contact Us</h2>
        <hr className="w-1/2 mx-auto border-gold mb-8" /> {/* Styled hr like other pages */}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-white mb-2">Full Name</label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-gold"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-white mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-gold"
              required
            />
          </div>

          <div>
            <label htmlFor="phoneNumber" className="block text-white mb-2">Phone Number</label>
            <input
              type="tel"
              id="phoneNumber"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-gold"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-white mb-2">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring focus:ring-gold"
              rows={4}
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-gold text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
