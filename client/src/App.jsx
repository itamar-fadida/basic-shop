import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Basket from "./pages/Basket";

export default function App() {
  return (
    <Router>
      <header className="bg-gray-900 text-white shadow-md">
        <nav className="container mx-auto flex justify-between items-center p-4">
          <Link to="/" className="text-2xl font-semibold hover:text-blue-400 transition">
            🛍️ Shop
          </Link>
          <Link to="/basket" className="text-lg hover:underline">
            🧺 Basket
          </Link>
        </nav>
      </header>
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
        </Routes>
      </main>
    </Router>
  );
}
