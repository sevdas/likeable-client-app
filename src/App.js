import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import QuotesPage from "./pages/QuotesPage";

function App() {
  const loggedIn = window.localStorage.getItem("adminLoggedIn") === "true";

  useEffect(() => {}, [loggedIn]);

  return (
    <Router>
      <nav>
        <h1>Likeable-app 👍🏼</h1>
        {loggedIn ? (
          "logout"
        ) : (
          <>
            <Link to="/auth">Log In</Link>
            <Link to="/auth">Sign Up</Link>
          </>
        )}
      </nav>
      {!loggedIn && <Redirect to="/auth" />}
      <Route exact path="/auth" component={AuthPage} />
      <Route exact path="/quotes" component={QuotesPage} />
    </Router>
  );
}

export default App;
