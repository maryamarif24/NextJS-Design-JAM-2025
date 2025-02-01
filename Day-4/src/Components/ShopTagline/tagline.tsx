import React, { useState } from "react";
import Image from "next/image";

interface TaglineProps {
  currentPage: number;
  itemsPerPage: number;
  totalProducts: number;
  isGridView: boolean;
  toggleView: () => void;
  selectedCategory: string | null;
  setSelectedCategory: (category: string | null) => void;
}

const Tagline: React.FC<TaglineProps> = ({
  currentPage,
  itemsPerPage,
  totalProducts,
  isGridView,
  toggleView,
  selectedCategory,
  setSelectedCategory,
}) => {
  // State for filter sidebar
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Categories List
  const categories = ["Sofa", "Table", "Chair", "Bed"];

  // Calculate displayed product range
  const start = (currentPage - 1) * itemsPerPage + 1;
  const end = Math.min(start + itemsPerPage - 1, totalProducts);

  return (
    <div className="flex flex-wrap items-center justify-between p-4 bg-gray-100 rounded-md shadow">
      {/* Filter Button */}
      <button
        className="flex items-center space-x-2 cursor-pointer hover:text-gray-700"
        onClick={() => setIsFilterOpen(true)}
      >
        <Image src="/Images/Filters.svg" width={30} height={30} alt="Filters" />
        <p>Filter</p>
      </button>

      {/* Sidebar Filter Menu */}
      {isFilterOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4">Filter by Category</h2>

            {/* Category Selection */}
            <ul className="space-y-3">
              {categories.map((category) => (
                <li key={category}>
                  <button
                    className={`w-full text-left px-4 py-2 rounded-md ${
                      selectedCategory === category
                        ? "bg-blue-500 text-white"
                        : "bg-gray-200"
                    }`}
                    onClick={() =>
                      setSelectedCategory(
                        selectedCategory === category ? null : category
                      )
                    }
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>

            {/* Clear Filter Button (Only if a category is selected) */}
            {selectedCategory && (
              <button
                className="mt-4 w-full bg-gray-400 text-white py-2 rounded"
                onClick={() => setSelectedCategory(null)}
              >
                Clear Filter
              </button>
            )}

            {/* Close Button */}
            <button
              className="mt-4 w-full bg-red-500 text-white py-2 rounded"
              onClick={() => setIsFilterOpen(false)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Grid/List View Toggle */}
      <div className="flex space-x-4">
        <button
          onClick={toggleView}
          className={`p-2 rounded ${isGridView ? "bg-gray-300" : "bg-white"}`}
        >
          <Image src="/Images/Grid.svg" width={30} height={30} alt="Grid View" />
        </button>
        <button
          onClick={toggleView}
          className={`p-2 rounded ${!isGridView ? "bg-gray-300" : "bg-white"}`}
        >
          <Image src="/Images/View.svg" width={30} height={30} alt="List View" />
        </button>
      </div>

      {/* Showing X-Y of Z Results */}
      <div className="text-gray-700">
        <p>
          Showing {start}–{end} of {totalProducts} results
        </p>
      </div>

      {/* Show Dropdown */}
      <div className="flex items-center space-x-2">
        <p>Show</p>
        <Image src="/Images/16.svg" width={55} height={55} alt="Items Per Page" />
      </div>

      {/* Sort Dropdown */}
      <div className="flex items-center space-x-2">
        <p>Sort by</p>
        <Image src="/Images/Default.svg" width={188} height={55} alt="Sort Options" />
      </div>
    </div>
  );
};

export default Tagline;