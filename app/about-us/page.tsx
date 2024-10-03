"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

// Google Maps API key should be stored securely (e.g., in .env.local)
const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

export default function About() {
  // Default coordinates for "6755 Mira Mesa Blvd 113, San Diego, CA 92121"
  const defaultLocation = { lat: 32.9072, lng: -117.1910 };

  const [location, setLocation] = useState(defaultLocation); // Set default location
  const [useDefaultLocation, setUseDefaultLocation] = useState(true); // Track if using default location
  const [error, setError] = useState<string | null>(null);

  // Request location from the user
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
          setUseDefaultLocation(false); // Using current location now
        },
        (err) => {
          setError("Geolocation permission denied. Displaying default location.");
          console.error(err);
          setUseDefaultLocation(true); // Use default location if permission denied
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
      setUseDefaultLocation(true); // Fallback to default location
    }
  }, []);

  return (
    <div className="w-full">
      {/* About Us Header */}
      <div className="text-center mt-20"> {/* Increased margin from top */}
        <h2 className="text-3xl font-bold mb-4 text-black">About Us</h2>
        <hr className="w-1/2 mx-auto border-gold mb-8" /> {/* Made hr line wider */}
      </div>

      {/* Card Section with Content and Image */}
      <div className="w-full flex flex-col md:flex-row items-center bg-black text-white p-8 rounded-lg shadow-lg transition-all duration-300 hover:text-gold hover:bg-gray-900 mb-12 max-w-screen-xl mx-auto">
        {/* Left Side: Image */}
        <div className="flex-1 mb-8 md:mb-0">
          <Image
            src="/about_us.jpeg"
            alt="About Us"
            width={500}
            height={500}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>

        {/* Right Side: Description */}
        <div className="flex-1 md:ml-8">
          <p className="text-lg">
            A Restaurant serving authentic Indian cuisine, has been an identity
            for hospitality and a symbol of awesome food served in a spacious
            environment. Known for serving the best Indian food made with
            authentic, fresh ingredients and spices to serve the richest of the
            taste. Whether you’re interested in joining us for lunch or dinner,
            you’re sure to experience a meal you’ll remember. The delight for
            our Customers has been further extended to catering at Birthday
            Parties, Weddings, Private Events & Local Barbecues, making us the
            most preferred Indian Restaurant & Catering in San Diego!
          </p>
        </div>
      </div>

      {/* Find Us Section */}
      <div className="w-full">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-black">Find Us</h2>
          <hr className="w-1/2 mx-auto border-gold mb-8" /> {/* Consistent hr width */}
        </div>

        {/* Map Section */}
        <div className="w-full h-64 md:h-80 border-2 border-gold rounded-lg overflow-hidden shadow-lg max-w-screen-xl mx-auto">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src={`https://www.google.com/maps/embed/v1/view?key=${GOOGLE_MAPS_API_KEY}&center=${location.lat},${location.lng}&zoom=14`}
            allowFullScreen
          />
        </div>
      </div>

      {error && <p className="text-red-500 text-center mt-4">{error}</p>}
      {useDefaultLocation && (
        <p className="text-gray-500 text-center mt-4"> Mira Mesa Blvd, San Diego, CA.</p>
      )}
    </div>
  );
}
