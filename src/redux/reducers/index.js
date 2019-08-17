import {
  combineReducers
} from "redux";
import homeReducer from "./homeReducer";
import articlesReducer from "./sportsArticlesReducer";
import articles from "../../pages/articles";
// export the reducers to the application
export default combineReducers({
  sports: homeReducer,
  articles: articlesReducer,
  item: articlesReducer
});