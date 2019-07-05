import { FETCH_SPORTS_BEGIN, FETCH_SPORTS_SUCCESS } from "../actions/types";
const initialState = {
  sports: [],
  error: null,
  loading: false,
  loading: false
};
export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_SPORTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null
      };
    case FETCH_SPORTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        sports: action.payload.sports
      };
    default:
      return state;
  }
}
