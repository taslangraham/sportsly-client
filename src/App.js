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
import Item from "./components/Item";
import SoccerLeagueNews from "./components/SoccerLeagueNews"
function App() {

  return (
    <div>
      <Router className="container">
        <Header />
        <Route component={Home} />
        <Route exact path="/" component={Home} />
        {/* <Route path="/soccer" exact component={Soccer} /> */}

        <Route path="/nba" exact component={Articles} />
        <Route path="/wnba" exact component={Articles} />
        <Route path="/nfl" exact component={Articles} />
        {/* route for each selected article */}
        <Route path="/:sport/:id" exact component={Item} />

        {/* <Route path="/soccer/:region/:code" exact component={SoccerLeagueNews} /> */}


      </Router>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
