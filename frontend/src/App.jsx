import { useMemo, useState } from "react";
import { AuthProvider } from "./context/AuthContext.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import { restaurants } from "./services/api.js";

export default function App() {
  const [route, setRoute] = useState("home");
  const [cart, setCart] = useState([]);

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart]
  );

  function addToCart(foodItem, restaurant) {
    setCart((current) => {
      const existing = current.find((item) => item.id === foodItem.id);
      if (existing) {
        return current.map((item) =>
          item.id === foodItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [
        ...current,
        {
          ...foodItem,
          restaurantName: restaurant.name,
          quantity: 1
        }
      ];
    });
  }

  function updateQuantity(itemId, delta) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === itemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }

  function placeOrder() {
    setCart([]);
    setRoute("orders");
  }

  return (
    <AuthProvider>
      <Navbar activeRoute={route} cartCount={cartCount} onNavigate={setRoute} />
      <main className="app-main">
        <AppRoutes
          route={route}
          restaurants={restaurants}
          cart={cart}
          onNavigate={setRoute}
          onAddToCart={addToCart}
          onUpdateQuantity={updateQuantity}
          onPlaceOrder={placeOrder}
        />
      </main>
      <Footer />
    </AuthProvider>
  );
}
