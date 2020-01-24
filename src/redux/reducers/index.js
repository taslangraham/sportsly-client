import {
  combineReducers
} from "redux";
import homeReducer from "./homeReducer";
import articlesReducer from "./sportsArticlesReducer";
import soccerRegionsAndLeaguesReducer from "./soccerRegionsAndLeaguesReducer"
// export the reducers to the application
export default combineReducers({
  sports: homeReducer,
  articles: articlesReducer,
  item: articlesReducer,
  'soccerRegionsAndLeagues': soccerRegionsAndLeaguesReducer
});