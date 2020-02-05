import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import { useAuth0 } from "./react-auth0-spa";
import "./App.css"; 


function App() {

  const { loading } = useAuth0();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <PrivateRoute exact path="/favorites" component={Favorites}/>
          <PrivateRoute exact path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
