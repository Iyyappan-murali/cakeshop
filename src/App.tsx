import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🖼️ Image Imports
import cakeshop from "./assets/images/cakeshop1.jpg";
import homeCake from "./assets/images/homecake.webp";
import designerCake from "./assets/images/designercake.webp";
import cookiesCake from "./assets/images/cookiescake.webp";
import hampersCake from "../src/assets/images/hamperscake.webp";
import gourmetCake from "./assets/images/gourmet.webp";
import dessertCake from "./assets/images/homecake.webp";
import richChocolateTruffleCake from "./assets/images/rich chocolate truffle cake.webp";
import juicyMangoDelightCake from "./assets/images/juicy mango delight cake.webp";
import chocolateVanilla from "./assets/images/Chocolate vanilla.webp";
import tropicalFruitAlmondCake from "./assets/images/tropical fruit n almond cake.webp";
import rosePetalsPistachio from "./assets/images/rose petals n pistachio.webp";
import onTimeDelivery from "./assets/images/on-time-delivery.webp";
import design from "./assets/images/design.webp";
import order from "./assets/images/order.webp";
import baked from "./assets/images/baked.webp";
import backgroundimg from"./assets/images/backgroundimg.webp";

// 📦 Components
import Navbar from "./Components/Navbar";

// 📄 Pages
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import About from "./Pages/About";
import Contact from "./Pages/Contact";

import './App.css';

// 🎂 Category Data
const categoryData = [
  { name: "Classic", img: homeCake },
  { name: "Gourmet", img: gourmetCake },
  { name: "Designer", img: designerCake },
  { name: "Desserts", img: dessertCake },
  { name: "Cookies", img: cookiesCake },
  { name: "Hampers", img: hampersCake },
];

// 🏆 Bestsellers
const bestsellers = [
  {
    name: "Rich Chocolate Truffle Cake",
    img: richChocolateTruffleCake,
    price: 549,
    originalPrice: 599,
    discount: "9% OFF",
    rating: "4.9",
    reviews: "6.5K"
  },
  {
    name: "Juicy Mango Delight Cake",
    img: juicyMangoDelightCake,
    price: 599,
    rating: "4.9",
    reviews: "50"
  },
  {
    name: "Chocolate Vanilla Half & Half Cake",
    img: chocolateVanilla,
    price: 549,
    rating: "4.9",
    reviews: "2.6K"
  },
  {
    name: "Tropical Fruit n Almond Cake",
    img: tropicalFruitAlmondCake,
    price: 699,
    rating: "4.9",
    reviews: "1.9K"
  },
  {
    name: "Rose Petals N Pistachio Rasmalai Cake",
    img: rosePetalsPistachio,
    price: 699,
    rating: "4.8",
    reviews: "402"
  }
];

