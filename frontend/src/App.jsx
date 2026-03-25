import { Route, Routes } from "react-router-dom";
import HeroVideo from "./components/HeroVideo.jsx";
import CategoryGrid from "./components/CategoryGrid.jsx";
import Navigatebar from "./components/Navigatebar.jsx";
import Products from "./pages/Products.jsx";

function HomePage() {
  return (
    <>
      <HeroVideo />
      <CategoryGrid />
    </>
  );
}

function App() {
  return (
    <>
      <Navigatebar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
