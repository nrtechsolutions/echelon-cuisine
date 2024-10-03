import Image from 'next/image';

export default function About() {
  return (
    <div className="flex flex-col md:flex-row pt-16 md:pt-20 px-4 md:px-8">
      {/* Left Side: Image */}
      <div className="flex-1">
        <Image
          src="/about_us.jpeg"
          alt="About Us"
          width={500}
          height={500}
          className="w-full h-auto object-cover"
        />
      </div>

      {/* Right Side: Content */}
      <div className="flex-1 p-8">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <h2 className="text-2xl font-semibold mb-4">CHARMINAR Indian Restaurant & Catering!</h2>
        <p>
          A Restaurant serving authentic Indian cuisine, has been an identity for hospitality and a symbol of awesome food served in a spacious environment. Known for serving the best Indian food made with authentic, fresh ingredients and spices to serve the richest of the taste. Whether you’re interested in joining us for lunch or dinner, you’re sure to experience a meal you’ll remember. The delight for our Customers has been further extended to catering at Birthday Parties, Weddings, Private Events & Local Barbecues, making us the most preferred Indian Restaurant & Catering in San Diego!
        </p>
      </div>
    </div>
  );
}
