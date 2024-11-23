"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";

// Menu item type definition
type MenuItem = {
  name: string;
  description: string;
  price: string;
  image: string;
  isHalal?: boolean;
};

// Define menu categories and items
const menuCategories: Record<string, MenuItem[]> = {
  "Family-Style Meals": [
    {
      name: "Veg Biryani",
      description:
        "Aromatic basmati rice cooked with spices and fresh vegetables.",
      price: "$19.99",
      image: "/veg_biryani.jpg",
      isHalal: true,
    },
    {
      name: "Afghan Chicken",
      description: "Tender chicken marinated with Afghan spices.",
      price: "$21.99",
      image: "/afghan_chicken.jpg",
      isHalal: true,
    },
  ],
  Appetizers: [
    {
      name: "Vegetable Samosa",
      description: "Crispy fried dumplings stuffed with potatoes",
      price: "$6.99",
      image: "/samosa.jpg",
      isHalal: true,
    },
    {
      name: "Dahi Kebab",
      description:
        "Hung yogurt infused with Indian spices, breaded and deep fried",
      price: "$8.99",
      image: "/dahi_kebabs.jpg",
      isHalal: true,
    },
    {
      name: "Juice",
      description: "Juice for healthy drinks",
      price: "$9.99",
      image: "/juice.jpg",
      isHalal: true,
    },
  ],
  "Classic Entrées": [
    {
      name: "Tandoori Chicken",
      description: "Grilled chicken marinated in spicy yogurt sauce",
      price: "$12.99",
      image: "/tandoori_chicken.jpg",
    },
    {
      name: "Chicken Majestic",
      description: "Boneless chicken breast stir-fried with Indian spices",
      price: "$13.99",
      image: "/chilli_chicken.jpg",
    },
  ],
  "Amazing Alfredos": [
    {
      name: "Chicken Alfredo",
      description: "Creamy alfredo pasta topped with grilled chicken",
      price: "$16.99",
      image: "/tandoori_chicken.jpg",
    },
  ],
  // Additional categories...
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] =
    useState("Family-Style Meals");

  useEffect(() => {
    // Retrieve the "product" query parameter from the URL
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product === "CharminarSD") {
      setSelectedCategory("Family-Style Meals");
    } else if (product === "CharminarExpress") {
      setSelectedCategory("Appetizers");
    }
  }, []);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="bg-gray-100 min-h-screen p-8 mt-6">
      {/* Tab Navigation */}
      <nav className="flex justify-center space-x-6 border-b-2 border-gray-300 mb-8">
        {Object.keys(menuCategories).map((category) => (
          <button
            key={category}
            onClick={() => handleTabClick(category)}
            className={`text-lg font-semibold hover:text-yellow-500 transition-all ${
              selectedCategory === category
                ? "text-yellow-500 border-b-4 border-yellow-500"
                : "text-gray-500"
            } px-4 py-2`}
          >
            {category.toUpperCase()}
          </button>
        ))}
      </nav>

      {/* Menu Items Display */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {menuCategories[selectedCategory].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-lg p-4 transition-transform transform hover:scale-105 hover:bg-black hover:text-yellow-500"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="rounded-lg"
            />
            <h4 className="text-2xl font-bold mt-4">{item.name}</h4>
            <p className="mt-2 text-gray-700">{item.description}</p>
            <p className="mt-4 text-lg font-semibold">{item.price}</p>
            {item.isHalal && (
              <span className="block mt-2 text-green-500 font-bold">
                Zabia Halal
              </span>
            )}
          </div>
        ))}
      </div>

      {/* Order Now Button */}
      <div className="text-center mt-12">
        <a
          href="https://www.ubereats.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="bg-yellow-500 text-black px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-600 transition-colors">
            Order Now
          </button>
        </a>
      </div>
    </div>
  );
}
