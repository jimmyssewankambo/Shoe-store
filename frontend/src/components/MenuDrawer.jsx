import { FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./MenuDrawer.css";

export default function MenuDrawer({ open, setOpen }) {
  const shopItems = [
    { label: "All Products", to: "/products" },
    { label: "Women", to: "/products?category=women" },
    { label: "Men", to: "/products?category=men" },
    { label: "Kids", to: "/products?category=kids" },
    { label: "Hot Sale", to: "/products?category=sale" },
  ];

  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <FiX className="close-icon" onClick={() => setOpen(false)} />
        </div>

        <div className="drawer-section">
          <h3 className="section-title">Shop</h3>
          {shopItems.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="drawer-item"
              onClick={() => setOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div className="drawer-section">
          <h3 className="section-title">Information</h3>
          <p className="drawer-item">About Us</p>
          <p className="drawer-item">Store Locator</p>
          <p className="drawer-item">Contact Us</p>
        </div>

        <div className="drawer-section">
          <h3 className="section-title">Account</h3>
          <p className="drawer-item">Login / Register</p>
        </div>
      </div>
    </>
  );
}
