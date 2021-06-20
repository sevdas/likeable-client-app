import { Link, Redirect } from "react-router-dom";

export default function Navbar({ loggedIn, setLoggedIn, history }) {
  const handleLogout = () => {
    window.localStorage.removeItem("adminLoggedIn");
    setLoggedIn(false);
    history.push("/auth");
  };

  return (
    <nav
      style={{
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "space-between",
      }}
    >
      <h1>Likeable-app 👍🏼</h1>
      {loggedIn ? (
        <>
          <button onClick={handleLogout}>Log out</button>
          <Redirect to="/quotes" />
        </>
      ) : (
        <div>
          <Link to="/auth">Log In</Link>
          <Link to="/auth">Sign Up</Link>
        </div>
      )}
    </nav>
  );
}
