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
      {
        name: "Babycorn 65",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "vegetable Manchurain",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Chilli Panner",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
    ],
    "Non-Vegetarian Starters": [
      {
        name: "Kodi Vepudu Boneless",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Angara",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Majestic",
        qty: "-",
        pcs: "",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chilli Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Apollo Fish",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      }
    ],
    "Tandoor Kebabs": [
      {
        name: "Tandoori Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Chicken Boti Kebab",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Chicken Seekh Kebab",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Zafrani Panner Tikka",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
    ],
    "Vegetarian Entrees": [
      {
        name: "Aloo Gobhi",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Navratan Korma",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Channa Masala",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Daal Tadka",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Malai Kofta",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Vegetable Kadai",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$160",
      },
      {
        name: "Panner Butter Masala",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Kadai Panner",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Saag Panner",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
    ],
    "Non-Vegetarian Entrees": [
      {
        name: "Chicken Tikka Masala",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Butter Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Dum Ka Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Ghee Roast",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "170",
      },
      {
        name: "Bezawada Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Bezawada Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chciken Chettinad",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Sukka",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Kadai Goat",
        qty: "-",
        pcs: "-",
        qtrTray: "$70",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Mutton Ghee Roast",
        qty: "-",
        pcs: "-",
        qtrTray: "$70",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Pepper Ghee Roast",
        qty: "-",
        pcs: "-",
        qtrTray: "$70",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Goat Chettinad",
        qty: "-",
        pcs: "-",
        qtrTray: "$70",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Goat Sukka",
        qty: "-",
        pcs: "-",
        qtrTray: "$70",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Egg Pepper Masala",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Egg Ghee Roast",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$150",
      },
    ],
    "Charminar Biryanis": [
      {
        name: "Hyderabadi Goat Dum Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Hyderabadi Chicken Dum Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Chicken 65 Biryani (Boneless)",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Bezawada Biryani (Boneless)",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Gongura Chicken",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Avakaya Chicken Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Avakaya Chicken Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Vegetable Dum Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Panner Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Egg Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Egg Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$160",
      },
      {
        name: "Fish Biryani",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$100",
        fullTray: "$180",
      }

    ],
    "Fresh Tandoor Breads": [
      {
        name: "Tandoori Roti",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Butter Roti",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Classic Naan",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Butter Naan",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Garlic Naan",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Chili Garlic Naan",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Cheese Naan",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
    ],
    "Rice and Sides": [
      {
        name: "Biryani Flavour Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$80",
        fullTray: "$160",
      },
      {
        name: "Jeera Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$80",
        fullTray: "$150",
      },
      {
        name: "Plain Basmati Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$25",
        fullTray: "$50",
      },
      {
        name: "Cucumber Raita",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$25",
        fullTray: "$50",
      },
      {
        name: "Mirchi Ka Salan",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$25",
        fullTray: "$50",
      },
      {
        name: "Indian Pickle",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$25",
        fullTray: "$50",
      },
      {
        name: "Onion Chili Salad",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "$25",
        fullTray: "$150",
      },
      {
        name: "Boiled Eggs (2pc)",
        qty: "1",
        pcs: "$1",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
    ],
    "Indo Chinese": [
      {
        name: "Veg Street Fried Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Egg Street Fried Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Street Fried Rice",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
      {
        name: "Veg Street Noodles",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Egg Street Noodles",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$90",
        fullTray: "$170",
      },
      {
        name: "Chicken Street Noodles",
        qty: "-",
        pcs: "-",
        qtrTray: "$60",
        halfTray: "$100",
        fullTray: "$180",
      },
    ],
    Desserts: [
      {
        name: "Paan Laadu (2pc)",
        qty: "1",
        pcs: "$1",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Gulab Jamun (4pc)",
        qty: "1",
        pcs: "$1",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Ras Malai (4pc)",
        qty: "1",
        pcs: "$1",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Shahi Tukda (4pc)",
        qty: "-",
        pcs: "-",
        qtrTray: "$50",
        halfTray: "$80",
        fullTray: "$160",
      },
    ],
    Beverages: [
      {
        name: "Bottled Water",
        qty: "-",
        pcs: "-",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Soda Can",
        qty: "-",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Thums Up",
        qty: "-",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Mango Lassi",
        qty: "1",
        pcs: "$3",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
      },
      {
        name: "Charminar Ki Chai",
        qty: "1",
        pcs: "$2",
        qtrTray: "-",
        halfTray: "-",
        fullTray: "-",
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
