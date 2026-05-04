import { useAuth } from "../context/AuthContext.jsx";

export default function Login({ onNavigate }) {
  const { login } = useAuth();

  function handleSubmit(event) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    login({
      name: form.get("email").toString().split("@")[0],
      email: form.get("email").toString(),
      role: "USER"
    });
    onNavigate("home");
  }

  return (
    <section className="auth-panel">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Email
          <input name="email" type="email" required placeholder="user@example.com" />
        </label>
        <label>
          Password
          <input name="password" type="password" required placeholder="password" />
        </label>
        <button type="submit">Login</button>
      </form>
      <button className="link-button" onClick={() => onNavigate("register")}>
        Create account
      </button>
    </section>
  );
}
