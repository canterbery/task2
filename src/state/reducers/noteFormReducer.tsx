import { ActionTypes } from "../action-types";
import Action from "../actions";

const noteFormReducer = (
  state = { show: false, noteIdForEdit: 0 },
  action: Action
) => {
  switch (action.type) {
    case ActionTypes.SHOW_NOTE_FORM:
      return {
        ...state,
        show: true,
        noteIdForEdit: action.payload === undefined ? 0 : action.payload,
      };
    case ActionTypes.CLOSE_NOTE_FORM:
      return { ...state, show: false, noteIdForEdit: 0 };
    default:
      return state;
  }
};

export default noteFormReducer;
