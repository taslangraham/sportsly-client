import {
    FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN,
    FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS,
    FETCH_SOCCER_ARTICLES_BEGIN,
    FETCH_SOCCER_ARTICLES_SUCCESS
} from "../actions/types";

const initialState = {
    RegionsAndLeagues: [],
    league: '',
    error: null,
    loading: false,
    articles: []
};
export default function (state = initialState, action) {
    switch (action.type) {
        case FETCH_SOCCER_REGIONS_AND_LEAGUES_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_SOCCER_REGIONS_AND_LEAGUES_SUCCESS:
            return {
                ...state,
                loading: false,
                error: false,
                RegionsAndLeagues: action.payload
            };

        case FETCH_SOCCER_ARTICLES_BEGIN:
            return {
                ...state,
                loading: true,
                error: false,
            }
        case FETCH_SOCCER_ARTICLES_SUCCESS:
            return {
                ...state,
                articles: action.payload,
                loading: false,
                error: false
            }
        default:
            return state;
    }
}