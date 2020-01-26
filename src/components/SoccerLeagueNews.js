import React, { Component, PropTypes } from 'react'

class SoccerLeagueNews extends Component {
    region = '';
    leagueCode = '';

    componentDidMount() {
        let sport = document.location.pathname.split('/').splice(2)
        this.region = sport[0];
        this.leagueCode = sport[1]

        // make request to ESPN API to get news article fom select region and league
    }

    render() {
        return (
            <div>
                {/* load articles here */}
            </div>
        )
    }
}

SoccerLeagueNews.propTypes = {

}

export default SoccerLeagueNews