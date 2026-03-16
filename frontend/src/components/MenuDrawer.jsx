import { FiX } from "react-icons/fi";
import "./MenuDrawer.css";

export default function MenuDrawer({ open, setOpen }) {
  return (
    <>
      <div className={`overlay ${open ? "show" : ""}`} onClick={() => setOpen(false)} />

      <div className={`drawer ${open ? "open" : ""}`}>
        <div className="drawer-header">
          <FiX className="close-icon" onClick={() => setOpen(false)} />
        </div>

        <div className="drawer-section">
          <h3 className="section-title">Shop</h3>
          <p className="drawer-item">Women</p>
          <p className="drawer-item">Men</p>
          <p className="drawer-item">Kids</p>
          <p className="drawer-item">Hot Sale</p>
          <p className="drawer-item">Bags</p>
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
