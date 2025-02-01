"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/Shop?search=${encodeURIComponent(searchTerm)}`);
    }
  };

  return (
    <div className="header flex justify-between items-center p-4 bg-white relative">
      {/* Left Side: Menu */}
      <div className="header-menu-img md:hidden ml-[190px]">
        <Image src="/Images/Menu.svg" width={30} height={30} alt="Menu" />
      </div>

      {/* Center: Navigation Links */}
      <div className="header-links hidden md:flex space-x-6">
        <a href="/" className="hover:text-gray-600">Home</a>
        <a href="/Shop" className="hover:text-gray-600">Shop</a>
        <a href="/About" className="hover:text-gray-600">About</a>
        <a href="/Contact" className="hover:text-gray-600">Contact</a>
      </div>

      {/* Right Side: Icons & Search */}
      <div className="header-btns flex items-center space-x-4">
        <a href="/Account">
          <Image src="/Images/Account.svg" width={28} height={28} alt="Account" />
        </a>

        {/* Search Icon (Click to Toggle Search Bar) */}
        <div className="relative">
          <button onClick={() => setSearchOpen(!searchOpen)} className="p-2">
            <Image src="/Images/Search.svg" width={28} height={28} alt="Search" />
          </button>

          {/* Search Bar (Expands in Place, Styled Like Image) */}
          <div
            className={`absolute right-0 top-12 transition-all duration-300 ${
              searchOpen ? "opacity-100 visible w-72" : "opacity-0 invisible w-0"
            }`}
          >
            <form onSubmit={handleSearch} className="flex items-center bg-[#FBEBB5] rounded-full border">
              <input
                type="text"
                className="w-full p-3 rounded-l-full outline-none text-black placeholder-gray-600"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
              <button type="submit" className="p-3 bg-[#FBEBB5] rounded-r-full">
                <Image src="/Images/Search.svg" width={24} height={24} alt="Search" />
              </button>
            </form>
          </div>
        </div>

        <Link href="/Wishlist">
          <Image src="/Images/WishList.svg" width={28} height={28} alt="Wishlist" />
        </Link>
        <a href="/Cart">
          <Image src="/Images/Cart.svg" width={28} height={28} alt="Cart" />
        </a>
      </div>
    </div>
  );
};

export default Header;
