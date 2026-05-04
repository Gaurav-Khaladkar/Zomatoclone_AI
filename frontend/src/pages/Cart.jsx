export default function Cart({ cart, onUpdateQuantity, onPlaceOrder }) {
  const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const tax = Math.round(subtotal * 0.05);
  const delivery = subtotal > 499 || subtotal === 0 ? 0 : 39;
  const total = subtotal + tax + delivery;

  if (!cart.length) {
    return (
      <section className="empty-panel">
        <h1>Your cart is empty</h1>
        <p>Add food items from a restaurant menu to place an order.</p>
      </section>
    );
  }

  return (
    <section className="cart-layout">
      <div className="cart-items">
        {cart.map((item) => (
          <article className="cart-row" key={item.id}>
            <div>
              <h3>{item.name}</h3>
              <p>{item.restaurantName}</p>
            </div>
            <div className="quantity-control">
              <button onClick={() => onUpdateQuantity(item.id, -1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => onUpdateQuantity(item.id, 1)}>+</button>
            </div>
            <strong>Rs. {item.price * item.quantity}</strong>
          </article>
        ))}
      </div>
      <aside className="bill-panel">
        <h2>Bill Summary</h2>
        <p><span>Subtotal</span><strong>Rs. {subtotal}</strong></p>
        <p><span>Delivery</span><strong>{delivery ? `Rs. ${delivery}` : "Free"}</strong></p>
        <p><span>Tax</span><strong>Rs. {tax}</strong></p>
        <p className="total"><span>Total</span><strong>Rs. {total}</strong></p>
        <button onClick={onPlaceOrder}>Place Order</button>
      </aside>
    </section>
  );
}
