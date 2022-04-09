import { ActionTypes } from "../action-types";
import Action from "../actions";

const filterReducer = (state = false, action: Action) => {
  switch (action.type) {
    case ActionTypes.SHOW_ACTIVE_NOTES:
      return false;
    case ActionTypes.SHOW_ARCHIVED_NOTES:
      return true;
    default:
      return state;
  }
};

export default filterReducer;
