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
function App() {
  return (
    <div>
      <Router className="container">
        <Header />
        <Route exact path="/" component={Home} />
        {/* <Route path="/soccer" component={Articles} /> */}
      </Router>
    </div>
  );
}

const mapStateToProps = state => ({});

export default connect(mapStateToProps)(App);
