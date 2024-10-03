'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';

// Define the structure of the special data
type Special = {
  title: string;
  description: string;
  price: string;
  images: { src: string; description: string }[];
  buttonText: string;
  ingredients: string[];
  cookStyle: string;
};

// Define the specials data for each day of the week
const specialsData: Record<string, Special> = {
  Monday: {
    title: 'Family-Style Meals',
    description: 'Enjoy a family-size pan of your favorite dish or pick up a complete family bundle.',
    price: '$19.99',
    images: [
      { src: '/veg_biryani.jpg', description: 'Delicious Veg Biryani' },
      { src: '/afghan_chicken.jpg', description: 'Afghan Chicken' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Herbs'],
    cookStyle: 'Cooked in dum style with caramelized onions, served with raita.',
  },
  Tuesday: {
    title: 'Taco Tuesday',
    description: 'Get 3 tacos for the price of 2. Available for dine-in only.',
    price: '$9.99',
    images: [
      { src: '/juice.jpg', description: 'Refreshing Juice' },
      { src: '/chilli_chicken.jpg', description: 'Spicy Chilli Chicken' },
    ],
    buttonText: 'Learn More',
    ingredients: ['Tacos', 'Chicken', 'Lettuce', 'Salsa', 'Cheese'],
    cookStyle: 'Served with spicy chicken filling, lettuce, salsa, and cheese.',
  },
  Wednesday: {
    title: 'Mutton Special',
    description: 'Enjoy a special mutton roast dish along with dessert.',
    price: '$15.99',
    images: [
      { src: '/mutton_roast.jpg', description: 'Tender Mutton Roast' },
      { src: '/gulab_jamun.jpg', description: 'Sweet Gulab Jamun' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Mutton', 'Spices', 'Yogurt', 'Onions'],
    cookStyle: 'Marinated with spices and slow-cooked to perfection.',
  },
  Thursday: {
    title: 'Samosa Delight',
    description: 'Get a taste of our crispy samosas with a side of dessert.',
    price: '$8.99',
    images: [
      { src: '/samosa.jpg', description: 'Crispy Samosa' },
      { src: '/gulab_jamun.jpg', description: 'Sweet Gulab Jamun' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Potatoes', 'Peas', 'Spices', 'Flour'],
    cookStyle: 'Deep-fried to perfection, served with tamarind chutney.',
  },
  Friday: {
    title: 'Biryani Friday',
    description: 'Enjoy a variety of delicious biryani dishes.',
    price: '$12.99',
    images: [
      { src: '/veg_biryani.jpg', description: 'Delicious Veg Biryani' },
      { src: '/egg_biryani.jpg', description: 'Flavorful Egg Biryani' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Rice', 'Egg', 'Spices', 'Herbs'],
    cookStyle: 'Cooked in dum style, served with raita and boiled eggs.',
  },
  Saturday: {
    title: 'Tandoori Special',
    description: 'Try our Tandoori Chicken and Butter Paneer specials.',
    price: '$14.99',
    images: [
      { src: '/tandoori_chicken.jpg', description: 'Tandoori Chicken' },
      { src: '/butter_panner.jpg', description: 'Creamy Butter Paneer' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Chicken', 'Paneer', 'Spices', 'Cream'],
    cookStyle: 'Grilled in a tandoor, served with mint chutney.',
  },
  Sunday: {
    title: 'Biryani Feast',
    description: 'Feast on Veg Biryani and Dum Biryani this Sunday.',
    price: '$13.99',
    images: [
      { src: '/veg_biryani.jpg', description: 'Delicious Veg Biryani' },
      { src: '/dum_biryani.jpg', description: 'Aromatic Dum Biryani' },
    ],
    buttonText: 'Order Now',
    ingredients: ['Rice', 'Vegetables', 'Spices', 'Herbs'],
    cookStyle: 'Cooked with fragrant spices, topped with fried onions.',
  },
};

export default function SpecialDetailPage() {
  const [specialItem, setSpecialItem] = useState<Special | null>(null);
  const searchParams = useSearchParams();
  const slug = searchParams.get('slug'); // Get the slug from the query params

  useEffect(() => {
    if (slug && specialsData[slug]) {
      setSpecialItem(specialsData[slug]);
    } else {
      // No slug provided, show today's special based on the current day
      const today = new Date().toLocaleString('en-US', { weekday: 'long' });
      const todaySpecial = specialsData[today as keyof typeof specialsData];
      if (todaySpecial) {
        setSpecialItem(todaySpecial);
      }
    }
  }, [slug]);

  if (!specialItem) {
    return <div className="text-center mt-10 text-2xl">Special not found</div>;
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-screen bg-fixed bg-cover bg-center text-white"
      style={{ backgroundImage: `url(${specialItem.images[0].src})` }}
    >
      {/* Header */}
      <header className="w-full py-8 bg-black bg-opacity-60 text-center">
        <h1 className="text-4xl font-bold text-gold">Special: {specialItem.title}</h1>
      </header>

      {/* Content Section */}
      <section className="w-full max-w-6xl p-8 bg-black bg-opacity-75 text-gold rounded-lg shadow-lg mt-8">
        <h2 className="text-3xl font-bold mb-4">Today&apos;s Special: {specialItem.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Image Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md hover:bg-black hover:text-white transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Image</h3>
            <Image
              src={specialItem.images[0].src}
              alt={specialItem.title}
              width={300}
              height={200}
              className="rounded-lg"
            />
            <p className="mt-4">{specialItem.images[0].description}</p>
          </div>

          {/* Ingredients Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md hover:bg-black hover:text-white transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Ingredients</h3>
            <ul className="list-disc">
              {specialItem.ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>

          {/* Cook Style Section */}
          <div className="flex flex-col items-center justify-center p-6 bg-gray-800 bg-opacity-70 text-gold rounded-lg shadow-md hover:bg-black hover:text-white transition-transform transform hover:scale-105">
            <h3 className="text-xl font-semibold mb-4">Cook Style / Topping</h3>
            <p>{specialItem.cookStyle}</p>
          </div>
        </div>

        {/* Button to go back */}
        <div className="mt-8 text-center">
          <button
            onClick={() => window.history.back()}
            className="bg-yellow-500 text-black px-6 py-2 rounded-lg shadow-md hover:bg-yellow-600"
          >
            Back to Menu
          </button>
        </div>
      </section>
    </div>
  );
}
