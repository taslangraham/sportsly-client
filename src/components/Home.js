import React, { Component, PropTypes } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";
import { BrowserRouter as Router } from "react-router-dom";

import Sport from "./Sport";
import Articles from "../pages/articles";
import Loader from "../components/Loader"
class Home extends Component {


  componentDidMount() {
    this.props.fetchSports();
  }

  render() {
    const { sports, loading } = this.props;
    if (loading) {
      return (<Loader />);
    }
    return (
      <div className="row">
        {sports.map((sport, i) => (
          <Sport key={i} sport={sport} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ sports }) => {
  return sports;
};

export default connect(
  mapStateToProps,
  actions
)(Home);
