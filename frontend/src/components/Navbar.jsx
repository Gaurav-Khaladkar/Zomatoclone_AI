import { ShoppingBag, User, Utensils } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "orders", label: "Orders" },
  { id: "profile", label: "Profile" }
];

export default function Navbar({ activeRoute, cartCount, onNavigate }) {
  return (
    <header className="navbar">
      <button className="brand-button" onClick={() => onNavigate("home")}>
        <span className="brand-mark"><Utensils size={18} /></span>
        SmartFood
      </button>

      <nav className="nav-links" aria-label="Primary navigation">
        {links.map((link) => (
          <button
            key={link.id}
            className={activeRoute === link.id ? "is-active" : ""}
            onClick={() => onNavigate(link.id)}
          >
            {link.label}
          </button>
        ))}
      </nav>

      <div className="nav-actions">
        <button onClick={() => onNavigate("cart")}>
          <ShoppingBag size={18} />
          Cart {cartCount}
        </button>
        <button onClick={() => onNavigate("login")}>
          <User size={18} />
          Login
        </button>
      </div>
    </header>
  );
}
