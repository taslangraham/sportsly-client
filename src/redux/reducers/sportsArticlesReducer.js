import {
    FETCH_SPORTS_ARTICLES_BEGIN,
    FETCH_ARTICLE_BEGIN,


    FETCH_SPORTS_ARTICLES_SUCCESS,
    FETCH_ARTICLE_SUCCESS
} from "../actions/types";
import {
    switchCase
} from "@babel/types";


const initialState = {
    articles: [],
    item: [],
    loading: false,
    error: null,
};

export default function (state = initialState, action) {

    switch (action.type) {
        case FETCH_SPORTS_ARTICLES_SUCCESS:
            return {
                ...state,
                error: null,
                loading: false,
                articles: action.payload.data.articles
            }

        case FETCH_SPORTS_ARTICLES_BEGIN:
            return {
                ...state,
                loading: true,
            }

        case FETCH_ARTICLE_BEGIN:

            return {
                ...state,
                loading: true
            }
        case FETCH_ARTICLE_SUCCESS: {
            return {
                ...state,
                loading: false,
                item: action.payload
            }
        }
        default:
            return state
    }
}