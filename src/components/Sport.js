import React, { Component, PropTypes } from "react";
import { Link } from "react-router-dom";

class componentName extends Component {
  render() {
    return (
      <Link to={"/" + this.props.sport.sport}>
        <div className="col m4">
          <div className="card hoverable">
            <div className="card-image responsive-img">
              <img src={this.props.sport.logoUrl} />
              <span className="card-title">{this.props.sport.sport}</span>
            </div>
            <div className="card-content">
              <p>Get the most up to date {this.props.sport.sport} news</p>
            </div>
          </div>
        </div>
      </Link>
    );
  }
}

componentName.propTypes = {};

export default componentName;
