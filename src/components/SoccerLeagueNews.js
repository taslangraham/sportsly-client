import React, { Component, PropTypes } from 'react'
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import * as actions from "../redux/actions";
import Loader from "./Loader"
import Article from "../components/Article"
import { articles, article } from '../routes';
class SoccerLeagueNews extends Component {


    componentDidMount() {

        let sport = document.location.pathname.split('/').splice(2)
        let leagueCode = sport[1]
        this.props.fetchSoccerArticlesByRegionAndLeagueCode(leagueCode);
    }

    render() {
        const { articles, loading } = this.props

        if (loading) {
            return (
                <Loader />
            )
        }
        return (
            < div className="row" >
                {/* <div className="container"> */}

                {
                    articles.map((article, i) => (
                        < Article article={article} key={i} />
                    ))
                }
                {/* </div> */}
            </div >
        )
    }
}

const mapStateToProps = ({ soccerRegionsAndLeagues }) => {
    return soccerRegionsAndLeagues;
};

export default connect(
    mapStateToProps,
    actions
)(SoccerLeagueNews);