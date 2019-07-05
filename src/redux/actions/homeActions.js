import axios from "axios";
import * as routes from "../../routes";
import { FETCH_SPORTS_SUCCESS, FETCH_SPORTS_BEGIN } from "./types";

export const fetchSports = () => async dispatch => {
  dispatch({ type: FETCH_SPORTS_BEGIN });
  const sports = await axios.get(routes.serverUrl + routes.sports);
  dispatch({ type: FETCH_SPORTS_SUCCESS, payload: sports.data });
};
