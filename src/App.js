import React from "react";
import Home from "./components/Pages";
import StorePage from "./components/Pages/storepage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/store" component={StorePage} exact />
      </Switch>
    </Router>
  );
}
export default App;
