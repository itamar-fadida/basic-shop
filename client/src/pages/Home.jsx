import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(1);
  const perPage = 6;

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(res => res.json())
      .then(setProducts);
  }, []);

  const addToBasket = (product) => {
    fetch("http://localhost:3001/basket", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(product),
    });
  };

  const totalPages = Math.ceil(products.length / perPage);
  const paginated = products.slice((page - 1) * perPage, page * perPage);

  return (
    <div className="space-y-8">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {paginated.map((prod) => (
          <div
            key={prod.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md hover:shadow-xl transition transform hover:scale-105 p-4 flex flex-col"
          >
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded bg-gray-100 flex items-center justify-center">
              <img
                src={prod.image}
                alt={prod.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h2 className="font-semibold text-lg mb-1 line-clamp-1">{prod.title}</h2>
            <p className="text-gray-600 text-sm mb-2 line-clamp-2">{prod.description}</p>
            <p className="text-blue-600 font-bold text-lg mb-4">${prod.price}</p>
            <button
              onClick={() => addToBasket(prod)}
              className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 rounded transition"
            >
              Add to Basket
            </button>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-6">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
            <button
              key={num}
              onClick={() => setPage(num)}
              className={`px-3 py-1 rounded border ${
                page === num
                  ? "bg-blue-500 text-white"
                  : "bg-white text-gray-800 hover:bg-blue-100"
              }`}
            >
              {num}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
