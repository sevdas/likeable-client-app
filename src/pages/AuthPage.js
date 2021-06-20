import { useState } from "react";

const validUser = { username: "admin", password: "123" };

export default function AuthPage({ history }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (username === validUser.username && password === validUser.password) {
      window.localStorage.setItem("adminLoggedIn", true);
      setErrorMsg("");
      history.push("/quotes");
    } else {
      setErrorMsg("Try again bro!");
    }
  };

  const handleChange = (event) => {
    const { value, id } = event.target;
    id === "username" ? setUsername(value) : setPassword(value);
  };

  return (
    <>
      <h1>Log In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          onChange={handleChange}
          type="text"
          id="username"
          value={username}
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <button type="submit">Auth Me!</button>
        <p style={{ color: "red" }}>{errorMsg}</p>
      </form>
    </>
  );
}
