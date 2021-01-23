import * as ActionTypes from "./ActionTypes";

export const toggleFavorite = () => ({
  type: ActionTypes.TOGGLE_FAVORITE,
  payload: id,
});
