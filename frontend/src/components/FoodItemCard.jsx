export default function FoodItemCard({ item, restaurant, onAddToCart }) {
  return (
    <article className="food-item-card">
      <div>
        <span className={item.veg ? "food-type veg" : "food-type nonveg"} />
        <h3>{item.name}</h3>
        <p>{restaurant.name}</p>
      </div>
      <strong>Rs. {item.price}</strong>
      <button onClick={() => onAddToCart(item, restaurant)}>Add</button>
    </article>
  );
}
