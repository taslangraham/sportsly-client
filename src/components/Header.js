import React, { Component, PropTypes } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home";
class header extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}

  componentDidMount() {}

  render() {
    return (
      <div className="navbar-fixed ">
        <nav>
          <div className="nav-wrapper  teal darken-3">
            <Link className="brand-logo left" to="/" component={Home}>
              Sportsly
            </Link>

            <ul className="right">
              <li>
                <a href="sass.html">Home</a>
              </li>
              <li>
                <a href="badges.html">Back</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

header.propTypes = {};

export default header;
