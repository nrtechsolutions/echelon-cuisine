"use client";
import React, { useState } from "react";

type MenuItem = {
  name: string;
  qty: string;
  pcs: string;
  qtrTray: string;
  halfTray: string;
  fullTray: string;
};

type MenuData = {
  [key: string]: MenuItem[];
};

const CateringMenu: React.FC = () => {
  const categories = [
    "Vegetarian Starters",
    "Non-Vegetarian Starters",
    "Tandoor Kebabs",
    "Vegetarian Entrees",
    "Non-Vegetarian Entrees",
    "Charminar Biryanis",
    "Fresh Tandoor Breads",
    "Indo Chinese",
    "Rice and Sides",
    "Desserts",
    "Beverages",
  ] as const;

  type Category = (typeof categories)[number];

  const menuData: MenuData = {
    "Vegetarian Starters": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Non-Vegetarian Starters": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Tandoor Kebabs": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Vegetarian Entrees": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Non-Vegetarian Entrees": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Charminar Biryanis": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Fresh Tandoor Breads": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Rice and Sides": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Indo Chinese": [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    Desserts: [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    Beverages: [
      {
        name: "Vegetable Samosa",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Vegetable Pakora",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Dahi Kebab",
        qty: "1",
        pcs: "$2.50",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Crispy Cauliflower",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
  };

  const categoryImages: { [key in Category]?: string } = {
    "Vegetarian Starters": "/non_veg/veg_pakora-01.jpg",
    "Non-Vegetarian Starters": "/veg/Chettinad.jpg",
    "Tandoor Kebabs": "/non_veg/TANDOORI_CHICKEN.jpg",
    "Vegetarian Entrees": "/veg/ALOO_GOBHI.jpg",
    "Non-Vegetarian Entrees": "/Charminar_Product_Shoot/DSC03320.jpg",
    "Charminar Biryanis": "/Charminar_Product_Shoot/DSC03371.jpg",
    "Fresh Tandoor Breads": "/veg/sukka.jpg",
    "Indo Chinese": "/veg/chicken_fried_rice_fried_rice.jpg",
    "Rice and Sides": "/veg/PANEER_biryani.jpg",
    "Desserts": "/veg/RAS_MALAI-01.jpg",
    "Beverages": "/veg/thums_up-01.jpg",
  };

  const defaultImage = "/images/default.jpg";

  const [selectedCategory, setSelectedCategory] = useState<Category>(
    "Vegetarian Starters"
  );

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Top Navbar */}
      <header className="bg-black bg-opacity-75 text-gold p-4">
        <h1 className="text-2xl font-bold text-center">Catering Menu</h1>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 bg-opacity-75 p-4 rounded-tr-lg shadow-lg">
          <ul className="space-y-2">
            {categories.map((category) => (
              <li
                key={category}
                className={`p-3 rounded-md cursor-pointer transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-gold text-black shadow-md scale-105"
                    : "hover:bg-gray-700 hover:scale-105"
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </li>
            ))}
          </ul>
        </aside>

        {/* Main Content */}
        <main
          className="flex-1 relative p-6 rounded-l-lg shadow-lg"
          style={{
            backgroundImage: `url(${
              categoryImages[selectedCategory] || defaultImage
            })`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Dark overlay for better readability */}
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-l-lg"></div>

          <div className="relative z-10">
            {/* Display Category Name */}
            <h2 className="text-4xl font-bold mb-6 text-center">
              {selectedCategory}
            </h2>

            {/* Table for Menu Items */}
            <div className="overflow-x-auto bg-gray-800 bg-opacity-90 rounded-lg p-4 shadow-lg">
              <table className="w-full text-left table-auto border-collapse">
                <thead>
                  <tr className="bg-gray-900 text-gold border-b border-gray-600">
                    <th className="p-2">Dish Name</th>
                    <th className="p-2">Qty</th>
                    <th className="p-2">Pcs</th>
                    <th className="p-2">Qtr Tray</th>
                    <th className="p-2">Half Tray</th>
                    <th className="p-2">Full Tray</th>
                  </tr>
                </thead>
                <tbody>
                  {menuData[selectedCategory]?.map((item, index) => (
                    <tr
                      key={index}
                      className="border-b border-gray-700 hover:bg-gray-700"
                    >
                      <td className="p-2">{item.name}</td>
                      <td className="p-2">{item.qty}</td>
                      <td className="p-2">{item.pcs}</td>
                      <td className="p-2">{item.qtrTray}</td>
                      <td className="p-2">{item.halfTray}</td>
                      <td className="p-2">{item.fullTray}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default CateringMenu;
