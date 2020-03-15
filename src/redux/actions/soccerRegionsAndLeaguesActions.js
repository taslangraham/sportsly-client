
import axios from "axios";
import * as routes from "../../routes";

import {
    FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN,
    FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS,

    FETCH_SOCCER_ARTICLES_BEGIN,
    FETCH_SOCCER_ARTICLES_SUCCESS
} from "./types";


const dispatcher = (type) => async dispatch => dispatch({ type: type })


export const fetchSoccerRegionsAndLeagues = () => async dispatch => {
    dispatcher(FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN);

    let regionAndLeagues = await axios.get(`${routes.serverUrl}${routes.sports}${routes.soccer}`);

    dispatch({
        type: FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS,
        payload: regionAndLeagues.data

    });

}

/**
 * make a check in
 */

export const fetchSoccerArticlesByRegionAndLeagueCode = (leagueCode) => async dispatch => {
    dispatcher(FETCH_SOCCER_ARTICLES_BEGIN);
    console.log(leagueCode)

    let articles = await axios.get(`${routes.serverUrl}${routes.sports}${routes.soccer}${leagueCode}/${routes.articles}`)
    articles = articles.data.articles
    dispatch({
        type: FETCH_SOCCER_ARTICLES_SUCCESS,
        payload: articles

    });

}


// export const fetchSoccerArticleByIdAndRegion
