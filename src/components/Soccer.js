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
                        <div key={i}>
                            <div className="row">
                                <h1>{region.name}</h1>
                            </div>
                            <div className="row">

                                {
                                    region.leagues.map((league, key) => (
                                        <Link
                                            key={key}
                                            to={`/soccer/${region.name}/${league.code}`}//e.g /nba
                                        >
                                            <div className="col m4" >
                                                <div className="card hoverable">
                                                    <div className="card-image responsive-img">
                                                        <img src={league.image || 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1000x-1.jpg'} style={styles.image} />
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

const styles = {

    image: {

        margin: 'auto',
        height: '200px',
        width: '100%',
        overflow: 'auto'
    }
}


const mapStateToProps = ({ soccerRegionsAndLeagues }) => {
    return soccerRegionsAndLeagues;
};

export default connect(
    mapStateToProps,
    actions
)(Soccer);