import { Clock, Star } from "lucide-react";

export default function RestaurantCard({ restaurant, onOpen }) {
  return (
    <article className="restaurant-card">
      <img src={restaurant.image} alt={`${restaurant.name} food`} />
      <div className="restaurant-card-body">
        <div className="card-title-row">
          <h3>{restaurant.name}</h3>
          <span className="rating"><Star size={14} /> {restaurant.rating}</span>
        </div>
        <p>{restaurant.cuisine}</p>
        <p>{restaurant.location} - Rs. {restaurant.priceForTwo} for two</p>
        <div className="card-footer">
          <span><Clock size={15} /> {restaurant.deliveryTime} min</span>
          <button onClick={() => onOpen(restaurant.id)}>View Menu</button>
        </div>
      </div>
    </article>
  );
}
