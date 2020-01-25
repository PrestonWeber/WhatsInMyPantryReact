import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./pages/Login";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/favorites" component={Favorites}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
