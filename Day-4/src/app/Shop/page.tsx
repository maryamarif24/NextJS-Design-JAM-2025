"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import Header from "@/Components/Header/header";
import Footer from "@/Components/Footer/footer";
import ShopHero from "@/Components/ShopHero/shophero";
import TagLine from "@/Components/ShopTagline/tagline";
import Why from "@/Components/Why/why";
import { fetchProducts } from "@/sanity/lib/fetchProducts";

const ShopPage = () => {
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("search") || "";
  const [products, setProducts] = useState<any[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [wishlist, setWishlist] = useState<any[]>([]);
  const [isGridView, setIsGridView] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Fetch products
  useEffect(() => {
    const loadProducts = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchProducts();
        setProducts(allProducts);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  // Load Wishlist from localStorage
  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(storedWishlist);
  }, []);

  // Filter products based on search query and selected category
  useEffect(() => {
    let updatedProducts = products;

    if (searchQuery) {
      updatedProducts = updatedProducts.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedCategory) {
      updatedProducts = updatedProducts.filter((product) =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }

    setFilteredProducts(updatedProducts);
    setCurrentPage(1); // Reset pagination when filtering
  }, [searchQuery, selectedCategory, products]);

  // Toggle Wishlist
  const toggleWishlist = (product: any) => {
    let updatedWishlist = wishlist.some((item) => item._id === product._id)
      ? wishlist.filter((item) => item._id !== product._id) // Remove
      : [...wishlist, product]; // Add

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const currentProducts = filteredProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div>
      <Header />
      <ShopHero />

      {/* Tagline with Grid/List Toggle & Filter */}
      <TagLine
        currentPage={currentPage}
        itemsPerPage={itemsPerPage}
        totalProducts={filteredProducts.length}
        isGridView={isGridView}
        toggleView={() => setIsGridView(!isGridView)}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* Category Filters */}
      <div className="flex justify-center space-x-4 my-4">
        {["All", "Sofa", "Table", "Chair", "Bed"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category === "All" ? null : category)}
            className={`px-4 py-2 border rounded ${
              selectedCategory === category ? "bg-black text-white" : "bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Search Query Display */}
      {searchQuery && (
        <p className="text-center text-gray-600 my-4">
          Showing results for: <strong>{searchQuery}</strong>
        </p>
      )}

      {/* Products Grid/List View */}
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div
          className={
            isGridView
              ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
              : "space-y-6"
          }
        >
          {loading ? (
            <p>Loading products...</p>
          ) : currentProducts.length > 0 ? (
            currentProducts.map((product) => (
              <Link href={`/product/${product._id}`} key={product._id}>
                <div
                  className={`relative border rounded-lg p-4 shadow hover:shadow-lg transition ${
                    isGridView ? "" : "flex items-center space-x-4"
                  }`}
                >
                  {/* Wishlist Heart Icon */}
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      toggleWishlist(product);
                    }}
                    className="absolute top-3 right-3 bg-white rounded-full shadow p-2 z-10"
                  >
                    <Image
                      src={
                        wishlist.some((item) => item._id === product._id)
                          ? "/Images/Heart-Filled.svg"
                          : "/Images/Heart-Outline.svg"
                      }
                      width={24}
                      height={24}
                      alt="Wishlist"
                    />
                  </button>

                  {/* Product Image */}
                  <img
                    src={product.image?.asset?.url || "/Images/Placeholder.jpg"}
                    alt={product.name}
                    className={`rounded-md ${
                      isGridView ? "w-full h-40 object-cover" : "w-32 h-32"
                    }`}
                  />

                  {/* Product Details */}
                  <div className={isGridView ? "" : "flex-1"}>
                    <h2 className="text-lg font-semibold">{product.name}</h2>
                    <p className="text-sm text-gray-600">{product.description}</p>
                    <p className="font-bold mt-2">Rs. {product.price}</p>
                  </div>
                </div>
              </Link>
            ))
          ) : (
            <p>No products found.</p>
          )}
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center mt-6 space-x-4">
        {/* Previous Page */}
        {currentPage > 1 && (
          <button
            onClick={() => setCurrentPage(currentPage - 1)}
            className="px-4 py-2 border rounded bg-[#FBEBB5] text-black hover:bg-[#f8db7d]"
          >
            Previous
          </button>
        )}

        {/* Page Numbers */}
        <div className="flex space-x-2">
          {[...Array(totalPages)].map((_, index) => (
            <button key={index} onClick={() => setCurrentPage(index + 1)}>
              <Image
                src={`/Images/${index + 1}.svg`}
                width={50}
                height={50}
                alt={`Page ${index + 1}`}
                className={`cursor-pointer ${
                  currentPage === index + 1 ? "border-2 border-blue-500" : ""
                }`}
              />
            </button>
          ))}
        </div>

        {/* Next Page */}
        {currentPage < totalPages && (
          <button
            onClick={() => setCurrentPage(currentPage + 1)}
            className="px-4 py-2 border rounded bg-[#FBEBB5] text-black hover:bg-[#f8db7d]"
          >
            Next
          </button>
        )}
      </div>

      <Why />
      <Footer />
    </div>
  );
};

export default ShopPage;