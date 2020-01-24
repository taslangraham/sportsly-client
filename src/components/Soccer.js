import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../redux/actions";
import Loader from "./Loader"

class Soccer extends Component {

    componentDidMount() {
        this.props.fetchSoccerRegionsAndLeagues()
    }


    render() {

        const { RegionsAndLeagues, loading } = this.props;
        if (loading || RegionsAndLeagues.length === 0) {
            return (<Loader />);
        }

        return (
            <div className="row">
                {
                    RegionsAndLeagues.map((region, i) => (
                        <div>
                            <div class="row">
                                <h1 key={i} >{region.name}</h1>
                            </div>
                            <div class="row">

                                {
                                    region.leagues.map((league, i) => (
                                        <Link to={``} //e.g /nba
                                        >
                                            <div className="col m4">
                                                <div className="card hoverable">
                                                    <div className="card-image responsive-img">
                                                        <img src={league.image || 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1000x-1.jpg'} />
                                                        <span className="card-title"></span>

                                                    </div>
                                                    {
                                                        <div className="card-content white">
                                                            <h5>{league.name}</h5>
                                                        </div>}
                                                </div>
                                            </div>
                                        </Link>

                                    ))
                                }
                            </div>
                            < br />
                        </div>

                    ))
                }

            </div>
        );
    }
}

Soccer.propTypes = {

}

const mapStateToProps = ({ soccerRegionsAndLeagues }) => {
    return soccerRegionsAndLeagues;
};

export default connect(
    mapStateToProps,
    actions
)(Soccer);
