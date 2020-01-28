import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/favorites" component={Favorites}/>
          <Route exact path="/home" component={Home}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
