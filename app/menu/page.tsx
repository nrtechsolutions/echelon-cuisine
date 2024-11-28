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
  "Vegetarian Starters": [
    {
      name: "Vegetable Samosa (2 pcs)",
      description: "Crispy fried dumplings stuffed with potatoes",
      price: "$6.99",
      image: "/veg/veg samosa-01.jpg",
      isHalal: false,
    },
    {
      name: "Vegetable Pakoras",
      description:
        "Fried fritters made with mixed vegetables coated in chickpea batter",
      price: "$6.99",
      image: "/veg/veg pakora-01.jpg",
      isHalal: false,
    },
    {
      name: "Crispy Cauliflower ",
      description: "Cauliflower florets stir-fried with an Indo-Chinese sauce",
      price: "$12.99",
      image: "/veg/crispy cauliflower-01.jpg",
      isHalal: false,
    },
    {
      name: "Babycorn 65",
      description:
        "Deep fried baby corn coated with batter & cooked in Indo-Chinese style",
      price: "$12.99",
      image: "/veg/babycorn 65-01.jpg",
      isHalal: false,
    },
    {
      name: "Paneer 65",
      description:
        "Paneer Stir Fried with ginger-garlic, yogurt, lime and curry leaves",
      price: "$13.99",
      image: "/veg/paneer 65-01.jpg",
      isHalal: false,
    },
    {
      name: "Chili Paneer",
      description:
        "Cottage cheese stir-fried with bell pepper and onions in chili sauce",
      price: "$13.99",
      image: "/veg/CHILLI PANEER-01.jpg",
      isHalal: false,
    },
  ],
  "Non-Vegetarian Starters": [
    {
      name: "Kodi Vepudu Boneless",
      description:
        "Boneless chicken thigh stir-fried in special In-house sauce",
      price: "$13.99",
      image: "/veg/KODI VEPUDU-01.jpg",
      isHalal: true,
    },
    {
      name: "Chicken Angara",
      description:
        "Boneless chicken breast stir-fried with unique spicy flavors sauce",
      price: "$13.99",
      image: "/veg/CHICKEN ANGARA-01.jpg",
      isHalal: true,
    },
    {
      name: "Chicken Majestic",
      description:
        "Boneless chicken breast stir-fried and cooked with Indian spices",
      price: "$13.99",
      image: "/veg/CHICKEN MAJESTIC-01.jpg",
      isHalal: true,
    },
    {
      name: "Chicken 65",
      description:
        "Boneless chicken thigh stir-fried with ginger-garlic, yogurt, lime and curry leaves",
      price: "$13.99",
      image: "/veg/CHICKEN 65-01.jpg",
      isHalal: true,
    },
    {
      name: "CHILLI CHICKEN",
      description:
        "Boneless chicken thigh stir-fried with bell Pepper and onions in chili sauce",
      price: "$13.99",
      image: "/veg/CHILLI CHICKEN-01.jpg",
      isHalal: true,
    },
    {
      name: "KARIPATA CHICKEN",
      description:
        "Boneless chicken thigh stir-fried with roasted curry leaves masala",
      price: "$13.99",
      image: "/veg/KARIPATA CHICKEN-01.jpg",
      isHalal: true,
    },
    {
      name: "APOLLO FISH",
      description: "Battered Fish fillets stir-fried in special Indian Spices",
      price: "$13.99",
      image: "/veg/APOLLO FISH-01.jpg",
      isHalal: true,
    },
  ],
  "Tandoor Kebabs": [
    {
      name: "Tandoori Chicken",
      description:
        "Two grilled chicken leg-quarters marinated in a spicy yogurt sauce",
      price: "$14.99",
      image: "/veg/TANDOORI CHICKEN-01.jpg",
      isHalal: true,
    },
    {
      name: "Chicken Boti Kebab",
      description:
        "Grilled chicken tenders (boneless), marinated with fennel and indian spices",
      price: "$12.99",
      image: "/veg/CHICKEN BOTI KEBAB-01.jpg",
      isHalal: true,
    },
    {
      name: "Malai Kebab",
      description:
        "Boneless chicken marinated with juicy mixture of cream, creamy cheese and cashews and aromatic spices, grilled in an authentic tandoor",
      price: "$14.99",
      image: "/veg/MALAI KEBAB-01.jpg",
      isHalal: true,
    },
    {
      name: "Paneer Tikka Kebab",
      description:
        "Grilled paneer and vegetables marinated in lemon, yogurt, garlic and spices",
      price: "$12.99",
      image: "/veg/PANEER TIKKA KEBAB-01.jpg",
      isHalal: true,
    },
  ],
  "Vegetarian Entrées": [
    {
      name: "Aloo Gobi",
      description:
        "Potatoes and cauliflower florets cooked in a savory onion and ginger-garlic sauce.",
      price: "$15.99",
      image: "/veg/ALOO_GOBHI.jpg",
      isHalal: true,
    },
    {
      name: "Navratan Korma",
      description:
        "Rich and creamy dish that literally translates to nine-gem korma.",
      price: "$15.99",
      image: "/veg/NAVRATAN KORMA-01.jpg",
      isHalal: true,
    },
    {
      name: "Chana Masala",
      description:
        "Boiled chickpeas cooked in a deep-roasted, tomato-onion gravy.",
      price: "$15.99",
      image: "/veg/CHANA MASALA-01.jpg",
      isHalal: true,
    },
    {
      name: "Daal Tadka",
      description: "Lentils cooked in onion, tomato sauce and Indian spices.",
      price: "$15.99",
      image: "/veg/daal tadka-01.jpg",
      isHalal: true,
    },
    {
      name: "Kadai Vegetable",
      description:
        "Pan-seared vegetables cooked with roasted onions and tomatoes.",
      price: "$15.99",
      image: "/veg/KADAI VEGETABLE-01.jpg",
      isHalal: true,
    },
    {
      name: "Kadai Paneer",
      description: "Pan-seared paneer cooked with roasted onions and tomatoes.",
      price: "$16.99",
      image: "/veg/KADAI PANEER-01.jpg",
      isHalal: true,
    },
    {
      name: "Paneer Butter Masala",
      description:
        "Cottage cheese cooked with roasted spices, onions, tomatoes and cream, with a touch of fenugreek.",
      price: "$16.99",
      image: "/veg/PANEER_BUTTER_MASALA.jpg",
      isHalal: true,
    },
    {
      name: "Bagare Baingan",
      description:
        "Bagare baigan is a traditional curried eggplant dish from Hyderabad.",
      price: "$16.99",
      image: "/veg/BAGARE BAIGAN-01.jpg",
      isHalal: true,
    },
    {
      name: "Saag Paneer",
      description:
        "Cottage cheese and spinach slow-cooked in an onion-based ginger-garlic sauce.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  "Non-vegetarian Entrées": [
    {
      name: "Chicken Tikka Masala",
      description:
        "Boneless chicken breast cooked with roasted spices, onions, tomato sauce, bell peppers, cashew nut paste and cream.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Butter Chicken",
      description:
        "Boneless chicken thigh cooked with roasted spices, tomato sauce, cashew nut paste & cream.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Dum Ka Chicken",
      description:
        "Slow-cooked chicken curry made with spice-marinated onions, ginger-garlic, tomatoes and nuts, originally created in the royal courts of Hyderabad.",
      price: "$16.99",
      image: "/veg/dkc.jpg",
      isHalal: true,
    },
    {
      name: "Chicken Ghee Roast",
      description:
        "Chicken ghee roast is a fiery and spicy dish with a flavor of ghee roasted spices.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Bezwada Chicken",
      description: "Boneless chicken thigh battered cooked in Bezwada sauce.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Chicken Sukka",
      description:
        "Chicken marinated in Indian spices, cooked on a low flame until spices are thoroughly soaked up.",
      price: "$16.99",
      image: "/veg/sukka.jpg",
      isHalal: true,
    },
    {
      name: "Chicken Chettinad",
      description:
        "Chicken marinated in yogurt, turmeric, red chilies and unique Chettinad spices and oils.",
      price: "$16.99",
      image: "/veg/Chettinad.jpg",
      isHalal: true,
    },
    {
      name: "Kadai Goat",
      description:
        "Pan-seared meat cooked with roasted onions, bell peppers, and tomatoes.",
      price: "$18.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Goat Sukka",
      description:
        "Goat cubes marinated in Indian spices, cooked on a low flame until spices are thoroughly soaked up.",
      price: "$18.99",
      image: "/veg/goat sukka.jpg",
      isHalal: true,
    },
    {
      name: "Mutton Ghee Roast",
      description:
        "Goat ghee roast is a fiery and spicy dish with a flavor of ghee roasted spices.",
      price: "$18.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Pepper Goat Masala",
      description: "Goat cubes cooked with Indian spices and black pepper.",
      price: "$18.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Goat Chettinad",
      description:
        "Goat meat marinated in yogurt, turmeric, red chilies and unique Chettinad spices and oils.",
      price: "$18.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Egg Pepper Masala",
      description: "Boiled eggs cooked with Indian spices and black pepper.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Egg Ghee Roast",
      description:
        "Egg ghee roast is a fiery and spicy dish with a flavor of ghee roasted spices.",
      price: "$16.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  "Charminar Biryanis": [
    {
      name: "Hyderabadi Goat Dum Biryani",
      description:
        "Aromatic, succulent goat meat in layers of fluffy rice, fragrant spices, and caramelized onions. Available on Fri, Sat & Sun only.",
      price:
        "$19.99 (Regular 32 OZ), $30.99 (Family 58 OZ), $64.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Hyderabadi Chicken Dum Biryani",
      description:
        "Aromatic chicken biryani with layers of rice and fragrant spices.",
      price:
        "$17.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/veg/CHICKEN BIRYANI-01.jpg",
      isHalal: true,
    },
    {
      name: "Chicken 65 Biryani (Boneless)",
      description:
        "Boneless chicken biryani with a twist of Chicken 65 spices.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Bezawada Biryani (Boneless)",
      description: "Boneless biryani in Bezawada style with rich spices.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Gongura Chicken Biryani",
      description: "Chicken biryani with the tangy flavor of Gongura leaves.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Avakaya Chicken Biryani",
      description: "Chicken biryani flavored with traditional Avakaya spices.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Vegetable Dum Biryani",
      description:
        "Aromatic vegetable biryani with spices and caramelized onions. Available on Fri, Sat & Sun only.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/veg/VEG DUM BIRYANI-01.jpg",
      isHalal: true,
    },
    {
      name: "Paneer Biryani",
      description: "Fluffy rice layered with spicy paneer and fragrant spices.",
      price:
        "$18.99 (Regular 32 OZ), $30.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/veg/PANEER_biryani.jpg",
      isHalal: true,
    },
    {
      name: "Egg Biryani",
      description: "Egg biryani with layers of fragrant rice and spices.",
      price:
        "$18.99 (Regular 32 OZ), $29.99 (Family 58 OZ), $59.99 (Bucket 120 OZ)",
      image: "/veg/egg biryani-01.jpg",
      isHalal: true,
    },
    {
      name: "Fish Biryani",
      description:
        "Delicious fish biryani with layers of fragrant rice and spices.",
      price:
        "$19.99 (Regular 32 OZ), $30.99 (Family 58 OZ), $64.99 (Bucket 120 OZ)",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  "Fresh Tandoor Breads": [
    {
      name: "Tandoori Roti",
      description:
        "Whole-wheat, unleavened Indian bread cooked in a tandoor oven.",
      price: "$3.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Butter Roti",
      description:
        "Butter-infused, whole-wheat, unleavened Indian bread cooked in a tandoor oven.",
      price: "$3.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Classic Naan",
      description: "Teardrop-shaped, leavened bread baked in a tandoor oven.",
      price: "$3.99",
      image: "/veg/CLASSIC NAAN-01.jpg",
      isHalal: true,
    },
    {
      name: "Butter Naan",
      description:
        "Butter-infused, teardrop-shaped, leavened bread baked in a tandoor oven.",
      price: "$3.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Garlic Naan",
      description:
        "Garlic and herb-infused, teardrop-shaped, leavened bread baked in a tandoor oven.",
      price: "$3.99",
      image: "/veg/GARLIC NAAN-01.jpg",
      isHalal: true,
    },
    {
      name: "Chili Garlic Naan",
      description:
        "Chili-Garlic infused, teardrop-shaped, leavened bread baked in a tandoor oven.",
      price: "$3.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Cheese Naan",
      description:
        "Buttery leavened bread baked in a tandoor oven, stuffed with cottage cheese and seasoned with Indian spices.",
      price: "$3.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  "Indo Chinese": [
    {
      name: "Veg Street Fried Rice",
      description: "",
      price: "$14.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Egg Street Fried Rice",
      description: "",
      price: "$14.99",
      image: "/veg/egg fried rice (2).jpg",
      isHalal: true,
    },
    {
      name: "Chicken Street Fried Rice",
      description: "",
      price: "$15.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  "Rice & Sides": [
    {
      name: "Biryani Flavour Rice",
      description: "",
      price: "$6.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Jeera Rice",
      description: "",
      price: "$6.99",
      image: "/veg/Jerra  rice.jpg",
      isHalal: true,
    },
    {
      name: "Basmati Rice",
      description: "",
      price: "$1.99",
      image: "/veg/basamati rice  rice.jpg",
      isHalal: true,
    },
    {
      name: "Cucumber Raita",
      description: "",
      price: "$1.49",
      image: "/veg/raita.jpg",
      isHalal: true,
    },
    {
      name: "Indian Pickle",
      description: "",
      price: "$1.49",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Mirchi Ka Salan",
      description: "",
      price: "$1.49",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  Desserts: [
    {
      name: "Paan Laddu (2pcs)",
      description:
        "Laddu made from paan chutney, Gulkant, Funnel seeds, Coconut & Condensed milk.",
      price: "$4.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Gulab Jamun (4 Pcs)",
      description:
        "Deep-fried milk-based balls drenched in a sweet sugary syrup.",
      price: "$5.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Ras Malai (4 Pcs)",
      description:
        "Rasmalai is cottage cheese balls soaked in thickened, sweetened and flavored milk.",
      price: "$6.99",
      image: "/veg/RAS_MALAI-01.jpg",
      isHalal: true,
    },
    {
      name: "Shahi Tukda (4 Pcs)",
      description:
        "Ghee-fried pieces of bread cooked in a bath of sugary, milk-based rabdi infused with cardamom and nuts.",
      price: "$7.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Jamun Ka Ghosla",
      description:
        "A decadent dessert, made with authentic Hyderabadi pheni and scrumptious gulab jamun, delicious rabdi, topped with cardamom powder and nuts.",
      price: "$7.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  Beverages: [
    {
      name: "Mango Lassi",
      description: "",
      price: "$3.99",
      image: "/veg/MANGO LASSI-01.jpg",
      isHalal: true,
    },
    {
      name: "Bottled Water",
      description: "",
      price: "$1.49",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Charminar ki Chai",
      description: "",
      price: "$2.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
    {
      name: "Soda",
      description: "",
      price: "$2.99",
      image: "/veg/SODA-01.jpg",
      isHalal: true,
    },
    {
      name: "Thums up",
      description: "",
      price: "$3.99",
      image: "/veg/thums_up-01.jpg",
      isHalal: true,
    },
    {
      name: "Limca",
      description: "",
      price: "$3.99",
      image: "/veg/LIMCA-01.jpg",
      isHalal: true,
    },
  ],
  Feast: [
    {
      name: "Family Feast",
      description:
        "Serves 4 to 5 people. Includes choice of family pack biryani + choice of Entree + choice of appetizer + classic naan (2 pcs) + 1 dessert + 2 drinks. Additional charges applied on certain items",
      price: "$64.99",
      image: "/charminar_logo.png",
      isHalal: true,
    },
  ],
  // Additional categories...
};

export default function MenuPage() {
  const [selectedCategory, setSelectedCategory] = useState(
    "Vegetarian Starters"
  );

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const product = params.get("product");

    if (product === "CharminarSD") {
      setSelectedCategory("Vegetarian Starters");
    } else if (product === "CharminarExpress") {
      setSelectedCategory("Non-Vegetarian Starters");
    }
  }, []);

  const handleTabClick = (category: string) => {
    setSelectedCategory(category);
  };
  
  return (
    <div className="bg-black min-h-screen px-4 py-12 flex flex-col lg:flex-row space-x-6">
      {/* Sidebar Navigation */}
      <aside className="w-full lg:w-1/4 bg-gradient-to-b from-gray-800 via-gray-900 to-gray-800 bg-opacity-75 p-4 rounded-tr-lg shadow-lg text-white">
        <h2 className="text-xl font-bold mb-4 text-yellow-500">
          Menu Categories
        </h2>
        <nav className="space-y-4">
          {Object.keys(menuCategories).map((category) => (
            <button
              key={category}
              onClick={() => handleTabClick(category)}
              className={`block text-left text-lg  w-full px-4 py-2 rounded-lg ${
                selectedCategory === category
                  ? "bg-yellow-500 text-white"
                  : "text-white hover:bg-yellow-500 hover:text-black"
              }`}
            >
              {category}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 bg-black text-white">
        <h1 className="text-2xl lg:text-3xl  text-yellow-500 mb-6 py-3">
          {selectedCategory}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
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
              <h4 className="text-xl lg:text-2xl font-bold mt-4">
                {item.name}
              </h4>
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
      </main>
    </div>
  );
}
