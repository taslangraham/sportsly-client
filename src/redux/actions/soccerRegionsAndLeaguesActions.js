
import axios from "axios";
import * as routes from "../../routes";

import {
    FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN,
    FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS
} from "./types";


export const fetchSoccerRegionsAndLeagues = () => async dispatch => {
    dispatch({ type: FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN })

    let regionAndLeagues = await axios.get(`${routes.serverUrl}${routes.sports}${routes.soccer}`);

    console.log(regionAndLeagues.data)
    dispatch({
        type: FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS,
        payload: regionAndLeagues.data

    })

}