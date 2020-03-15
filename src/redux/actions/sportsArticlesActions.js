import axios from "axios";
import * as routes from "../../routes";

import {
    FETCH_SPORTS_ARTICLES_BEGIN,
    FETCH_SPORTS_ARTICLES_SUCCESS,


    FETCH_ARTICLE_BEGIN,
    FETCH_ARTICLE_SUCCESS
} from "../actions/types";



export const fetchArticlesBySport = (sport) => async dispatch => {
    dispatch({
        type: FETCH_SPORTS_ARTICLES_BEGIN
    });


    dispatch({
        type: FETCH_SPORTS_ARTICLES_SUCCESS,
        payload: await axios.get(`${routes.serverUrl}${routes.sports}${sport}/${routes.articles}`)

    });
}

export const fetchArticle = (id) => async dispatch => {

    dispatch({
        type: FETCH_ARTICLE_BEGIN
    });

    const article = await axios.get(`${routes.serverUrl}${routes.sports}${routes.article}${id}`);

    dispatch({
        type: FETCH_ARTICLE_SUCCESS,
        payload: article.data

    });
}