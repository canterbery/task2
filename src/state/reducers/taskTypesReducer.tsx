import { ActionTypes } from "../action-types";
import Action from "../actions";
import { noteCategories } from "../initialState";

const taskTypesReducer = (state = noteCategories, action: Action) => {
  switch (action.type) {
    case ActionTypes.GET_TASK_TYPES:
      return state;

    default:
      return state;
  }
};

export default taskTypesReducer;
