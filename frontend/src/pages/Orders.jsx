export default function Orders() {
  return (
    <section className="page-grid">
      <div className="page-header">
        <h1>Orders</h1>
        <p>Track placed, preparing, picked up, and delivered orders here.</p>
      </div>
      <article className="status-card">
        <h2>Demo Order Status</h2>
        <div className="status-steps">
          <span className="done">Placed</span>
          <span className="done">Accepted</span>
          <span>Preparing</span>
          <span>Delivered</span>
        </div>
      </article>
    </section>
  );
}
