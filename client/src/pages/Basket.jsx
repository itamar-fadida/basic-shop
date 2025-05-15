import { useEffect, useState } from "react";

export default function Basket() {
  const [basket, setBasket] = useState([]);

  const loadBasket = () => {
    fetch("http://localhost:3001/basket")
      .then(res => res.json())
      .then(setBasket);
  };

  useEffect(() => {
    loadBasket();
  }, []);

  const removeFromBasket = (id) => {
    fetch(`http://localhost:3001/basket/${id}`, {
      method: "DELETE",
    }).then(loadBasket);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">🧺 Your Basket</h1>
      {basket.length === 0 ? (
        <p className="text-gray-600">Your basket is empty.</p>
      ) : (
        <ul className="space-y-4">
          {basket.map((item) => (
            <li
              key={item.id}
              className="flex justify-between items-center bg-white p-4 rounded shadow"
            >
              <div className="flex items-center gap-4">
                <img src={item.image} alt={item.title} className="h-12 w-12 object-contain" />
                <div>
                  <h2 className="font-medium">{item.title}</h2>
                  <p className="text-sm text-gray-600">${item.price}</p>
                </div>
              </div>
              <button
                onClick={() => removeFromBasket(item.id)}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
