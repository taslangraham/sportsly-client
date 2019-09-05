import React from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  withRouter
} from "react-router-dom";

import Home from "./components/Home";
import Header from "./components/Header";
import Articles from "./pages/articles";
import Soccer from "./components/Soccer"
import Item from "./components/Item"
function App() {

  return (
    <div>
      <Router className="container">
        <Header />

        <Route exact path="/" component={Home} />
        <Route path="/soccer" exact component={Soccer} />

        <Route path="/nba" exact component={Articles} />
        <Route path="/wnba" exact component={Articles} />
        <Route path="/nfl" exact component={Articles} />
        <Route path="/:sport/:id" exact component={Item} />

      </Router>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
