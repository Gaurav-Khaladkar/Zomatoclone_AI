import Home from "../pages/Home.jsx";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import RestaurantDetails from "../pages/RestaurantDetails.jsx";
import Cart from "../pages/Cart.jsx";
import Orders from "../pages/Orders.jsx";
import Profile from "../pages/Profile.jsx";

export default function AppRoutes({
  route,
  restaurants,
  cart,
  onNavigate,
  onAddToCart,
  onUpdateQuantity,
  onPlaceOrder
}) {
  if (route === "login") return <Login onNavigate={onNavigate} />;
  if (route === "register") return <Register onNavigate={onNavigate} />;
  if (route === "cart") {
    return (
      <Cart
        cart={cart}
        onUpdateQuantity={onUpdateQuantity}
        onPlaceOrder={onPlaceOrder}
      />
    );
  }
  if (route === "orders") return <Orders />;
  if (route === "profile") return <Profile />;
  if (route.startsWith("restaurant:")) {
    const id = Number(route.split(":")[1]);
    const restaurant = restaurants.find((item) => item.id === id) || restaurants[0];
    return <RestaurantDetails restaurant={restaurant} onAddToCart={onAddToCart} />;
  }

  return <Home restaurants={restaurants} onNavigate={onNavigate} />;
}
