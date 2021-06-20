import { useState } from "react";
import { Route, Redirect, useHistory } from "react-router-dom";
import AuthPage from "./pages/AuthPage";
import QuotesPage from "./pages/QuotesPage";
import Navbar from "./components/Navbar";

function App() {
  const [loggedIn, setLoggedIn] = useState(
    window.localStorage.getItem("adminLoggedIn") === "true"
  );

  let history = useHistory();

  return (
    <>
      <Navbar loggedIn={loggedIn} setLoggedIn={setLoggedIn} history={history} />
      {!loggedIn && <Redirect to="/auth" />}
      <Route exact path="/auth">
        <AuthPage setLoggedIn={setLoggedIn} />
      </Route>
      <Route exact path="/quotes" component={QuotesPage} />
    </>
  );
}

export default App;
