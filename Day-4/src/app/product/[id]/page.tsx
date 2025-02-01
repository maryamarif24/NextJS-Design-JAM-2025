"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Header from "@/Components/Header/header";
import Footer from "@/Components/Footer/footer";
import { fetchProducts } from "@/sanity/lib/fetchProducts";
import Image from "next/image";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  console.log("Product ID:", id);

  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        const allProducts = await fetchProducts();
        console.log("All Products:", allProducts);
        const foundProduct = allProducts.find((p: any) => p._id === id);
        console.log("Found Product:", foundProduct);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p className="text-center">Loading...</p>;
  if (!product) return <p className="text-center">Product not found.</p>;

  return (
    <div>
      <Header />
      <div className="asgaard-header">
          <div className="sp-link">
              <a href="/" className="sp-link-1">Home</a>
              <Image
                  src="/Images/Right Arrow.svg"
                  width={24}
                  height={24}
                  alt="Arrow"
              />
          </div>
          <div className="sp-link">
              <a href="/Shop" className='sp-link-1'>Shop</a>
              <Image
                  src="/Images/Right Arrow.svg"
                  width={24}
                  height={24}
                  alt="Arrow"
              />
          </div>
          <div className="product-name">
              <h1>{product.name}</h1>
          </div>
      </div>


      <div className="container mx-auto p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Product Image */}
          <div>
            <Image
              src={product.image?.asset?.url || "/Images/Placeholder.jpg"}
              alt={product.name}
              width={493}
              height={500}
              className="rounded-lg"
            />
          </div>

          {/* Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-gray-600 my-2">{product.description}</p>
            <p className="text-xl font-semibold mt-2">${product.price}</p>

            {/* Add to Cart Button */}
            <button className="mt-4 px-6 py-2 bg-black text-white rounded">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProductDetails;