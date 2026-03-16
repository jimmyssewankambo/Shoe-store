import { useState } from "react";
import { FiMenu, FiSearch, FiHeart, FiShoppingBag } from "react-icons/fi";
import MenuDrawer from "./MenuDrawer";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        {/* Left: Hamburger */}
        <div className="nav-left">
          <FiMenu className="nav-icon" onClick={() => setOpen(true)} />
        </div>

        {/* Center: Brand */}
        <div className="nav-center">
          <h1 className="brand">JIMMY’S STORE</h1>
        </div>

        {/* Right: Search + Wishlist + Cart */}
        <div className="nav-right">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>

          <FiHeart className="nav-icon" />
          <FiShoppingBag className="nav-icon" />
        </div>
      </nav>

      <MenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