// 🤝 Our Promise Cards
const promises = [
  {
    title: "ON-TIME DELIVERY",
    subtitle: "Because no one likes late surprises.",
    img: onTimeDelivery
  },
  {
    title: "500+ DESIGNS",
    subtitle: "Wishes come in all shapes and sizes.",
    img: design
  },
  {
    title: "2 CR+ ORDERS",
    subtitle: "You can close your eyes and trust us.",
    img: order
  },
  {
    title: "BAKED FRESH",
    subtitle: "Spreading smiles, one slice at a time.",
    img: baked
  },
];

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      {/* Hero Section */}
      <section className="bg-green-900 text-white px-4 py-10 md:py-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="flex-1">
            <img
              src={cakeshop}
              alt="Theme Cake"
              className="w-full max-w-[600px] mx-auto md:mx-0 rounded-xl drop-shadow-xl"
            />
          </div>
          <div className="flex-1 text-center md:text-left space-y-4">
            <h2 className="text-3xl md:text-5xl font-extrabold italic">Find Your Wonder</h2>
            <p className="text-lg md:text-xl font-semibold tracking-wide">THEME CAKES</p>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium shadow">
              ORDER NOW
            </button>
          </div>
        </div>
      </section>

      {/* Routes */}
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      {/* Menu Section */}
      <section className="text-center mt-10 px-4">
        <h1 className="text-4xl font-bold text-white bg-blue-600 inline-block px-6 py-2 rounded-md shadow-md">
          Menu
        </h1>
        <p className="mt-2 text-lg font-medium">What will you wish for?</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-6">
          {categoryData.map((category) => (
            <div
              key={category.name}
              className="bg-white rounded-xl shadow hover:shadow-lg p-4 transition duration-300 text-center"
            >
              <img
                src={category.img}
                alt={category.name}
                className="w-full h-32 object-cover rounded-lg mb-2"
              />
              <h3 className="text-lg font-bold text-red-600">{category.name}</h3>
              <p className="text-sm text-gray-500">Cake Category</p>
            </div>
          ))}
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="mt-12 px-4">
        <h2 className="text-3xl font-bold text-center text-red-700 mb-6">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {bestsellers.map((cake, index) => (
            <div
              key={index}
              className="bg-red-50 p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <img
                src={cake.img}
                alt={cake.name}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="font-semibold text-lg text-red-700 mb-1">{cake.name}</h3>
              <div className="flex items-center justify-between text-sm mb-1">
                <div className="text-gray-800 font-bold">₹{cake.price}</div>
                {cake.originalPrice && (
                  <div className="line-through text-gray-400">₹{cake.originalPrice}</div>
                )}
                {cake.discount && (
                  <span className="text-green-600 font-medium">{cake.discount}</span>
                )}
              </div>
              <div className="flex items-center justify-between mt-1 text-sm">
                <div className="flex items-center gap-1 text-yellow-600 font-bold">★ {cake.rating}</div>
                <div className="text-gray-500">({cake.reviews} Reviews)</div>
              </div>
              <button className="mt-3 bg-red-600 hover:bg-red-700 text-white w-full py-1 rounded text-sm font-semibold">
                Wishlist
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Our Promise Section */}
      <section className="bg-yellow-50 py-12 px-4 text-center">
        <h2 className="text-3xl font-bold text-red-700 mb-4">Our Promise</h2>
        <p className="text-gray-700 max-w-xl mx-auto mb-10 italic">
          There’s no secret spell—only honest, hard work!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {promises.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition text-center"
            >
              <img
                src={item.img}
                alt={item.title}
                className="w-20 h-20 mx-auto mb-4 object-contain"
              />
              <h3 className="text-lg font-semibold text-red-600 mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.subtitle}</p>
            </div>
          ))}
        </div>

        <button className="mt-8 bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-medium shadow">
          View All
        </button>
      </section>

      {/* Contact Us Section */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-700 mb-8">Contact Us</h1>

        <div className="bg-white rounded-xl shadow-lg p-6 md:p-10 space-y-8">
          <div className="text-center space-y-2">
            <p className="text-lg text-gray-700">Have questions, feedback, or custom cake orders?</p>
            <p className="text-lg font-medium text-gray-900">We’d love to hear from you!</p>
          </div>
<div
  className="bg-cover bg-center h-screen"
  style={{ backgroundImage: `url(${backgroundimg})` }}
>
  {/* Your content here */}
</div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
              <input
                type="email"
                placeholder="Your Email"
                className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
                required
              />
            </div>
            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
            />
            <textarea
              placeholder="Your Message"
              className="border border-gray-300 rounded-lg p-3 w-full focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700 transition font-semibold"
            >
              Send Message
            </button>
          </form>

          <div className="mt-10 text-sm text-center text-gray-500">
            <p>Email: iyyappanmurali23@gmail.com</p>
            <p>Phone: +91 9600361158</p>
            <p>Location: Anna Nagar, Chennai, India</p>
          </div>
        </div>
      </section>
    </BrowserRouter>
  );
}

export default App;