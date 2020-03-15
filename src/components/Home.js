import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../redux/actions";

import Sport from "./Sport";
import Loader from "../components/Loader"
class Home extends Component {


  componentDidMount() {
    this.props.fetchSports();
  }

  // render function passes each sport to the Sport component to be displayed
  render() {
    const { sports, loading } = this.props;
    if (loading) {
      return (<Loader />);
    }

    return (
      <div className="row">
        <div className="container">
          {sports.map((sport, i) => (

            <Sport key={i} sport={sport} />

          ))}
        </div>
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
