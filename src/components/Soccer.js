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
                <div className="container">
                    {
                        RegionsAndLeagues.map((region, i) => (
                            <div key={i} className="row">


                                <div className="center-align">
                                    <h1>{region.name}</h1>
                                </div>
                                {
                                    region.leagues.map((league, key) => (
                                        <Link
                                            key={key}
                                            to={`/soccer/${region.name}/${league.code}`}//e.g /nba
                                        >
                                            <div className="col m4" >
                                                <div className="card medium hoverable">
                                                    <div className="card-image responsive-img">
                                                        <img src={league.image || 'https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iDt6V.rPqgC0/v1/1000x-1.jpg'} style={styles.image} />

                                                    </div>

                                                    {
                                                        <div className="card-content white" style={styles.title}>

                                                            <h5 >{league.name}</h5>
                                                        </div>}
                                                </div>
                                            </div>
                                        </Link>

                                    ))
                                }

                                < br />
                            </div>

                        ))
                    }

                </div>
            </div>
        );
    }


}

const styles = {
    title: {
        color: 'red'
    },
    region: {
        fontWeight: "bolder"
    },
    image: {

        margin: 'auto',
        height: '200px',
        maxWidth: '100%',
        width: '100%',
        overflow: 'hidden'
    }
}


const mapStateToProps = ({ soccerRegionsAndLeagues }) => {
    return soccerRegionsAndLeagues;
};

export default connect(
    mapStateToProps,
    actions
)(Soccer);