"use client";
import { useState, useEffect } from "react";
import { fetchProducts } from "@/sanity/lib/fetchProducts";
import Image from "next/image";

export default function Products() {
  const [products, setProducts] = useState<any[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const loadProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };
    loadProducts();

    // Load wishlist from localStorage
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  const toggleWishlist = (productId: string) => {
    let updatedWishlist;
    if (wishlist.includes(productId)) {
      updatedWishlist = wishlist.filter((id) => id !== productId); // Remove if exists
    } else {
      updatedWishlist = [...wishlist, productId]; // Add if not in wishlist
    }
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist)); // Save to localStorage
  };

  return (
    <div className="p-4">
          <h1 className="text-2xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.length > 0 ? (
              products.map((product) => (
                <div
                  key={product._id}
                  className="relative border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                  {/* ❤️ Wishlist Heart Icon */}
                  <button
                    onClick={() => toggleWishlist(product._id)}
                    className="absolute top-3 right-3 bg-white rounded-full shadow p-2 z-10"
                  >
                    <Image
                      src={
                        wishlist.includes(product._id)
                          ? "/Images/Heart-Filled.svg" // Red heart (saved)
                          : "/Images/Heart-Outline.svg" // Gray heart (not saved)
                      }
                      width={24}
                      height={24}
                      alt="Wishlist"
                      className="transition duration-300 ease-in-out"
                    />
                  </button>
    
                  {/* 🖼 Product Image */}
                  <img
                    src={product.image?.asset?.url || "/Images/Placeholder.jpg"}
                    alt={product.name}
                    className="w-full h-40 object-cover rounded-md mb-4"
                  />
    
                  {/* 📌 Product Details */}
                  <h2 className="text-lg font-semibold">{product.name}</h2>
                  <p className="text-sm text-gray-600">{product.description}</p>
                  <p className="font-bold mt-2">${product.price}</p>
                </div>
              ))
            ) : (
              <p>Loading products...</p>
            )}
          </div>
        </div>
  );
}
