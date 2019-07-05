import { combineReducers } from "redux";
import homeReducer from "./homeReducer";
// export the reducers to the application
export default combineReducers({
  sports: homeReducer
});
