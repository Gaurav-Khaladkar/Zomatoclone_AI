import { useAuth } from "../context/AuthContext.jsx";

export default function Profile() {
  const { user, logout } = useAuth();

  return (
    <section className="profile-panel">
      <h1>Profile</h1>
      {user ? (
        <>
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Role:</strong> {user.role}</p>
          <button onClick={logout}>Logout</button>
        </>
      ) : (
        <p>No user logged in.</p>
      )}
    </section>
  );
}
