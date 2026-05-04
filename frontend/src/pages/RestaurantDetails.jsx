import FoodItemCard from "../components/FoodItemCard.jsx";

export default function RestaurantDetails({ restaurant, onAddToCart }) {
  return (
    <section className="page-grid">
      <div className="details-hero">
        <img src={restaurant.image} alt={restaurant.name} />
        <div>
          <h1>{restaurant.name}</h1>
          <p>{restaurant.cuisine}</p>
          <p>{restaurant.location} - {restaurant.deliveryTime} min</p>
        </div>
      </div>
      <div className="menu-grid">
        {restaurant.menu.map((item) => (
          <FoodItemCard
            key={item.id}
            item={item}
            restaurant={restaurant}
            onAddToCart={onAddToCart}
          />
        ))}
      </div>
    </section>
  );
}
