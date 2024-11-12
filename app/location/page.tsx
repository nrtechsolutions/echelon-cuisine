'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const GOOGLE_MAPS_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
const defaultLocation = { lat: 32.9072, lng: -117.1910 };

type Suggestion = {
  place_id: string;
  description: string;
};

type PredefinedLocation = {
  name: string;
  coordinates: { lat: number; lng: number };
  image: string;
  address: string;
};

export default function LocationPage() {
  const [location, setLocation] = useState(defaultLocation);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [error, setError] = useState<string | null>(null);

  const predefinedLocations: PredefinedLocation[] = [
    {
      name: "Charminar SD",
      coordinates: { lat: 32.9072, lng: -117.1910 },
      image: "/charminar_sd.jpg",
      address: "6755 Mira Mesa Blvd, San Diego, CA 92121",
    },
    {
      name: "Charminar Express",
      coordinates: { lat: 32.7157, lng: -117.1611 },
      image: "/charminar_express.jpg",
      address: "Downtown San Diego, CA 92101",
    },
    {
      name: "Charminar North",
      coordinates: { lat: 32.9022, lng: -117.2043 },
      image: "/charminar_north.jpg",
      address: "1234 North Ave, San Diego, CA 92123",
    },
  ];

  useEffect(() => {
    if (!searchQuery) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
          searchQuery
        )}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      setSuggestions(data.predictions || []);
    };

    fetchSuggestions();
  }, [searchQuery]);

  const handleSuggestionClick = async (placeId: string) => {
    try {
      const response = await fetch(
        `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${GOOGLE_MAPS_API_KEY}`
      );
      const data = await response.json();
      const { lat, lng } = data.result.geometry.location;
      setLocation({ lat, lng });
      setSearchQuery('');
      setSuggestions([]);
      setError(null);
    } catch (error) {
      setError('Failed to retrieve location details.');
      console.error(error);
    }
  };

  const handlePredefinedLocationClick = (coordinates: { lat: number; lng: number }) => {
    setLocation(coordinates);
    setError(null);
  };

  return (
    <div
      className="flex flex-col md:flex-row min-h-screen max-w-screen-xl mx-auto p-6 bg-cover bg-center relative gap-6"
      style={{
        backgroundImage: 'url("/location_track.webp")', // Replace with your desired background image
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black opacity-60 z-0"></div>

      {/* Left Section: Location Search and Predefined Locations */}
      <div className="relative z-10 flex flex-1 flex-col text-white">
        <h2 className="text-3xl font-bold mb-4 text-gold">Find Our Location</h2>
        {error && <p className="text-red-500">{error}</p>}

        {/* Location Search Input */}
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Enter a location"
          className="w-full p-3 mb-4 rounded border border-gray-300 bg-black bg-opacity-70 text-white placeholder-gray-400 focus:outline-none focus:border-yellow-500"
        />

        {/* Suggestions List */}
        {suggestions.length > 0 && (
          <ul className="border border-gray-300 rounded shadow-lg max-h-40 overflow-y-auto bg-black bg-opacity-80 text-white">
            {suggestions.map((suggestion) => (
              <li
                key={suggestion.place_id}
                onClick={() => handleSuggestionClick(suggestion.place_id)}
                className="p-2 cursor-pointer hover:bg-gray-700"
              >
                {suggestion.description}
              </li>
            ))}
          </ul>
        )}

        {/* Predefined Locations */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold mb-4 text-gold">Or Choose a Location</h3>
          <div className="grid grid-cols-1 gap-4">
            {predefinedLocations.map((location, index) => (
              <div
                key={index}
                className="flex items-center p-4 border border-gray-300 rounded-lg cursor-pointer hover:bg-gray-800 bg-black bg-opacity-80"
                onClick={() => handlePredefinedLocationClick(location.coordinates)}
              >
                <Image
                  src={location.image}
                  alt={location.name}
                  width={60}
                  height={60}
                  className="rounded-lg"
                />
                <div className="ml-4">
                  <p className="text-lg font-bold text-gold">{location.name}</p>
                  <p className="text-sm text-gray-400">{location.address}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Section: Map with Top Margin */}
      <div className="relative z-10 flex-1 h-[500px] mt-6 md:mt-10 md:ml-6 border-2 border-gold rounded-lg overflow-hidden shadow-lg">
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
  );
}
