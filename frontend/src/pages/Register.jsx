import { useAuth } from "../context/AuthContext.jsx";

export default function Register({ onNavigate }) {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    login({
      name: form.get("name").toString(),
      email: form.get("email").toString(),
      role: "USER"
    });
    onNavigate("home");
  }

  return (
    <section className="auth-panel">
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name
          <input name="name" required placeholder="Your name" />
        </label>
        <label>
          Email
          <input name="email" type="email" required placeholder="user@example.com" />
        </label>
        <label>
          Phone
          <input name="phone" required placeholder="9876543210" />
        </label>
        <button type="submit">Register</button>
      </form>
    </section>
  );
}
