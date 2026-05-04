import RestaurantCard from "../components/RestaurantCard.jsx";

export default function Home({ restaurants, onNavigate }) {
  return (
    <section className="page-grid">
      <div className="page-header">
        <h1>Discover restaurants near you</h1>
        <p>Search, filter, order, and track meals through a clean food delivery workflow.</p>
      </div>
      <div className="restaurant-grid">
        {restaurants.map((restaurant) => (
          <RestaurantCard
            key={restaurant.id}
            restaurant={restaurant}
            onOpen={(id) => onNavigate(`restaurant:${id}`)}
          />
        ))}
      </div>
    </section>
  );
}
