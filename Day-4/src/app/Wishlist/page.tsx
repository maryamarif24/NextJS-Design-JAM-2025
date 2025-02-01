"use client";


import { useState, useEffect } from "react";
import Image from "next/image";
import WishHero from "@/Components/WishHero/wishhero";
import Header from "@/Components/Header/header";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const removeFromWishlist = (productId: string) => {
    const updatedWishlist = wishlist.filter((product) => product._id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div>
      <Header />
      <WishHero />
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Your Wishlist</h1>
        {wishlist.length === 0 ? (
          <p className="text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {wishlist.map((product) => (
              <div
                key={product._id}
                className="border rounded-lg p-4 shadow hover:shadow-lg transition relative"
              >
                {/* Remove from Wishlist Button */}
                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full shadow-md hover:bg-red-600"
                >
                  ✕
                </button>

                {/* Product Image */}
                <img
                  src={product.image?.asset?.url || "/Images/Placeholder.jpg"}
                  alt={product.name}
                  className="w-full h-40 object-cover rounded-md mb-4"
                />
                <h2 className="text-lg font-semibold">{product.name}</h2>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="font-bold mt-2">${product.price}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
