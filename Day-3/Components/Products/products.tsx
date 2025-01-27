import { fetchProducts } from "@/sanity/lib/fetchProducts";


export default async function Page() {
  const products = await fetchProducts();

  return (
    <div>
      
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product: any) => (
            <div
              key={product.name}
              className="border rounded-lg p-4 shadow hover:shadow-lg transition"
            >
              <img
                src={product.image?.asset?.url}
                alt={product.name}
                className="w-full h-40 object-cover rounded-md mb-4"
              />
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-sm text-gray-600">{product.description}</p>
              <p className="font-bold mt-2">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}