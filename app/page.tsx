"use client";
import { useState, useEffect } from "react";
import TestimonialSlider from "@/app/ui/testimonial";
import Link from "next/link";
import { FaShoppingCart, FaCreditCard, FaSmile } from "react-icons/fa";
import Image from "next/image";
import { useRouter } from "next/navigation";
import resturantPic from "../public/restaurant.jpg";

type MenuType = "Vegetarian" | "Non-Vegetarian" | "All";
type Special = {
  title: string;
  description: string;
  price: string;
  images: { src: string; description: string }[];
  buttonText: string;
  slug: string;
};

const specialsData: Record<string, Special> = {
  Monday: {
    title: "Family-Style Meals",
    slug: "family-style-meals", // Slug for URL
    description:
      "Enjoy a family-size pan of your favorite dish or pick up a complete family bundle.",
    price: "$19.99",
    images: [
      { src: "/veg_biryani.jpg", description: "Delicious Veg Biryani" },
      { src: "/afghan_chicken.jpg", description: "Afghan Chicken" },
    ],
    buttonText: "Order Now",
  },
  Tuesday: {
    title: "Taco Tuesday",
    slug: "taco-tuesday", // Slug for URL
    description: "Get 3 tacos for the price of 2. Available for dine-in only.",
    price: "$9.99",
    images: [
      { src: "/juice.jpg", description: "Refreshing Juice" },
      { src: "/chilli_chicken.jpg", description: "Spicy Chilli Chicken" },
    ],
    buttonText: "Learn More",
  },
  Wednesday: {
    title: "Mutton Special",
    slug: "mutton-special", // Slug for URL
    description: "Enjoy a special mutton roast dish along with dessert.",
    price: "$15.99",
    images: [
      { src: "/mutton_roast.jpg", description: "Tender Mutton Roast" },
      { src: "/gulab_jamun.jpg", description: "Sweet Gulab Jamun" },
    ],
    buttonText: "Order Now",
  },
  Thursday: {
    title: "Samosa Delight",
    slug: "samosa-delight", // Slug for URL
    description: "Get a taste of our crispy samosas with a side of dessert.",
    price: "$8.99",
    images: [
      { src: "/samosa.jpg", description: "Crispy Samosa" },
      { src: "/gulab_jamun.jpg", description: "Sweet Gulab Jamun" },
    ],
    buttonText: "Order Now",
  },
  Friday: {
    title: "Biryani Friday",
    slug: "biryani-friday", // Slug for URL
    description: "Enjoy a variety of delicious biryani dishes.",
    price: "$12.99",
    images: [
      { src: "/veg_biryani.jpg", description: "Delicious Veg Biryani" },
      { src: "/egg_biryani.jpg", description: "Flavorful Egg Biryani" },
    ],
    buttonText: "Order Now",
  },
  Saturday: {
    title: "Tandoori Special",
    slug: "tandoori-special", // Slug for URL
    description: "Try our Tandoori Chicken and Butter Paneer specials.",
    price: "$14.99",
    images: [
      { src: "/tandoori_chicken.jpg", description: "Tandoori Chicken" },
      { src: "/butter_panner.jpg", description: "Creamy Butter Paneer" },
    ],
    buttonText: "Order Now",
  },
  Sunday: {
    title: "Biryani Feast",
    slug: "biryani-feast", // Slug for URL
    description: "Feast on Veg Biryani and Dum Biryani this Sunday.",
    price: "$13.99",
    images: [
      { src: "/veg_biryani.jpg", description: "Delicious Veg Biryani" },
      { src: "/dum_biryani.jpg", description: "Aromatic Dum Biryani" },
    ],
    buttonText: "Order Now",
  },
};

export default function Home() {
  // Move all hooks to the top
  const [special, setSpecial] = useState<Special | null>(null);
  const [activeTab, setActiveTab] = useState<MenuType>("All");
  const router = useRouter();

  useEffect(() => {
    const today = new Date().toLocaleString("en-US", { weekday: "long" });
    const todaySpecial = specialsData[today];

    // Check if a special exists for the current day, and setSpecial to the special or null
    setSpecial(todaySpecial || null);
  }, []);
  // Function to scroll to "Today's Special" section
  const scrollToSpecials = () => {
    const specialsSection = document.getElementById("specials-section");
    specialsSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Continue rendering even if there's no special for today
  // Render empty state or simply continue with other content
  return (
    <main className="flex flex-1 flex-col items-center justify-center pt-[4rem] pb-8">
      {/* Background Section */}
      <div className="relative w-full h-[579px]">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
        >
          <source src="/video/landing_video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center text-white bg-black bg-opacity-50">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            It&apos;s Not Just Food, It&apos;s an Experience
          </h1>

          <div className="mt-8">
            <Link
              href="/specials"
              className="inline-block bg-gold text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white"
            >
              Explore More
            </Link>
          </div>

          <div className="pt-16 cursor-pointer" onClick={scrollToSpecials}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-10 h-10 text-white animate-bounce"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Todays Sepcial */}

      <section id="specials-section" className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-2">Today's Special</h2>
        <div className="border-t border-gray-300 mb-12"></div>

        {special && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {special.images.map((image, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:bg-black hover:text-gold cursor-pointer"
              >
                {/* Display each image with its own block */}
                <Image
                  src={image.src}
                  alt={image.description}
                  width={400}
                  height={250}
                  className="rounded-lg"
                />
                <h3 className="text-2xl font-bold mt-4">{special.title}</h3>
                <p className="text-center mt-2">{special.description}</p>
                <p className="text-center text-lg font-semibold mt-4">
                  {image.description}
                </p>
                <p className="text-center text-lg font-semibold mt-4">
                  {special.price}
                </p>

                {/* Button that redirects to the dynamic special page */}
                <button
                  className="mt-6 bg-yellow-400 text-black px-4 py-2 rounded-lg shadow-md hover:bg-yellow-500 hover:text-white"
                  onClick={() => router.push(`/specials?slug=${special.slug}`)} // Construct URL manually
                >
                  {special.buttonText}
                </button>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* Menu Section */}

      {/* Testimonial Slider */}
      <section className="w-full px-8 py-16 bg-gray-100">
        <h2 className="text-3xl font-bold text-center mb-8">
          What Our Customers Say
        </h2>
        <div className="relative w-full">
          <TestimonialSlider />
        </div>
      </section>
    </main>
  );
}
