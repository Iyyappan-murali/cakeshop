import React from "react";
import {
  MapPin,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";
import { Link } from "react-router-dom";


const categories = [
  "Theme Cakes",
  "By Relationship",
  "Desserts",
  "Birthday",
  "Hampers",
  "New",
  "Anniversary",
  "Occasion",
  "Customized Cakes",
];


const CakeCategories = () => {
  return (
    <div className="py-8 px-4 bg-pink-50">
      <h2 className="text-2xl md:text-3xl font-bold text-red-700 mb-6">Cakes</h2>
      <div className="flex flex-wrap gap-4 justify-center md:justify-start">
        {categories.map((category, index) => (
          <div
            key={index}
            className="px-6 py-3 bg-white border border-pink-200 text-pink-700 font-medium rounded-full shadow hover:bg-pink-100 transition-all duration-200 cursor-pointer"
          >
            {category}
          </div>
        ))}
      </div>
    </div>
  );
};


export default function NavbarWithCategories() {
  return (
    <>
      <header className="bg-red-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-3 flex items-center justify-between">

          {/* Logo + Location */}
          <div className="flex items-center gap-4">
            <h1 className="text-2xl font-bold">bakingo</h1>
            <div className="flex items-center gap-1 text-sm cursor-pointer hover:underline">
              <MapPin className="w-4 h-4" />
              <span>Delivering To</span>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex flex-1 mx-6 max-w-xl">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for cakes, occasion, flavour and more..."
                className="w-full py-2 px-4 pr-10 rounded-lg text-black"
              />
              <Search className="absolute right-3 top-2.5 w-5 h-5 text-pink-500" />
            </div>
          </div>

          {/* Right Buttons */}
          <div className="flex items-center gap-4 text-sm">
            <button className="hover:underline hidden md:inline">Track Shipment</button>
            <button className="hover:underline hidden md:inline">Track Order</button>

            <Link to="/cart" className="flex items-center gap-1 hover:underline">
              <ShoppingCart className="w-4 h-4" />
              <span>Cart</span>
            </Link>

            <Link to="/login" className="flex items-center gap-1 hover:underline">
              <User className="w-4 h-4" />
              <span>Login/Signup</span>
            </Link>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="md:hidden px-4 pb-2">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="w-full py-2 px-4 pr-10 rounded-lg text-black"
            />
            <Search className="absolute right-3 top-2.5 w-5 h-5 text-gray-500" />
          </div>
        </div>
      </header>

      {/* Tag Cards Below */}
      <CakeCategories />
    </>
  );
}