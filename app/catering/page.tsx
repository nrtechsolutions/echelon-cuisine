"use client";

import Image from "next/image";
import Link from "next/link";

export default function Catering() {
  return (
    <div className="w-full pt-16 md:pt-20 px-4 md:px-8" style={{backgroundImage: "url('/biryani_home.jpg')"}}>
      {/* Catering Header */}
      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-gold mb-4">Catering Services</h1>
        <hr className="w-1/4 mx-auto border-gold mb-8" />
      </div>

      {/* Catering Information Section with Black Background and Hover Effect */}
      <div className="max-w-screen-lg mx-auto p-8 bg-black rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 text-center mb-12">
        <p className="text-lg text-gray-300 mb-8">
          Charminar Indian Restaurant & Catering offers exceptional catering services for all your special occasions. We provide a variety of authentic Indian dishes that will impress your guests and make your event truly unforgettable. Our catering services are perfect for weddings, corporate events, private parties, and more.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Whether you're planning a small gathering or a large celebration, our team is dedicated to delivering fresh, flavorful food with the highest level of service. From appetizers to desserts, we offer customized menus to fit your event's needs.
        </p>

        <p className="text-lg text-gray-300 mb-8">
          Contact us today to learn more about our catering packages and make your next event a delicious success!
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-6">
          <Link href="/menu">
            <span className="bg-gold text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 cursor-pointer">
              View Catering Menu
            </span>
          </Link>
          <Link href="/contact">
            <span className="bg-gold text-black px-6 py-3 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white transition duration-300 cursor-pointer">
              Contact Us for Catering
            </span>
          </Link>
        </div>
      </div>

      {/* Catering Images Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-screen-lg mx-auto mb-12">
        <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
          <Image
            src="/paneer_veg.jpg" // Replace with actual image paths
            alt="Catering Event 1"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
        <div className="rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:scale-105">
          <Image
            src="/lamb_no.jpg" // Replace with actual image paths
            alt="Catering Event 2"
            width={600}
            height={400}
            className="w-full h-auto object-cover"
          />
        </div>
      </div>

      {/* Additional Catering Information */}
      <div className="max-w-screen-lg mx-auto p-8 mb-0 bg-black rounded-lg shadow-lg transition-all duration-300 hover:bg-gray-900 text-center">
        <h2 className="text-2xl font-semibold text-gold mb-4">Why Choose Us for Your Catering Needs?</h2>
        <p className="text-lg text-gray-300 mb-8">
          With years of experience and a passion for authentic Indian cuisine, we provide personalized catering services that suit your event’s unique needs. Whether you’re hosting a large-scale wedding or a small intimate gathering, our team is ready to bring the taste of India to your special occasion.
        </p>
      </div>
    </div>
  );
}
