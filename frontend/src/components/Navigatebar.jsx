import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  FiMenu,
  FiSearch,
  FiHeart,
  FiShoppingBag,
} from "react-icons/fi";
import MenuDrawer from "./MenuDrawer";
import "./Navigatebar.css";

export default function Navigatebar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav className={`navigatebar ${scrolled ? "scrolled" : ""}`}>
        <div className="nav-left">
          <button
            className="icon-btn"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <FiMenu className="nav-icon" />
          </button>
        </div>

        <div className="nav-center">
          <Link to="/" className="brand">
            TREASURES
          </Link>
        </div>

        <div className="nav-right">
          <div className="search-bar">
            <FiSearch className="search-icon" />
            <input type="text" placeholder="Search" />
          </div>

          <button className="icon-btn icon-badge" aria-label="Wishlist">
            <FiHeart className="nav-icon" />
            <span className="badge">2</span>
          </button>

          <button className="icon-btn icon-badge" aria-label="Shopping bag">
            <FiShoppingBag className="nav-icon" />
            <span className="badge">3</span>
          </button>
        </div>
      </nav>

      <MenuDrawer open={open} setOpen={setOpen} />
    </>
  );
}
